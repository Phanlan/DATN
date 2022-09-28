import { useContext, useEffect, useState } from "react";
import { Column } from "primereact/column";
import { DataTable } from "../utils";
import { confirmDialog } from "primereact/confirmdialog";
import { Toolbar } from "primereact/toolbar";
import { Loading } from "../common/Loading";
import { useParams } from "react-router-dom";
import { ToastContext } from "../../App";
import InfrastructureService from "./InfrastructureService";
import { Button } from "primereact/button";
import { AddCompanyUsed } from "./AddCompanyUsed";
import { NumberFormat } from "../utils/NumberFormat";

export const InfrastructureDetail = () => {
    const [loading, setLoading] = useState(false);
    const [companyList, setCompanyList] = useState([]);
    const toast = useContext(ToastContext);
    const {id} = useParams();
    const [flagChange, setFlagChange] = useState(false);
    const [loadingPage, setLoadingPage] = useState(false);
    const [displayCompanyUsedNew, setDisplayCompanyUsedNew] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [companyUsedToUpdate, setCompanyUsedToUpdate] = useState();
    const [totalQuantity, setTotalQuantity] = useState(0)

    useEffect(() => {
        try{
            setLoading(true);
            InfrastructureService.getInfrastructureById(id).then((response) => {
                setCompanyList(response.data.data.companyList)
                setTotalQuantity(response.data.data.quantity)
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
            <h5 className='p-m-0'>Danh sách công ty sử dụng</h5>
        </>
    );

    const rightContents = (
        <>
            <Button
            label='Thêm mới'
            icon="pi pi-plus"
            className="p-button-outlined p-mr-2"
            onClick={() => {setDisplayCompanyUsedNew(true);
                setIsUpdate(false);
                setCompanyUsedToUpdate(null)}}
            />
        </>
    );
    const handleHideCompanyUsedNewDialog=() => {
        setDisplayCompanyUsedNew(false)
    }

    const numberBody = (data, props) => {
        return(
            <NumberFormat value={Number(data[props.field])} />
        )
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

    const actionTemplate = (rowData) => {
        return (
            <div className="actions" >
                <Button icon="pi pi-pencil" 
                    className="p-button-rounded p-button-success p-mr-2" 
                    onClick={() => editCompanyUsed(rowData)} 
                />
                <Button icon="pi pi-trash" 
                    className="p-button-rounded p-button-warning" 
                    onClick={() => confirmDeleteCompanyUsed(rowData)} 
                />
            </div>
          
      );
    }

    const editCompanyUsed = (company) => {
        setCompanyUsedToUpdate({ ...company });
        setDisplayCompanyUsedNew(true);
        setIsUpdate(true);
    }

    const confirmDeleteCompanyUsed = (rowData) => {
        confirmDialog({
          message: <p>Bạn có muốn xóa bản ghi này không?</p>,
          header: <h6>Xác nhận xóa bản ghi</h6>,
          icon: 'pi pi-info-circle',
          acceptClassName: 'p-button-danger',
          accept: () => {deleteCompanyUsed(rowData)},
        });
    };

    const deleteCompanyUsed = async(data) => {
        try {
            const params = {
                infrastructure_id: id,
                company_id: data?.id
            }
            setLoading(true);
                await InfrastructureService.deleteCompanyUsed(params)
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
    return(
        <>
            <div className="card">
                <Toolbar left={leftContents} right={rightContents} />
                <DataTable value={companyList} loading={loading} scrollable >
                    <Column field="name" header="Tên công ty" filter filterMatchMode="contains" body={linkTemplate} ></Column>
                    <Column field="quantityInfrastructure" header="SL công ty sử dụng" sortable body={numberBody}></Column>
                    <Column field="fieldOfActivity" header="Lĩnh vực" filter filterMatchMode="contains" ></Column>
                    <Column field="hotline" header="Số điện thoại"  filter filterMatchMode="contains"></Column>
                    <Column field="" body={actionTemplate} ></Column>
                </DataTable>

                {displayCompanyUsedNew && 
                <AddCompanyUsed 
                    display={displayCompanyUsedNew} 
                    setDisplay={setDisplayCompanyUsedNew} 
                    handleHide={handleHideCompanyUsedNewDialog}
                    toast={toast}
                    flagChange={flagChange}
                    setFlagChange={setFlagChange}
                    setLoading={setLoadingPage}
                    loading={loadingPage}
                    isUpdate={isUpdate}
                    companyUsedToUpdate={companyUsedToUpdate}
                    infrastructureId={id}
                    companyList={companyList}
                    totalQuantity={totalQuantity}
                />
            }
            </div>
            <Loading visible={loadingPage} onHide={() => setLoadingPage(false)} />
        </>
    )
}