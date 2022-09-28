
import React, { useEffect, useCallback, useState} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { DropdownController } from '../common/DropdownController';
import { InputNumberController } from '../common/InputNumberController';
import InfrastructureService from '../infrastructure/InfrastructureService';
import CompanyService from './CompanyService';

export const UsedInfrastructureForm = (props) => {
    const { display, toast, flagChange, setLoading, handleHide, setFlagChange, usedInfrastructureToUpdate,infrastructureList, isUpdate, companyId } = props;
    const msgError = 'Trường bắt buộc';
    const [infrastructure, setInfrastructure] = useState();
    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name]?.message}</small>
    };

    const defaultValues = {
        infrastructure: '',
        quantity: null,
    };

    const schema = yup.object().shape({
        infrastructure: yup.string().required(msgError),
        quantity: yup.number().nullable().required(msgError),
    });
    const { control, formState: { errors, isSubmitting }, handleSubmit, reset, setValue, getValues} = useForm({ defaultValues, resolver: yupResolver(schema) });

    useEffect(() => {
        console.log(usedInfrastructureToUpdate)
        if(usedInfrastructureToUpdate) {
            setValue('infrastructure', usedInfrastructureToUpdate?.id);
            setValue('quantity', usedInfrastructureToUpdate?.quantityCompanyUse);
        }

        const getData = async() => {
            await InfrastructureService.getAllInfrastructure().then((response) => {
                setInfrastructure(response.data.data.map((item) => ({
                    value: item.id,
                    name: item.name,
                    total: item.quantity
                })))
            });
        }
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [usedInfrastructureToUpdate]);
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
                company_id: companyId,
                infrastructure_id: getValues('infrastructure'),
                quantity: data.quantity
            };
            if(isUpdate){
                await CompanyService.updateUsedInfrastructure(companyId,usedInfrastructureToUpdate.id,params)
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Update successfully!!!', life: 5000 });
                handleHideDialog();
                setFlagChange(!flagChange);
            } else {
                
                const check = infrastructureList?.find(item => item.id===getValues('infrastructure'));
                if(check) {
                    toast.current.show({ severity: 'error', summary: 'Error', detail: 'Thiết bị đã tồn tại', life: 5000 });
                    return;
                }
                await CompanyService.createUsedInfrastructure(params)
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
            <Dialog header='Thêm mới' visible={display} onHide={handleHideDialog}  
                style={{width: '40vw'}} position={'top'} modal
                footer={renderFooter}
            >
                <form>
                    <div className="p-fluid">
                        <div className="p-grid">
                            <div className="p-col-12">
                                <DropdownController id='infrastructure' label='Thiết bị' 
                                    checkErr getFormErrorMessage={getFormErrorMessage} 
                                    control={control} 
                                    options={infrastructure}
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