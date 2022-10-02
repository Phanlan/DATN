import { Button } from "primereact/button"
import { Column } from "primereact/column"
import { Toolbar } from "primereact/toolbar"
import { useState } from "react"
import { Loading } from "../common/Loading"
import { DataTable } from "../utils"
import { NewVehicle } from "./NewVehicle"

export const CompanyDetailVehicle = (props) => {
    const {vehicleList, toast, flagChange, setFlagChange, id} = props;
    const [loading, setLoading] = useState(false);
    const [displayVehicleNew, setDisplayVehicleNew] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [vehicleToUpdate, setVehicleToUpdate] = useState(null);

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
    return(
        <>
            {displayVehicleNew && 
                <NewVehicle 
                    display={displayVehicleNew} 
                    setDisplay={setDisplayVehicleNew} 
                    handleHide={handleHideVehicleNewDialog}
                    toast={toast}
                    flagChange={flagChange}
                    setFlagChange={setFlagChange}
                    setLoading={setLoading}
                    loading={loading}
                    isUpdate={isUpdate}
                    vehicleToUpdate={vehicleToUpdate}
                    companyId={id}
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
            </div>
        </>
    )
}