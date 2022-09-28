import { Column } from 'primereact/column';
import { DataTable } from '../utils'
import { Toolbar } from 'primereact/toolbar';
import React, { useContext, useEffect, useState } from 'react';
import { NumberFormat } from '../../components/utils/NumberFormat';
import { Button } from 'primereact/button';
import { ToastContext } from '../../App';
import { Loading } from '../../components/common/Loading';
import { confirmDialog } from 'primereact/confirmdialog';
import BuildingEmployeeService from './BuildingEmployeeService'
import { BuildingEmployeeForm } from './BuildingEmployeeForm';
import { useRef } from 'react';

export const  BuildingEmployee=() =>  {
    const ref=useRef();
    const [buildingEmployees, setBuildingEmployees] = useState([]);
    const [displayBuildingEmployeeNew, setDisplayBuildingEmployeeNew] = useState(false);
    const toast = useContext(ToastContext);
    const [flagChange, setFlagChange] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingPage, setLoadingPage] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [buildingEmployeeToUpdate, setBuildingEmployeeToUpdate] = useState(null);
    
    useEffect(() => {
        try{
            setLoading(true);
            BuildingEmployeeService.getAllBuildingEmployee().then((response) => {
                setBuildingEmployees(response.data.data)
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
        const value = data?.salaryResponse.salary
        return(
            <NumberFormat value={Number(value)} />
        )
    }

    const levelBody = (data, props) => {
        return(
            <>
                <span>{data?.salaryResponse.level}</span>
            </>
        )
    }

    const positionBody = (data, props) => {
        return(
            <>
                <span>{data?.salaryResponse.position}</span>
            </>
        )
    }

    const leftContents = (
        <>
            <h5 className='p-m-0'>Danh sách nhân viên tòa nhà</h5>
        </>
    );

    const rightContents = (
        <>
            <Button
            label='Thêm mới'
            icon="pi pi-plus"
            className="p-button-outlined p-mr-2"
            onClick={() => {setDisplayBuildingEmployeeNew(true);
                setIsUpdate(false);
                setBuildingEmployeeToUpdate(null)}}
            />
        </>
    );

    const handleHideBuildingEmployeeNewDialog = () => {
        setDisplayBuildingEmployeeNew(false);
    }
    const editBuildingEmployee = (buildingEmployee) => {
        setBuildingEmployeeToUpdate({ ...buildingEmployee });
        setDisplayBuildingEmployeeNew(true);
        setIsUpdate(true)
    }

    const confirmDeleteBuildingEmployee = (rowData) => {
        confirmDialog({
          message: <p>Bạn có muốn xóa bản ghi này không?</p>,
          header: <h6>Xác nhận xóa bản ghi</h6>,
          icon: 'pi pi-info-circle',
          acceptClassName: 'p-button-danger',
          accept: () => {deleteBuildingEmployee(rowData)},
        });
    };

    const deleteBuildingEmployee = async(params) => {
        try {
            setLoading(true);
                await BuildingEmployeeService.deleteBuildingEmployee(parseInt(params?.id)).then(() => {
                    BuildingEmployeeService.getAllBuildingEmployee().then((response) => {
                        setBuildingEmployees(response.data.data)
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
                    onClick={() => editBuildingEmployee(rowData)} 
                />
                <Button icon="pi pi-trash" 
                    className="p-button-rounded p-button-warning" 
                    onClick={() => confirmDeleteBuildingEmployee(rowData)} 
                />
            </div>
          
      );
    }
    
        return (
            <div>
                {displayBuildingEmployeeNew && 
                    <BuildingEmployeeForm 
                        display={displayBuildingEmployeeNew} 
                        setDisplay={setDisplayBuildingEmployeeNew} 
                        handleHide={handleHideBuildingEmployeeNewDialog}
                        toast={toast}
                        flagChange={flagChange}
                        setFlagChange={setFlagChange}
                        setLoading={setLoadingPage}
                        loading={loadingPage}
                        setBuildingEmployees={setBuildingEmployees}
                        isUpdate={isUpdate}
                        buildingEmployeeToUpdate={buildingEmployeeToUpdate}
                    />
                }
                <div className="card">
                    <Toolbar left={leftContents} right={rightContents} />
                    <DataTable value={buildingEmployees} loading={loading} rows={10} ref={ref} scrollable >
                        <Column field="code" header="Mã nhân viên" filter filterMatchMode="contains" style={{width: '160px'}}></Column>
                        <Column field="name" header="Tên" filter filterMatchMode="contains" style={{width: '160px'}}></Column>
                        <Column field="dateOfBirth" header="Ngày sinh" filter filterMatchMode="contains" style={{width: '170px'}}></Column>
                        <Column field="address" header="Địa chỉ" filter filterMatchMode="contains"  style={{width: '160px'}}></Column>
                        <Column field="phone" header="Số điện thoại" style={{width: '160px'}} filter filterMatchMode="contains"></Column>
                        <Column field="" header="Thứ bậc" filter filterMatchMode="contains" body={levelBody} style={{width: '160px'}}></Column>
                        <Column field="" header="Vị trí" filter filterMatchMode="contains" body={positionBody} style={{width: '160px'}}></Column>
                        <Column field="" header="Lương" body={numberBody}  filter filterMatchMode="contains" style={{width: '160px'}}></Column>
                        <Column  body={actionBodyTemplate} style={{ width: '120px' }} />
                    </DataTable>
                </div>
                <Loading visible={loadingPage} onHide={() => setLoadingPage(false)} />
            </div>
        );
    }

