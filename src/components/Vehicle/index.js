
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import React, { useContext, useEffect, useState } from 'react';
import { ToastContext } from '../../App';
import { Loading } from '../common/Loading';
import { DataTable } from '../utils';
import { NewVehicle } from './NewVehicle';
import VehicleService from './VehicleService';

export const Vehicle =() => {
    const toast = useContext(ToastContext);
    const [vehicleList, setVehicleList] = useState();
    const [flagChange, setFlagChange] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingPage, setLoadingPage] = useState(false);
    const [displayVehicleNew, setDisplayVehicleNew] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [vehicleToUpdate, setVehicleToUpdate] = useState(null);

    useEffect(() => {
        init();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[flagChange]);

    const leftContents = (
        <>
            <h5 className='p-m-0'>Danh sách xe</h5>
        </>
    );

    const rightContents = (
        <>
            <Button
                label='Thêm mới'
                icon="pi pi-plus"
                className="p-button-outlined p-mr-2"
                onClick={() => {setDisplayVehicleNew(true); setVehicleToUpdate(null); setIsUpdate(false)}}
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
            VehicleService.getAllVehicle().then((response) => {
                setVehicleList(response.data.data)
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

    const handleHideVehicleNewDialog = () => {
        setDisplayVehicleNew(false);
    }

    const editVehicle = (vehicle) => {
        setVehicleToUpdate({ ...vehicle });
        setDisplayVehicleNew(true);
        setIsUpdate(true)
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <div className="actions" >
                <Button icon="pi pi-pencil" 
                    className="p-button-rounded p-button-success p-mr-2" 
                    onClick={() => editVehicle(rowData)} 
                />
                
            </div>
          
      );
    }
    return (
        <div>
            {displayVehicleNew && 
                <NewVehicle 
                    display={displayVehicleNew} 
                    setDisplay={setDisplayVehicleNew} 
                    handleHide={handleHideVehicleNewDialog}
                    toast={toast}
                    flagChange={flagChange}
                    setFlagChange={setFlagChange}
                    setLoading={setLoadingPage}
                    loading={loadingPage}
                    isUpdate={isUpdate}
                    vehicleToUpdate={vehicleToUpdate}
                    // listInvoice={listInvoice}
                />
            }
            <div className="card">
                <Toolbar left={leftContents} right={rightContents} />
                <DataTable value={vehicleList} rows={10} scrollable loading={loading} >
                    <Column field='companyName' header='Tên công ty' filter filterMatchMode="contains" body={linkTemplate} />
                    <Column field="companyEmployeeName" header="Tên nhân viên" filter filterMatchMode="contains"  />
                    <Column field='vehicleTypeDescription' header='Loại phương tiện' filter filterMatchMode="contains"  />
                    <Column field="licensePlate" header="Biển số" filter filterMatchMode="contains"  />
                    <Column  body={actionBodyTemplate} style={{ width: '120px' }} />
                </DataTable>
                <Loading visible={loadingPage} onHide={() => setLoadingPage(false)} />
            </div>
        </div>
    );
}
