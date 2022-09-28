
import React, { useEffect, useCallback} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import moment from 'moment';
import { InputTextController } from '../../components/common/InputTextController';
import { CalendarController } from '../../components/common/CalendarController';
import CompanyEmployeeService from './CompanyEmployeeService';

export const CompanyEmployeeForm = (props) => {
    const { display, toast, flagChange, setLoading, handleHide, setFlagChange, companyEmployeeToUpdate, isUpdate, companyId } = props;
    const msgError = 'Trường bắt buộc';

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name]?.message}</small>
    };

    const defaultValues = {
        name: '',
        dateOfBirth: null,
        identification: '',
        phone: ''
    };

    const schema = yup.object().shape({
        name: yup.string().required(msgError),
        dateOfBirth: yup.date().required(msgError),
        identification: yup.string().required(msgError),
        phone: yup.string().required(msgError),
    });
    const { control, formState: { errors, isSubmitting }, handleSubmit, reset, setValue} = useForm({ defaultValues, resolver: yupResolver(schema) });

    useEffect(() => {
        console.log(companyEmployeeToUpdate)
        if(companyEmployeeToUpdate) {
            setValue('name', companyEmployeeToUpdate?.name);
            setValue('code', companyEmployeeToUpdate?.code);
            companyEmployeeToUpdate?.dateOfBirth && setValue('dateOfBirth', new Date(companyEmployeeToUpdate?.dateOfBirth));
            setValue('identification', companyEmployeeToUpdate?.identification);
            setValue('phone', companyEmployeeToUpdate?.phone);
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [companyEmployeeToUpdate]);
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
                company_id: companyId,
                dateOfBirth: moment(data?.dateOfBirth).format('YYYY-MM-DD')
            };
            if(isUpdate){
                await CompanyEmployeeService.updateCompanyEmployee(companyId,companyEmployeeToUpdate?.id,params)
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Update Company Employee successfully!!!', life: 5000 });
                handleHideDialog();
                setFlagChange(!flagChange);
            } else {
                await CompanyEmployeeService.createCompanyEmployee(companyId,params)
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Add Company Employee successfully!!!', life: 5000 });
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
                                <InputTextController id='name' label='Tên nhân viên'
                                    checkErr getFormErrorMessage={getFormErrorMessage}
                                    control={control} 
                                />
                                <CalendarController 
                                    id='dateOfBirth' label='Ngày sinh'
                                    checkErr getFormErrorMessage={getFormErrorMessage}
                                    showIcon control={control} monthNavigator 
                                    yearNavigator yearRange="1940:2004"
                                />
                            </div>
                            <div className="p-col-12 p-md-6">
                                <InputTextController id='identification' label='Mã CCCD'
                                    checkErr getFormErrorMessage={getFormErrorMessage}
                                    control={control} 
                                />
                                <InputTextController id='phone' label='Số diện thoại'
                                    checkErr getFormErrorMessage={getFormErrorMessage}
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