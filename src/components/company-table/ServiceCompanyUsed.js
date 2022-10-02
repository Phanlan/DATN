import { Column } from "primereact/column"
import { confirmDialog } from "primereact/confirmdialog";
import { Toolbar } from "primereact/toolbar"
import { useState } from "react";
import { Button } from "react-bootstrap";
import { DataTable, NumberFormat } from "../utils"
import CompanyEmployeeService from "./CompanyEmployeeService";

export const ServiceCompanyUsed =(props) => {
    const {serviceNotUseList,setServiceNotUseList,id, flagChange, setFlagChange, toast, serviceList} = props;
    const [loading, setLoading] = useState(false);

    const leftServiceContent = (
        <>
            <h5 className='p-m-0'>Danh sách dịch vụ</h5>
        </>
    );

    const createNewService = (serviceId) => {
        CompanyEmployeeService.createNewService(id, serviceId).then(()=>{
            CompanyEmployeeService.getServiceNotUsed(id).then((response) => {
                setServiceNotUseList(response?.data?.data);
                setFlagChange(!flagChange)
            })
        })
    }

    const rightServiceContents = (
        <>
            {serviceNotUseList?.map((service) => (
                <Button
                    className="btn btn-success p-mr-2"
                    onClick={() => createNewService(service.id) }
                >
                    {service.name}
                </Button>
            )) 
            }
        </>
    );

    const numberBody = (data, props) => {
        return(
            <NumberFormat value={Number(data[props.field])} />
        )
    }

    const confirmDeleteService = (rowData) => {
        confirmDialog({
          message: <p>Bạn có muốn xóa bản ghi này không?</p>,
          header: <h6>Xác nhận xóa bản ghi</h6>,
          icon: 'pi pi-info-circle',
          acceptClassName: 'p-button-danger',
          accept: () => {deleteService(rowData);},
        });
    };

    const deleteService = async(params) => {
        try {
            setLoading(true);
            if(params?.name==="Dịch vụ bảo vệ" || params?.name === "Dịch vụ vệ sinh"){
                toast.current.show({ severity: 'error', summary: 'Error', detail: 'Không thể xoá dịch vụ này !!!', life: 5000 });
            }else{
                await CompanyEmployeeService.deleteService(id,params?.id)
                setFlagChange(!flagChange);
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Delete Success', life: 5000 });
            }
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

    const actionServiceBodyTemplate = (rowData) => {
        return (
            <div className="actions" >
                <Button icon="pi pi-trash" 
                    className="p-button-rounded p-button-warning" 
                    onClick={() => confirmDeleteService(rowData)} 
                >
                    Xóa
                </Button>
            </div>
          
      );
    }
    return(
        <>
            <div className="card">
                <Toolbar left={leftServiceContent} right={rightServiceContents} />
                <DataTable value={serviceList} loading={loading} key='id' rows={10} >
                    <Column field="name" header="Name" filter filterMatchMode="contains" />
                    <Column field="price" header="Price" sortable body={numberBody} />
                    <Column field="" body={actionServiceBodyTemplate} />
                </DataTable>
            
            </div>
        </>
    )
}