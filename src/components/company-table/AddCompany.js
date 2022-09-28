
import React, { useEffect, useCallback} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputTextController } from '../../components/common/InputTextController';
import { InputNumberController } from '../../components/common/InputNumberController';
import CompanyService from './CompanyService';

export const AddCompany = (props) => {
    const { display, toast, flagChange, setLoading, handleHide, setFlagChange, companyToUpdate, isUpdate } = props;
    const msgError = 'Trường bắt buộc';

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name]?.message}</small>
    };

    const defaultValues = {
        name: '',
        taxCode: '',
        authorizedCapital: null,
        fieldOfActivity: '',
        floor: '',
        hotline: '',
        area: null
    };

    const schema = yup.object().shape({
        name: yup.string().required(msgError),
        taxCode: yup.string().required(msgError),
        authorizedCapital: yup.number().required(msgError),
        fieldOfActivity: yup.string().required(msgError),
        floor: yup.string().required(msgError),
        hotline: yup.string().required(msgError),
        area: yup.number().nullable().required(msgError),
    });
    const { control, formState: { errors, isSubmitting }, handleSubmit, reset, setValue} = useForm({ defaultValues, resolver: yupResolver(schema) });

    useEffect(() => {
        if(companyToUpdate) {
            setValue('name', companyToUpdate?.name);
            setValue('taxCode', companyToUpdate?.taxCode);
            setValue('authorizedCapital', companyToUpdate?.authorizedCapital);
            setValue('fieldOfActivity', companyToUpdate?.fieldOfActivity);
            setValue('floor', companyToUpdate?.floor);
            setValue('hotline', companyToUpdate?.hotline);
            setValue('area', companyToUpdate?.area);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [companyToUpdate]);
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
                ...data
            };
            if(isUpdate){
                await CompanyService.updateCompany(companyToUpdate?.id,params)
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Update Company successfully!!!', life: 5000 });
                handleHideDialog();
                setFlagChange(flagChange);
            } else {
                await CompanyService.createCompany(params)
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Add Company successfully!!!', life: 5000 });
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
                                <InputTextController id='taxCode' label='Mã số thuế'
                                    checkErr getFormErrorMessage={getFormErrorMessage}
                                    control={control} 
                                />
                                <InputNumberController id='authorizedCapital' inputId="minmax-buttons" 
                                    label='Vốn điều lệ' 
                                    checkErr getFormErrorMessage={getFormErrorMessage}
                                    control={control}  
                                    min={0}
                                />
                                <InputTextController id='fieldOfActivity' label='Lĩnh vực hoạt động'
                                    checkErr getFormErrorMessage={getFormErrorMessage}
                                    control={control} 
                                />
                                
                            </div>
                            <div className="p-col-12 p-md-6">
                                <InputTextController id='floor' label='Địa chỉ'
                                    checkErr getFormErrorMessage={getFormErrorMessage}
                                    control={control} 
                                />
                                <InputTextController id='hotline' label='Số diện thoại'
                                    checkErr getFormErrorMessage={getFormErrorMessage}
                                    control={control} 
                                />
                                <InputNumberController id='area' inputId="minmax-buttons" 
                                    label='Diện tích' 
                                    checkErr getFormErrorMessage={getFormErrorMessage}
                                    control={control}  
                                    min={0}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </Dialog>
        </>
    )
}