
import React, { useEffect, useCallback, useState} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputTextController } from '../../components/common/InputTextController';
import { DropdownController } from '../common/DropdownController';
import InfrastructureService from './InfrastructureService';
import { InputNumberController } from '../common/InputNumberController';

export const AddInfrastructure = (props) => {
    const { display, toast, flagChange, setLoading, handleHide, setFlagChange, infrastructureToUpdate, isUpdate } = props;
    const msgError = 'Trường bắt buộc';
    const [infrastructureType, setInfrastructureType] = useState();
    // const [infrastructureStatus, setInfrastructureStatus] = useState([]);

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name]?.message}</small>
    };

    const defaultValues = {
        name: '',
        // placeOfUse: '',
        type: '',
        // status: '',
        quantity: null,
    };

    const schema = yup.object().shape({
        name: yup.string().required(msgError),
        // placeOfUse: yup.string().required(msgError),
        // type: yup.string().required(msgError),
        type: yup.string().required(msgError),
        quantity: yup.number().required(msgError),

    });
    const { control, formState: { errors, isSubmitting }, handleSubmit, reset, setValue} = useForm({ defaultValues, resolver: yupResolver(schema) });

    useEffect(() => {
        if(infrastructureToUpdate) {
            setValue('name', infrastructureToUpdate?.name);
            setValue('type', infrastructureToUpdate?.type);
            setValue('quantity', infrastructureToUpdate?.quantity);
        }
        const getData = async() => {
           
            await InfrastructureService.getInfrastructureType().then((response) => {
                setInfrastructureType(response.data.data.map((item) => item.description))
            });
        }
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [infrastructureToUpdate]);
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
                ...data
            };
            console.log(params)
            if(isUpdate){
                await InfrastructureService.updateInfrastructure(infrastructureToUpdate?.id,params)
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Update Infrastructure successfully!!!', life: 5000 });
                handleHideDialog();
                setFlagChange(flagChange);
            } else {
                await InfrastructureService.createInfrastructure(params)
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Add Infrastructure successfully!!!', life: 5000 });
                handleHideDialog();
                setFlagChange(flagChange);
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
                                <InputTextController id='name' label='Tên'
                                    checkErr getFormErrorMessage={getFormErrorMessage}
                                    control={control} 
                                />
                                <DropdownController id='type' label='Phân loại' 
                                    checkErr getFormErrorMessage={getFormErrorMessage} 
                                    control={control} 
                                    options={infrastructureType} 
                                />
                                <InputNumberController id='quantity' label='Số lượng'
                                    checkErr getFormErrorMessage={getFormErrorMessage} 
                                    control={control} 
                                />

                                {/* <InputNumberController id='unitAmount' label='Đơn giá'
                                    checkErr getFormErrorMessage={getFormErrorMessage} 
                                    control={control} 
                                /> */}
                                
                            </div>
                        </div>
                    </div>
                </form>
            </Dialog>
        </>
    )
}