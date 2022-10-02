import { Button } from "primereact/button";
import { Column } from "primereact/column"
import { Toolbar } from "primereact/toolbar"
import { useState } from "react";
import Moment from "react-moment";
import { DataTable, NumberFormat } from "../utils"
import { UsedElectricWaterForm } from "./UsedElectricWaterForm";

export const CompanyDetailElectric = (props) => {
    const {id, usedElectricWaterList, toast, flagChange, setFlagChange} = props;
    const [loading, setLoading] = useState(false);
    const [displayUsedElectricWaterNew, setDisplayUsedElectricWaterNew] = useState();

    const leftContent = (
        <>
            <h5 className='p-m-0'>Danh sách dịch vụ điện nước</h5>
        </>
    );

    const rightContent = (
        <>
            <Button
            label='Thêm mới'
            icon="pi pi-plus"
            className="p-button-outlined p-mr-2"
            onClick={() => {setDisplayUsedElectricWaterNew(true);}}
            />
        </>
    );

    const handleHideUsedElectricWaterNewDialog = () => {
        setDisplayUsedElectricWaterNew(false);
    }

    const numberBody = (data, props) => {
        return(
            <NumberFormat value={Number(data[props.field])} />
        )
    }

    const timeTemplate = (data, props) => {
        return (
            <>
                <Moment format="DD/MM/YYYY">{data[props.field] ? data[props.field] : ""}</Moment>
            </>
        );
    };

    return(
        <>
            {displayUsedElectricWaterNew && 
                <UsedElectricWaterForm 
                    display={displayUsedElectricWaterNew} 
                    setDisplay={setDisplayUsedElectricWaterNew} 
                    handleHide={handleHideUsedElectricWaterNewDialog}
                    toast={toast}
                    flagChange={flagChange}
                    setFlagChange={setFlagChange}
                    setLoading={setLoading}
                    loading={loading}
                    companyId={id}
                />
            }
            <div className="card">
                <Toolbar left={leftContent} right={rightContent} />
                <DataTable value={usedElectricWaterList} loading={loading} key='id' rows={5} >
                    <Column field="electricNumber" header="Số điện" sortable body={numberBody} />
                    <Column field="waterNumber" header="Số nước" sortable body={numberBody} />
                    <Column field="month" header="Ngày chốt số" sortable body={timeTemplate} />
                </DataTable>
            
            </div>
        </>
    )
}