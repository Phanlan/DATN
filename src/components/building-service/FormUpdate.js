
import React, { useEffect, useCallback} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputTextController } from '../common/InputTextController';
import { InputNumberController } from '../common/InputNumberController';
import ProtectedServiceService from './protected-service/ProtectedServiceService';
import ParkingServiceService from './parking-service/ParkingServiceService';
import MaintenanceServiceService from './maintenance-service/MaintenanceServiceService';
import FoodServiceService from './food-service/FoodServiceService';
import CleanedServiceService from './cleaned-service/CleanedServiceService';

export const FormUpdate = (props) => {
    const { display, toast, flagChange, setLoading, handleHide, setFlagChange, currentService, setCurrentService, service } = props;
    const msgError = 'Trường bắt buộc';

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name]?.message}</small>
    };

    const defaultValues = {
        name: '',
        price: null,
        slot: null,
        period: null,
        time: null,
        timesPerWeek:null
    };

    let schema = yup.object().shape({
        name: yup.string().required(msgError),
        price: yup.number().required(msgError),
    });
    if(service==='parking') {
        schema = yup.object().shape({
            name: yup.string().required(msgError),
            price: yup.number().required(msgError),
            slot: yup.number().required(msgError),
        });
    }
    if(service==='maintenance') {
        schema = yup.object().shape({
            name: yup.string().required(msgError),
            price: yup.number().required(msgError),
            period: yup.number().required(msgError),
        });
    }
    if(service==='food') {
        schema = yup.object().shape({
            name: yup.string().required(msgError),
            price: yup.number().required(msgError),
            time: yup.number().required(msgError),
        });
    }
    if(service==='clean') {
        schema = yup.object().shape({
            name: yup.string().required(msgError),
            price: yup.number().required(msgError),
            timesPerWeek: yup.number().required(msgError),
        });
    }
    const { control, formState: { errors, isSubmitting }, handleSubmit, reset, setValue} = useForm({ defaultValues, resolver: yupResolver(schema) });

    useEffect(() => {
        if(currentService) {
            console.log(currentService)
            // setValue('position', salaryToUpdate?.position);
            setValue('name', currentService?.name);
            setValue('price', currentService?.price);
            setValue('slot', currentService?.slot);
            setValue('period', currentService?.period);
            setValue('time',currentService?.time);
            setValue('timesPerWeek', currentService?.timesPerWeek)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentService]);
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
                ...data,
                any:'always'
            };
            if(service === 'protect') {
                ProtectedServiceService.createProtectedService(params).then((response) => {
                    setCurrentService(response.data.data);
                })
            }else if(service === 'parking') {
                ParkingServiceService.createParkingService(params).then((response) => {
                    setCurrentService(response.data.data);
                })
            }else if(service === 'maintenance') {
                MaintenanceServiceService.createMaintenanceService(params).then((response) => {
                    setCurrentService(response.data.data);
                })
            }else if(service === 'food') {
                FoodServiceService.createFoodService(params).then((response) => {
                    setCurrentService(response.data.data);
                })
            }else if(service === 'clean') {
                CleanedServiceService.createCleanedService(params).then((response) => {
                    setCurrentService(response.data.data);
                })
            }
            setFlagChange(!flagChange);
            handleHideDialog();
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Updated Service successfully', life: 5000 });
            
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
            <Dialog header='Thêm mới' visible={display} onHide={handleHideDialog}  
                style={{width: '35vw'}} position={'top'} modal
                footer={renderFooter}
            >
                <form>
                    <div className="p-fluid">
                        <InputTextController id='name' label='Tên'
                            checkErr getFormErrorMessage={getFormErrorMessage}
                            control={control} 
                            // disabled
                        />
                        <InputNumberController id='price' inputId="minmax-buttons" 
                            label='Giá' 
                            checkErr getFormErrorMessage={getFormErrorMessage}
                            control={control}  
                            min={0}
                        />
                        {service==='parking' &&
                        <InputNumberController id='slot' inputId="minmax-buttons" 
                            label='Số lượng' 
                            checkErr getFormErrorMessage={getFormErrorMessage}
                            control={control}  
                            min={0}
                        />}
                        {service==='maintenance' &&
                        <InputNumberController id='period' inputId="minmax-buttons" 
                            label='Chu kì' 
                            checkErr getFormErrorMessage={getFormErrorMessage}
                            control={control}  
                            min={0}
                        />}
                        {service==='food' &&
                        <InputNumberController id='time' inputId="minmax-buttons" 
                            label='Thời gian' 
                            checkErr getFormErrorMessage={getFormErrorMessage}
                            control={control}  
                            min={0}
                        />}
                        {service==='clean' &&
                        <InputNumberController id='timesPerWeek' inputId="minmax-buttons" 
                            label='Tần suất' 
                            checkErr getFormErrorMessage={getFormErrorMessage}
                            control={control}  
                            min={0}
                        />}
                    </div>
                </form>
            </Dialog>
        </>
    )
}