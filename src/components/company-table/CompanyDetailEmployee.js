import { Button } from "primereact/button";
import { Column } from "primereact/column"
import { confirmDialog } from "primereact/confirmdialog";
import { Toolbar } from "primereact/toolbar"
import { useState } from "react";
import { DataTable } from "../utils"
import { CompanyEmployeeForm } from "./CompanyEmployeeForm";
import CompanyEmployeeService from "./CompanyEmployeeService";

export const CompanyDetailEmployee = (props) => {
    const {id, employeeList, toast, flagChange, setFlagChange, loadingPage, setLoadingPage} = props;
    const [isUpdate, setIsUpdate] = useState(false);
    const [companyEmployeeToUpdate,setCompanyEmployeeToUpdate] = useState();
    const [displayCompanyEmployeeNew, setDisplayCompanyEmployeeNew] = useState();
    const [loading, setLoading] = useState(false);

    const leftEmployeeContents = (
        <>
            <h5 className='p-m-0'>Danh sách nhân viên công ty</h5>
        </>
    );

    const rightEmployeeContents = (
        <>
            <Button
            label='Thêm mới'
            icon="pi pi-plus"
            className="p-button-outlined p-mr-2"
            onClick={() => {setDisplayCompanyEmployeeNew(true);
                setIsUpdate(false);
                setCompanyEmployeeToUpdate(null)}}
            />
        </>
    );

    const actionBodyTemplate = (rowData) => {
        return (
            <div className="actions" >
                <Button icon="pi pi-pencil" 
                    className="p-button-rounded p-button-success p-mr-2" 
                    onClick={() => editCompanyEmployee(rowData)} 
                />
                <Button icon="pi pi-trash" 
                    className="p-button-rounded p-button-warning" 
                    onClick={() => confirmDeleteCompanyEmployee(rowData)} 
                />
            </div>
          
      );
    }

    const editCompanyEmployee = (companyEmployee) => {
        setCompanyEmployeeToUpdate({ ...companyEmployee });
        setDisplayCompanyEmployeeNew(true);
        setIsUpdate(true)
    }

    const confirmDeleteCompanyEmployee = (rowData) => {
        confirmDialog({
          message: <p>Bạn có muốn xóa bản ghi này không?</p>,
          header: <h6>Xác nhận xóa bản ghi</h6>,
          icon: 'pi pi-info-circle',
          acceptClassName: 'p-button-danger',
          accept: () => {deleteCompanyEmployee(rowData)},
        });
    };

    const deleteCompanyEmployee = async(params) => {
        try {
            setLoading(true);
                await CompanyEmployeeService.deleteCompanyEmployee(id,parseInt(params?.id))
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
    const handleHideCompanyEmployeeNewDialog = () => {
        setDisplayCompanyEmployeeNew(false);
    }
    return(
        <>
            {displayCompanyEmployeeNew && 
                <CompanyEmployeeForm 
                    display={displayCompanyEmployeeNew} 
                    setDisplay={setDisplayCompanyEmployeeNew} 
                    handleHide={handleHideCompanyEmployeeNewDialog}
                    toast={toast}
                    flagChange={flagChange}
                    setFlagChange={setFlagChange}
                    setLoading={setLoadingPage}
                    loading={loadingPage}
                    isUpdate={isUpdate}
                    companyEmployeeToUpdate={companyEmployeeToUpdate}
                    companyId={id}
                />
            }
            <div className="card">
                <Toolbar left={leftEmployeeContents} right={rightEmployeeContents}  />
                <DataTable value={employeeList} loading={loading} key='id' scrollable rows={5} >
                    <Column field="code" header="Mã nhân viên" filter filterMatchMode="contains" />
                    <Column field="name" header="Tên nhân viên" filter filterMatchMode="contains"/>
                    <Column field="dateOfBirth" header="Ngày sinh" sortable/>
                    <Column field="identification" header="Mã CCCD" filter filterMatchMode="contains" />
                    <Column field="phone" header="Số điện thoại" filter filterMatchMode="contains" />
                    <Column field="" body={actionBodyTemplate} />
                </DataTable>
            </div>
        </>
    )
}