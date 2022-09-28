import React, { useEffect, useState, useContext } from 'react';
import { DataTable } from '../utils';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { ToastContext } from '../../App';
import { Loading } from '../../components/common/Loading';
import { confirmDialog } from 'primereact/confirmdialog';
import SalaryService from './SalaryService';
import { NumberFormat } from '../utils/NumberFormat';
import { Toolbar } from 'primereact/toolbar';
import { SalaryForm } from './SalaryForm';

export const Salary =() => {
    const [salaries, setSalaries] = useState([]);
    const [displaySalaryNew, setDisplaySalaryNew] = useState(false);
    const toast = useContext(ToastContext);
    const [flagChange, setFlagChange] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingPage, setLoadingPage] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [salaryToUpdate, setSalaryToUpdate] = useState(null);

    useEffect(() => {
        try{
            setLoading(true);
            SalaryService.getAllSalary().then((response) => {
                setSalaries(response.data.data)
            })
        }catch(error) {
            toast.current.show({
                severity: "error",
                summary: 'error',
                detail: error?.response?.data?.errors,
                life: 5000,
            });
        }finally{
            setLoading(false)
        }
        
    }, [flagChange]) // eslint-disable-line react-hooks/exhaustive-deps

    const numberBody = (data, props) => {
        const value = data?.salary
        return(
            <NumberFormat value={Number(value)} />
        )
    }

    const leftContents = (
        <>
            <h5 className='p-m-0'>Danh sách lương</h5>
        </>
    );

    const rightContents = (
        <>
            <Button
            label='Thêm mới'
            icon="pi pi-plus"
            className="p-button-outlined p-mr-2"
            onClick={() => {setDisplaySalaryNew(true);
                setIsUpdate(false);
                setSalaryToUpdate(null)}}
            />
        </>
    );

    const handleHideSalaryNewDialog = () => {
        setDisplaySalaryNew(false);
    }
    const editSalary = (salary) => {
        setSalaryToUpdate({ ...salary });
        setDisplaySalaryNew(true);
        setIsUpdate(true)
    }

    const confirmDeleteSalary = (rowData) => {
        confirmDialog({
          message: <p>Bạn có muốn xóa bản ghi này không?</p>,
          header: <h6>Xác nhận xóa bản ghi</h6>,
          icon: 'pi pi-info-circle',
          acceptClassName: 'p-button-danger',
          accept: () => {deleteSalary(rowData)},
        });
    };

    const deleteSalary = async(params) => {
        try {
            setLoading(true);
                await SalaryService.deleteSalary(parseInt(params?.id)).then(() => {
                    SalaryService.getAllSalary().then((response) => {
                        setSalaries(response.data.data)
                    })
                });
                setFlagChange(!flagChange);
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Delete Success', life: 5000 });
        } catch(error) {
            toast.current.show({
                severity: "error",
                summary: 'error',
                detail: error?.response?.data?.errors,
                life: 5000,
            });
        } finally {
            setLoading(false);
        } 
    }   

    const actionBodyTemplate = (rowData) => {
        return (
            <div className="actions" >
                <Button icon="pi pi-pencil" 
                    className="p-button-rounded p-button-success p-mr-2" 
                    onClick={() => editSalary(rowData)} 
                />
                <Button icon="pi pi-trash" 
                    className="p-button-rounded p-button-warning" 
                    onClick={() => confirmDeleteSalary(rowData)} 
                />
            </div>
          
      );
    }
    
    return(
        <>
            {displaySalaryNew && 
                <SalaryForm 
                    display={displaySalaryNew} 
                    setDisplay={setDisplaySalaryNew} 
                    handleHide={handleHideSalaryNewDialog}
                    toast={toast}
                    flagChange={flagChange}
                    setFlagChange={setFlagChange}
                    setLoading={setLoadingPage}
                    loading={loadingPage}
                    setSalarys={setSalaries}
                    isUpdate={isUpdate}
                    salaryToUpdate={salaryToUpdate}
                />
            }
            <div className="card">
                <Toolbar left={leftContents} right={rightContents} loading={loading} />
                <DataTable responsiveLayout="scroll" value={salaries}>
                    <Column field="position" header="Vị trí" filter filterMatchMode='contains' ></Column>
                    <Column field="level" header="Thứ bậc" filter filterMatchMode='contains'></Column>
                    <Column field="salary" header="Lương" body={numberBody} sortable ></Column>
                    <Column body={actionBodyTemplate} ></Column>
                </DataTable>
            </div>
            <Loading visible={loadingPage} onHide={() => setLoadingPage(false)} />
        </>
    )
}