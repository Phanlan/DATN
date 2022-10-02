
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import React, { useContext, useEffect, useState } from 'react';
import { ToastContext } from '../../App';
import { Loading } from '../common/Loading';
import { DataTable } from '../utils';
import { NumberFormat } from '../utils/NumberFormat';
import InvoiceService from './InvoiceService';
import { NewInvoice } from './NewInvoice';

export const Invoice =() => {
    const toast = useContext(ToastContext);
    const [listInvoice, setListInvoice] = useState();
    const [flagChange, setFlagChange] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingPage, setLoadingPage] = useState(false);
    const [displayInvoiceNew, setDisplayInvoiceNew] = useState(false);

    useEffect(() => {
        init();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[flagChange]);

    const leftContents = (
        <>
            <h5 className='p-m-0'>Danh sách hóa đơn</h5>
        </>
    );

    const rightContents = (
        <>
            <Button
                label='Thêm mới'
                icon="pi pi-plus"
                className="p-button-outlined p-mr-2"
                onClick={() => {setDisplayInvoiceNew(true);}}
            />
        </>
    );

    const linkTemplate = (data, props) => {
        return (
          <>
            <a
                href={`#/company-detail/${data?.companyId}`}
                style={{ color: "#2196f3" }}
            >
                {data?.companyName}
            </a>
          </>
        );
    };
    const init =() => {
        try{
            setLoading(true);
            InvoiceService.getAllInvoice().then((response) => {
                setListInvoice(response.data.data)
            })
        }catch(error) {
            console.log(error)
            toast.current.show({
                severity: "error",
                summary: 'error',
                detail: error?.response?.data?.errors,
                life: 5000,
            });
        }finally{
            setLoading(false)
        }

    }

    const numberBody = (data, props) => {
        return(
            <NumberFormat value={Number(data[props.field])} />
        )
    }

    const areaBodyTemplate = (data) => (
        <NumberFormat value={data?.companyResponse?.area} />
    )

    const employeeTemplate = (data) => (
        <NumberFormat value={data?.companyResponse?.numberOfEmployee} />
    )

    const handleHideInvoiceNewDialog = () => {
        setDisplayInvoiceNew(false);
    }

    

    return (
        <div>
            {displayInvoiceNew && 
                <NewInvoice 
                    display={displayInvoiceNew} 
                    setDisplay={setDisplayInvoiceNew} 
                    handleHide={handleHideInvoiceNewDialog}
                    toast={toast}
                    flagChange={flagChange}
                    setFlagChange={setFlagChange}
                    setLoading={setLoadingPage}
                    loading={loadingPage}
                    listInvoice={listInvoice}
                />
            }
            <div className="card">
                <Toolbar left={leftContents} right={rightContents} />
                <DataTable value={listInvoice} rows={10} scrollable loading={loading} >
                    <Column field='id' header='Mã hóa đơn' style={{width: '130px'}} />
                    <Column field="companyName" header="Tên công ty" filter filterMatchMode="contains" style={{width: '160px'}} body={linkTemplate}/>
                    <Column field='invoiceDate' header='Ngày lập hóa đơn' sortable style={{width: '170px'}} />
                    <Column field="area" header="Diện tích" sortable style={{width: '130px'}} body={areaBodyTemplate} />
                    <Column field="numberOfEmployee" header="SL nhân viên" sortable style={{width: '140px'}} body={employeeTemplate} />
                    <Column field="rentalPrice" header="Tiền thuê phòng" sortable style={{width: '160px'}} body={numberBody}/>
                    <Column field="servicePrice" header="Tiền dịch vụ" sortable body={numberBody} style={{width: '130px'}} />
                    <Column field="waterPrice" header="Tiền nước" sortable  style={{width: '130px'}} body={numberBody}/>
                    <Column field="electricPrice" header="Tiền điện" style={{width: '130px'}} sortable body={numberBody}/>
                    <Column field="total" header="Tổng" body={numberBody}  sortable style={{width: '130px'}} />
                    
                </DataTable>
                <Loading visible={loadingPage} onHide={() => setLoadingPage(false)} />
            </div>
        </div>
    );
}
