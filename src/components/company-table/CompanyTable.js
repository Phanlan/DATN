import { Column } from 'primereact/column';
import { DataTable } from '../utils';
import { Toolbar } from 'primereact/toolbar';
import React, { useContext, useEffect, useState } from 'react';
import CompanyService  from './CompanyService';
import { NumberFormat } from '../../components/utils/NumberFormat';
import './CompanyTable.css';
import { Button } from 'primereact/button';
import { AddCompany } from './AddCompany';
import { ToastContext } from '../../App';
import { Loading } from '../../components/common/Loading';
import { confirmDialog } from 'primereact/confirmdialog';

export const  CompanyTable=() =>  {
    const [companies, setCompanies] = useState([]);
    const [displayCompanyNew, setDisplayCompanyNew] = useState(false);
    const toast = useContext(ToastContext);
    const [flagChange, setFlagChange] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingPage, setLoadingPage] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [companyToUpdate, setCompanyToUpdate] = useState(null);
    
    useEffect(() => {
        try{
            setLoading(true);
            CompanyService.getAllCompany().then((response) => {
                setCompanies(response.data.data)
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
        return(
            <NumberFormat value={Number(data[props.field])} />
        )
    }

    const leftContents = (
        <>
            <h5 className='p-m-0'>Danh sách công ty</h5>
        </>
    );

    const rightContents = (
        <>
            <Button
            label='Thêm mới'
            icon="pi pi-plus"
            className="p-button-outlined p-mr-2"
            onClick={() => {setDisplayCompanyNew(true);
                setIsUpdate(false);
                setCompanyToUpdate(null)}}
            />
        </>
    );

    const handleHideCompanyNewDialog = () => {
        setDisplayCompanyNew(false);
    }
    const editCompany = (company) => {
        setCompanyToUpdate({ ...company });
        setDisplayCompanyNew(true);
        setIsUpdate(true)
    }

    const confirmDeleteCompany = (rowData) => {
        confirmDialog({
          message: <p>Bạn có muốn xóa bản ghi này không?</p>,
          header: <h6>Xác nhận xóa bản ghi</h6>,
          icon: 'pi pi-info-circle',
          acceptClassName: 'p-button-danger',
          accept: () => {deleteCompany(rowData)},
        });
    };

    const deleteCompany = async(params) => {
        try {
            setLoading(true);
                await CompanyService.deleteCompany(parseInt(params?.id))
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
                    onClick={() => editCompany(rowData)} 
                />
                <Button icon="pi pi-trash" 
                    className="p-button-rounded p-button-warning" 
                    onClick={() => confirmDeleteCompany(rowData)} 
                />
            </div>
          
      );
    }

    const linkTemplate = (data, props) => {
        return (
          <>
            <a
                href={`#/company-detail/${data["id"]}`}
                style={{ color: "#2196f3" }}
            >
                {data[props.field]}
            </a>
          </>
        );
    };
    
        return (
            <div>
                {displayCompanyNew && 
                    <AddCompany 
                        display={displayCompanyNew} 
                        setDisplay={setDisplayCompanyNew} 
                        handleHide={handleHideCompanyNewDialog}
                        toast={toast}
                        flagChange={flagChange}
                        setFlagChange={setFlagChange}
                        setLoading={setLoadingPage}
                        loading={loadingPage}
                        setCompanies={setCompanies}
                        isUpdate={isUpdate}
                        companyToUpdate={companyToUpdate}
                    />
                }
                <div className="card">
                    <Toolbar left={leftContents} right={rightContents} />
                    <DataTable value={companies} loading={loading} rows={10} scrollable >
                        <Column field="name" header="Tên" filter filterMatchMode="contains" style={{width: '160px'}} body={linkTemplate}></Column>
                        <Column field="taxCode" header="Mã số thuế" filter filterMatchMode="contains" style={{width: '160px'}}></Column>
                        <Column field="authorizedCapital" header="Vốn điều lệ" sortable body={numberBody} style={{width: '170px'}}></Column>
                        <Column field="fieldOfActivity" header="Lĩnh vực" filter filterMatchMode="contains" style={{width: '160px'}}></Column>
                        <Column field="numberOfEmployee" header="SL nhân viên" sortable body={numberBody} style={{width: '160px'}}></Column>
                        <Column field="floor" header="Địa chỉ" filter filterMatchMode="contains"  style={{width: '160px'}}></Column>
                        <Column field="hotline" header="Số điện thoại" style={{width: '160px'}} filter filterMatchMode="contains"></Column>
                        <Column field="area" header="Diện tích" body={numberBody}  sortable style={{width: '160px'}}></Column>
                        <Column  body={actionBodyTemplate} style={{ width: '120px' }} />
                    </DataTable>
                </div>
                <Loading visible={loadingPage} onHide={() => setLoadingPage(false)} />
            </div>
        );
    }

