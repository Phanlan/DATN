import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Toolbar } from 'primereact/toolbar';
import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { ToastContext } from '../../App';
import { Loading } from '../../components/common/Loading';
import { confirmDialog } from 'primereact/confirmdialog';
import InfrastructureService from './InfrastructureService';
import { AddInfrastructure } from './AddInfrastructure';
import { NumberFormat } from '../utils/NumberFormat';

export const  Infrastructure=() =>  {
    const [infrastructures, setInfrastructures] = useState([]);
    const [displayInfrastructureNew, setDisplayInfrastructureNew] = useState(false);
    const toast = useContext(ToastContext);
    const [flagChange, setFlagChange] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingPage, setLoadingPage] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [infrastructureToUpdate, setInfrastructureToUpdate] = useState(null);
    
    useEffect(() => {
        try{
            setLoading(true);
            InfrastructureService.getAllInfrastructure().then((response) => {
                setInfrastructures(response.data.data)
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


    const leftContents = (
        <>
            <h5 className='p-m-0'>Danh sách trang thiết bị</h5>
        </>
    );

    const rightContents = (
        <>
            <Button
            label='Thêm mới'
            icon="pi pi-plus"
            className="p-button-outlined p-mr-2"
            onClick={() => {setDisplayInfrastructureNew(true);
                setIsUpdate(false);
                setInfrastructureToUpdate(null)}}
            />
        </>
    );

    const handleHideInfrastructureNewDialog = () => {
        setDisplayInfrastructureNew(false);
    }

    const editInfrastructure = (Infrastructure) => {
        setInfrastructureToUpdate({ ...Infrastructure });
        setDisplayInfrastructureNew(true);
        setIsUpdate(true)
    }

    const confirmDeleteInfrastructure = (rowData) => {
        confirmDialog({
          message: <p>Bạn có muốn xóa bản ghi này không?</p>,
          header: <h6>Xác nhận xóa bản ghi</h6>,
          icon: 'pi pi-info-circle',
          acceptClassName: 'p-button-danger',
          accept: () => {deleteInfrastructure(rowData)},
        });
    };

    const deleteInfrastructure = async(params) => {
        try {
            setLoading(true);
                await InfrastructureService.deleteInfrastructure(parseInt(params?.id));
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
                    onClick={() => editInfrastructure(rowData)} 
                />
                <Button icon="pi pi-trash" 
                    className="p-button-rounded p-button-warning" 
                    onClick={() => confirmDeleteInfrastructure(rowData)} 
                />
            </div>
          
      );
    }

    const numberTemplate= (data,props) => (
        <>
            <NumberFormat value={data[props.field]} />
        </>
    )

    const linkTemplate = (data, props) => {
        return (
          <>
            <a
                href={`#/infrastructure-detail/${data["id"]}`}
                style={{ color: "#2196f3" }}
            >
                {data[props.field]}
            </a>
          </>
        );
    };

    return (
        <div>
            {displayInfrastructureNew && 
                <AddInfrastructure 
                    display={displayInfrastructureNew} 
                    setDisplay={setDisplayInfrastructureNew} 
                    handleHide={handleHideInfrastructureNewDialog}
                    toast={toast}
                    flagChange={flagChange}
                    setFlagChange={setFlagChange}
                    setLoading={setLoadingPage}
                    loading={loadingPage}
                    isUpdate={isUpdate}
                    infrastructureToUpdate={infrastructureToUpdate}
                />
            }
            <div className="card">
                <Toolbar left={leftContents} right={rightContents} />
                <DataTable value={infrastructures} loading={loading} scrollable >
                    <Column field="name" header="Tên" filter filterMatchMode="contains" body={linkTemplate} ></Column>
                    <Column field="type" header="Phân loại" filter filterMatchMode="contains" ></Column>
                    <Column field="quantity" header="Số lượng" sortable body={numberTemplate} ></Column>
                    {/* <Column field="unitAmount" header="Đơn giá" sortable body={numberTemplate}  ></Column> */}
                    <Column  body={actionBodyTemplate} style={{ width: '120px' }} />
                </DataTable>
            </div>
            <Loading visible={loadingPage} onHide={() => setLoadingPage(false)} />
        </div>
    );
}

