
import React, { useEffect, useCallback, useState} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from 'moment';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputTextController } from '../common/InputTextController';
import { CalendarController } from '../common/CalendarController';
import { DropdownController } from '../common/DropdownController';
import SalaryService from './SalaryService';
import BuildingEmployeeService from './BuildingEmployeeService';

export const BuildingEmployeeForm = (props) => {
    const { display, toast, flagChange, setLoading, handleHide, setFlagChange, buildingEmployeeToUpdate, isUpdate } = props;
    const msgError = 'Trường bắt buộc';
    const [position, setPosition] = useState();
    const [level, setLevel] = useState(); 

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name]?.message}</small>
    };

    const defaultValues = {
        name: '',
        address: '',
        dateOfBirth: null,
        phone: '',
        level: '',
        position: ''
    };

    const schema = yup.object().shape({
        name: yup.string().required(msgError),
        dateOfBirth: yup.date().required(msgError),
        address: yup.string().required(msgError),
        phone: yup.string().required(msgError),
        level: yup.string().required(msgError),
        position: yup.string().required(msgError)
    });
    const { control, formState: { errors, isSubmitting }, handleSubmit, reset, setValue, getValues} = useForm({ defaultValues, resolver: yupResolver(schema) });

    useEffect(() => {
        if(buildingEmployeeToUpdate) {
            setValue('name', buildingEmployeeToUpdate?.name);
            setValue('dateOfBirth', new Date(buildingEmployeeToUpdate?.dateOfBirth));
            setValue('address', buildingEmployeeToUpdate?.address);
            setValue('phone', buildingEmployeeToUpdate?.phone);
            setValue('position', buildingEmployeeToUpdate?.salaryResponse.position);
            setValue('level', buildingEmployeeToUpdate?.salaryResponse.level);
            // setValue('salary', buildingEmployeeToUpdate?.salaryResponse.salary);
            getLevel()
        }
        const getData = async() => {
            await SalaryService.getAllPosition().then((response) => {
                setPosition(response.data.data)
            });
        }
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [buildingEmployeeToUpdate]);

    const getLevel =() => {
        const position = getValues('position');
        SalaryService.getAllLevelByPosition(position).then((response) => {
            setLevel(response.data.data)
        });
    }
    const renderFooter = () => {
        return (
          <>
            <Button label="Lưu" icon="pi pi-check" disabled={isSubmitting}
              onClick={handleSubmit(onSubmit)}/>
          </>
        );
    }
    const onSubmit = useCallback(async (data) => {
        console.log(data)
        try {
            setLoading(true);
            const params = {
                ...data,
                dateOfBirth: moment(data?.dateOfBirth).format('YYYY-MM-DD')
            };
            if(isUpdate){
                await BuildingEmployeeService.updateBuildingEmployee(buildingEmployeeToUpdate?.id,params)
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Update Company successfully!!!', life: 5000 });
                handleHideDialog();
                setFlagChange(!flagChange);
            } else {
                await BuildingEmployeeService.createBuildingEmployee(params)
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Add Company successfully!!!', life: 5000 });
                handleHideDialog();
                setFlagChange(!flagChange);
            }
          
          
        } catch (error) {
          toast.current.show({ severity: 'error', summary: 'Error', detail: error?.response?.data?.errors, life: 5000 });
        console.log(error)
        }
        finally {
            setLoading(false);
        }
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    const handleHideDialog = () => {
        setFlagChange(!flagChange);
        handleHide();
        reset()
    }

    return (
        <>
            <Dialog header={isUpdate? 'Chỉnh sửa': 'Thêm mới'} visible={display} onHide={handleHideDialog}  
                style={{width: '65vw'}} position={'top'} modal
                footer={renderFooter}
            >
                <form>
                    <div className="p-fluid">
                        <div className="p-grid">
                            <div className="p-col-12 p-md-6">
                                <InputTextController id='name' label='Tên'
                                    checkErr getFormErrorMessage={getFormErrorMessage}
                                    control={control} 
                                />
                                <CalendarController 
                                    id='dateOfBirth' label='Ngày sinh'
                                    checkErr getFormErrorMessage={getFormErrorMessage}
                                    showIcon control={control} monthNavigator 
                                    yearNavigator yearRange="1940:2004"
                                />
                                <InputTextController id='address' label='Địa chỉ'
                                    checkErr getFormErrorMessage={getFormErrorMessage}
                                    control={control} 
                                />
                                
                            </div>
                            <div className="p-col-12 p-md-6">
                                <InputTextController id='phone' label='Số điện thoại'
                                    checkErr getFormErrorMessage={getFormErrorMessage}
                                    control={control} 
                                />
                                <DropdownController id='position' label='Vị trí' 
                                    checkErr getFormErrorMessage={getFormErrorMessage} 
                                    control={control} 
                                    options={position} 
                                    callback = {() => getLevel()}
                                />
                                <DropdownController id='level' label='Thứ bậc' 
                                    checkErr getFormErrorMessage={getFormErrorMessage} 
                                    control={control} 
                                    options={level} 
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </Dialog>
        </>
    )
}