
import React, { useEffect, useCallback, useState} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { DropdownController } from '../common/DropdownController';
import { InputNumberController } from '../common/InputNumberController';
import InfrastructureService from '../infrastructure/InfrastructureService';
import CompanyService from '../company-table/CompanyService';

export const AddCompanyUsed = (props) => {
    const { display, toast, flagChange, setLoading, handleHide, setFlagChange, companyUsedToUpdate,companyList, isUpdate, infrastructureId, totalQuantity } = props;
    const msgError = 'Trường bắt buộc';
    const [company, setCompany] = useState();
    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name]?.message}</small>
    };

    const defaultValues = {
        company: '',
        quantity: null,
    };

    const schema = yup.object().shape({
        company: yup.string().required(msgError),
        quantity: yup.number().nullable().required(msgError),
    });
    const { control, formState: { errors, isSubmitting }, handleSubmit, reset, setValue, getValues} = useForm({ defaultValues, resolver: yupResolver(schema) });

    useEffect(() => {
        console.log(companyUsedToUpdate)
        if(companyUsedToUpdate) {
            setValue('company', companyUsedToUpdate?.id);
            setValue('quantity', companyUsedToUpdate?.quantityInfrastructure);
        }

        const getData = async() => {
            await CompanyService.getAllCompany().then((response) => {
                setCompany(response.data.data.map((item) => ({
                    value: item.id,
                    name: item.name,
                    total: item.quantity
                })))
            });
        }
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [companyUsedToUpdate]);
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
                company_id: getValues('company'),
                infrastructure_id: infrastructureId,
                quantity: data.quantity
            };
            if(isUpdate){
                const _total = companyList?.reduce((total, item) => {
                    return total = total+item?.quantityInfrastructure
                }, 0)
                const total = _total + data.quantity;
                if(total > totalQuantity || data.quantity> totalQuantity) {
                    toast.current.show({ severity: 'error', summary: 'Error', detail: 'Số lượng không thể lớn hơn số lượng thiết bị hiện có', life: 5000 });
                    handleHideDialog();
                    setFlagChange(!flagChange);
                    return;
                }
                await InfrastructureService.updateCompanyUsed(params)
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Update successfully!!!', life: 5000 });
                handleHideDialog();
                setFlagChange(!flagChange);
            } else {
                const check = companyList?.find(item => item.id===getValues('company'));
                if(check) {
                    toast.current.show({ severity: 'error', summary: 'Error', detail: 'Công ty đã tồn tại', life: 5000 });
                    handleHideDialog();
                    setFlagChange(!flagChange);
                    return;
                }

                const _total = companyList?.reduce((total, item) => {
                    return total = total+item?.quantityInfrastructure
                }, 0)
                const total = _total + data.quantity;
                if(total > totalQuantity || data.quantity> totalQuantity) {
                    toast.current.show({ severity: 'error', summary: 'Error', detail: 'Số lượng không thể lớn hơn số lượng thiết bị hiện có', life: 5000 });
                    handleHideDialog();
                    setFlagChange(!flagChange);
                    return;
                }
                await InfrastructureService.createCompanyUsed(params)
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Add successfully!!!', life: 5000 });
                handleHideDialog();
                setFlagChange(!flagChange);
            }
          
          
        } catch (error) {
            console.log(error)
          toast.current.show({ severity: 'error', summary: 'Error', detail: error?.response?.data?.errors, life: 5000 });
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
                style={{width: '40vw'}} position={'top'} modal
                footer={renderFooter}
            >
                <form>
                    <div className="p-fluid">
                        <div className="p-grid">
                            <div className="p-col-12">
                                <DropdownController id='company' label='Công ty' 
                                    checkErr getFormErrorMessage={getFormErrorMessage} 
                                    control={control} 
                                    options={company}
                                    optionLabel = 'name'
                                    optionValue = 'value' 
                                />
                                <InputNumberController id='quantity' inputId="minmax-buttons" 
                                    label='SL công ty sử dụng' 
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