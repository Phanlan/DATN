
import React, { useCallback} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { DropdownController } from '../common/DropdownController';
import { useState } from 'react';
import { useEffect } from 'react';
import CompanyService from '../company-table/CompanyService';
import { InputTextController } from '../common/InputTextController';
import CompanyEmployeeService from '../company-table/CompanyEmployeeService';
import VehicleService from '../Vehicle/VehicleService';

export const NewVehicle = (props) => {
    const { display, toast, flagChange, setLoading, handleHide, setFlagChange,  vehicleToUpdate,isUpdate, companyId } = props;
    const msgError = 'Trường bắt buộc';
    const [company, setCompany] = useState();
    const [employee, setEmployee] = useState();
    const [vehicleType, setVehicleType] = useState();

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name]?.message}</small>
    };

    const defaultValues = {
        companyId: '',
        employeeId: '',
        vehicleTypeId: '',
        licensePlate: ''
    };

    const schema = yup.object().shape({
        companyId: yup.string().nullable().required(msgError),
        employeeId: yup.string().nullable().required(msgError),
        vehicleTypeId: yup.string().nullable().required(msgError),
        licensePlate: yup.string(),
    });
    const { control, formState: { errors, isSubmitting }, handleSubmit, reset, getValues, setValue} = useForm({ defaultValues, resolver: yupResolver(schema) });

    useEffect(() => {
        
console.log(companyId)
console.log(getValues('companyId'))

        setValue('companyId', parseInt(companyId));

        CompanyEmployeeService.getCompanyById(companyId).then((response) => {
            console.log(response)
            setEmployee(response?.data?.data?.companyEmployeeList.map((item) => ({
                value: item?.id,
                name: item?.name
            })))
        });
        if(vehicleToUpdate) {
            setValue('companyId', vehicleToUpdate?.companyId);
            setValue('employeeId', vehicleToUpdate?.companyEmployeeId);
            setValue('vehicleTypeId', vehicleToUpdate?.vehicleTypeId);
            setValue('licensePlate', vehicleToUpdate?.licensePlate);
            getEmployeeList()
        }
        const getData = async() => {
            await CompanyService.getAllCompany().then((response) => {
                setCompany(response.data.data.map((item) => ({
                    value: item.id,
                    name: item.name
                })))
            });

            await VehicleService.getAllVehicleType().then((response) => {
                setVehicleType(response.data.data.map((item) => ({
                    value: item.id,
                    name: item.description
                })))
            });
        }
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [vehicleToUpdate, companyId]);

    const getEmployeeList =useCallback(() => {
        CompanyEmployeeService.getCompanyById(companyId).then((response) => {
            console.log(response)
            setEmployee(response?.data?.data?.companyEmployeeList.map((item) => ({
                value: item?.id,
                name: item?.name
            })))
        });
    },[companyId])

    const renderFooter = () => {
        return (
          <>
            <Button label="Lưu" icon="pi pi-check" disabled={isSubmitting}
              onClick={handleSubmit(onSubmit)}/>
          </>
        );
    }
    const onSubmit = useCallback(async (data) => {
        try {
            setLoading(true);
            const params = {
                companyId: parseInt(data?.companyId),
                companyEmployeeId: parseInt(data?.employeeId),
                vehicleTypeId: parseInt(data?.vehicleTypeId),
                licensePlate: data?.licensePlate
            };
            if(isUpdate){
                await VehicleService.updateVehicle(vehicleToUpdate?.id,params)
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Update Company successfully!!!', life: 5000 });
                handleHideDialog();
                setFlagChange(!flagChange);
            } else {
                await VehicleService.createVehicle(params)
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Add successfully!!!', life: 5000 });
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
                style={{width: '35vw'}} position={'top'} modal
                footer={renderFooter}
            >
                <form>
                    <div className="p-fluid">
                        <div className="p-grid">
                            <div className="p-col-12">
                                
                                <DropdownController id='companyId' label='Công ty' 
                                    checkErr getFormErrorMessage={getFormErrorMessage} 
                                    control={control} 
                                    options={company}
                                    optionLabel = 'name'
                                    optionValue = 'value' 
                                    // callback = {() => getEmployeeList()}
                                    disabled
                                />
                                <DropdownController id='employeeId' label='Nhân viên' 
                                    checkErr getFormErrorMessage={getFormErrorMessage} 
                                    control={control} 
                                    options={employee}
                                    optionLabel = 'name'
                                    optionValue = 'value' 
                                />
                                <DropdownController id='vehicleTypeId' label='Loại xe' 
                                    checkErr getFormErrorMessage={getFormErrorMessage} 
                                    control={control} 
                                    options={vehicleType}
                                    optionLabel = 'name'
                                    optionValue = 'value' 
                                />
                                <InputTextController id='licensePlate' label='Biển số'
                                    control={control} 
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </Dialog>
        </>
    )
}