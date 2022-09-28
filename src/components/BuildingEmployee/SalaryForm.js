
import React, { useEffect, useCallback} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputTextController } from '../../components/common/InputTextController';
import { InputNumberController } from '../../components/common/InputNumberController';
import SalaryService from './SalaryService';

export const SalaryForm = (props) => {
    const { display, toast, flagChange, setLoading, handleHide, setFlagChange, salaryToUpdate, isUpdate } = props;
    const msgError = 'Trường bắt buộc';

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name]?.message}</small>
    };

    const defaultValues = {
        position: '',
        level: '',
        salary: null,
    };

    const schema = yup.object().shape({
        position: yup.string().required(msgError),
        level: yup.string().required(msgError),
        salary: yup.number().required(msgError),
    });
    const { control, formState: { errors, isSubmitting }, handleSubmit, reset, setValue} = useForm({ defaultValues, resolver: yupResolver(schema) });

    useEffect(() => {
        if(salaryToUpdate) {
            setValue('position', salaryToUpdate?.position);
            setValue('level', salaryToUpdate?.level);
            setValue('salary', salaryToUpdate?.salary);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [salaryToUpdate]);
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
            if(isUpdate){
                await SalaryService.updateSalary(salaryToUpdate?.id,params)
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Update salary successfully!!!', life: 5000 });
                handleHideDialog();
                setFlagChange(!flagChange)
            } else {
                await SalaryService.createSalary(params);
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Add salary successfully!!!', life: 5000 });
                handleHideDialog();
                setFlagChange(!flagChange)
            }
          
          
        } catch (error) {
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
                style={{width: '35vw'}} position={'top'} modal
                footer={renderFooter}
            >
                <form>
                    <div className="p-fluid">
                        <InputTextController id='position' label='Vị trí'
                            checkErr getFormErrorMessage={getFormErrorMessage}
                            control={control} 
                        />
                        <InputTextController id='level' label='Thứ bậc'
                            checkErr getFormErrorMessage={getFormErrorMessage}
                            control={control} 
                        />
                        <InputNumberController id='salary' inputId="minmax-buttons" 
                            label='Lương' 
                            checkErr getFormErrorMessage={getFormErrorMessage}
                            control={control}  
                            min={0}
                        />
                    </div>
                </form>
            </Dialog>
        </>
    )
}