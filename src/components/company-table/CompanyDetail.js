
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "../utils";
import { Toolbar } from "primereact/toolbar";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContext } from "../../App";
import { NumberFormat } from "../../components/utils/NumberFormat";
import CompanyEmployeeService from "./CompanyEmployeeService";
import { confirmDialog } from 'primereact/confirmdialog';
import { CompanyEmployeeForm } from "./CompanyEmployeeForm";
import { Loading } from "../../components/common/Loading";
import Moment from "react-moment";
import { UsedElectricWaterForm } from "./UsedElectricWaterForm";
// import { UsedInfrastructureForm } from "./UsedInfrastructureForm";
// import CompanyService from "./CompanyService";

export const CompanyDetail = () => {
    const [loading, setLoading] = useState(false);
    const [serviceList,setServiceList] = useState([]);
    const [employeeList,setEmployeeList] = useState([]);
    const [serviceNotUseList,setServiceNotUseList] = useState([]);
    const [usedElectricWaterList, setUsedElectricWaterList] = useState([]);
    const [infrastructureList, setInfrastructureList] = useState([]);
    const toast = useContext(ToastContext);
    const {id} = useParams();
    const [flagChange, setFlagChange] = useState(false);
    const [companyEmployeeToUpdate,setCompanyEmployeeToUpdate] = useState();
    // const [usedInfrastructureToUpdate,setUsedInfrastructureToUpdate] = useState();
    const [displayCompanyEmployeeNew, setDisplayCompanyEmployeeNew] = useState();
    const [displayUsedElectricWaterNew, setDisplayUsedElectricWaterNew] = useState();
    // const [displayUsedInfrastructureNew, setDisplayUsedInfrastructureNew] = useState();
    const [isUpdate, setIsUpdate] = useState();
    // const [isUpdateInf, setIsUpdateInf] = useState();
    const [loadingPage, setLoadingPage] = useState(false);

    useEffect(() => {
        try{
            setLoading(true);
            CompanyEmployeeService.getServiceNotUsed(id).then((response) => {
                setServiceNotUseList(response.data.data)
            })

            CompanyEmployeeService.getCompanyById(id).then((response) => {
                setServiceList(response.data.data.serviceList);
                setEmployeeList(response.data.data.companyEmployeeList);
                setUsedElectricWaterList(response.data.data.usedElectricWaterList);
                setInfrastructureList(response.data.data.infrastructureList);
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

    const createNewService = (serviceId) => {
        CompanyEmployeeService.createNewService(id, serviceId).then(()=>{
            CompanyEmployeeService.getServiceNotUsed(id).then((response) => {
                setServiceNotUseList(response.data.data)
            })

            CompanyEmployeeService.getCompanyById(id).then((response) => {
                setServiceList(response.data.data.serviceList);
                setEmployeeList(response.data.data.companyEmployeeList);
                setUsedElectricWaterList(response.data.data.usedElectricWaterList);
                setInfrastructureList(response.data.data.infrastructureList);
            })
        })
    }

    const leftServiceContent = (
        <>
            <h5 className='p-m-0'>Danh s??ch d???ch v???</h5>
        </>
    );

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

    const confirmDeleteService = (rowData) => {
        confirmDialog({
          message: <p>B???n c?? mu???n x??a b???n ghi n??y kh??ng?</p>,
          header: <h6>X??c nh???n x??a b???n ghi</h6>,
          icon: 'pi pi-info-circle',
          acceptClassName: 'p-button-danger',
          accept: () => {deleteService(rowData);},
        });
    };

    const deleteService = async(params) => {
        try {
            setLoading(true);
            if(params?.name==="D???ch v??? b???o v???" || params?.name === "D???ch v??? v??? sinh"){
                toast.current.show({ severity: 'error', summary: 'Error', detail: 'Kh??ng th??? xo?? d???ch v??? n??y !!!', life: 5000 });
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
                />
            </div>
          
      );
    }

    const leftEmployeeContents = (
        <>
            <h5 className='p-m-0'>Danh s??ch nh??n vi??n c??ng ty</h5>
        </>
    );

    const rightEmployeeContents = (
        <>
            <Button
            label='Th??m m???i'
            icon="pi pi-plus"
            className="p-button-outlined p-mr-2"
            onClick={() => {setDisplayCompanyEmployeeNew(true);
                setIsUpdate(false);
                setCompanyEmployeeToUpdate(null)}}
            />
        </>
    );

    const leftInfrastructureContents = (
        <>
            <h5 className='p-m-0'>Danh s??ch thi???t b??? c??ng ty s??? d???ng</h5>
        </>
    );

    // const rightInfrastructureContents = (
    //     <>
    //         <Button
    //         label='Th??m m???i'
    //         icon="pi pi-plus"
    //         className="p-button-outlined p-mr-2"
    //         onClick={() => {setDisplayUsedInfrastructureNew(true);
    //             setIsUpdateInf(false);
    //             setUsedInfrastructureToUpdate(null)
    //         }}
    //         />
    //     </>
    // );

    const leftContent = (
        <>
            <h5 className='p-m-0'>Danh s??ch d???ch v??? ??i???n n?????c</h5>
        </>
    );

    const rightContent = (
        <>
            <Button
            label='Th??m m???i'
            icon="pi pi-plus"
            className="p-button-outlined p-mr-2"
            onClick={() => {setDisplayUsedElectricWaterNew(true);}}
            />
        </>
    );

    const editCompanyEmployee = (companyEmployee) => {
        setCompanyEmployeeToUpdate({ ...companyEmployee });
        setDisplayCompanyEmployeeNew(true);
        setIsUpdate(true)
    }

    const confirmDeleteCompanyEmployee = (rowData) => {
        confirmDialog({
          message: <p>B???n c?? mu???n x??a b???n ghi n??y kh??ng?</p>,
          header: <h6>X??c nh???n x??a b???n ghi</h6>,
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
    // const confirmDeleteUsedInfrastructure = (rowData) => {
    //     confirmDialog({
    //       message: <p>B???n c?? mu???n x??a b???n ghi n??y kh??ng?</p>,
    //       header: <h6>X??c nh???n x??a b???n ghi</h6>,
    //       icon: 'pi pi-info-circle',
    //       acceptClassName: 'p-button-danger',
    //       accept: () => {deleteUsedInfrastructure(rowData)},
    //     });
    // };

    // const deleteUsedInfrastructure = async(params) => {
    //     try {
    //         setLoading(true);
    //             await CompanyService.deleteUsedInfrastructure(id,parseInt(params?.id))
    //             setFlagChange(!flagChange);
    //             toast.current.show({ severity: 'success', summary: 'Success', detail: 'Delete Success', life: 5000 });
    //     } catch(error) {
    //         toast.current.show({
    //             severity: "error",
    //             summary: 'error',
    //             detail: error?.response?.data?.errors,
    //             life: 5000,
    //         });
    //     } finally {
    //         setLoading(false);
    //     } 
    // }   

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

    // const actionTemplate = (rowData) => {
    //     return (
    //         <div className="actions" >
    //             <Button icon="pi pi-pencil" 
    //                 className="p-button-rounded p-button-success p-mr-2" 
    //                 onClick={() => editUsedInfrastructure(rowData)} 
    //             />
    //             <Button icon="pi pi-trash" 
    //                 className="p-button-rounded p-button-warning" 
    //                 onClick={() => confirmDeleteUsedInfrastructure(rowData)} 
    //             />
    //         </div>
          
    //   );
    // }

    // const editUsedInfrastructure = (infrastructure) => {
    //     setUsedInfrastructureToUpdate({ ...infrastructure });
    //     setDisplayUsedInfrastructureNew(true);
    //     setIsUpdateInf(true);
    // }
    const timeTemplate = (data, props) => {
        return (
            <>
                <Moment format="DD/MM/YYYY">{data[props.field] ? data[props.field] : ""}</Moment>
            </>
        );
    };

    const handleHideCompanyEmployeeNewDialog = () => {
        setDisplayCompanyEmployeeNew(false);
    }

    // const handleHideUsedInfrastructureNewDialog = () => {
    //     setDisplayUsedInfrastructureNew(false);
    // }

    const handleHideUsedElectricWaterNewDialog = () => {
        setDisplayUsedElectricWaterNew(false);
    }
    return(
        <div>
            <div className="card">
                <Toolbar left={leftServiceContent} right={rightServiceContents} />
                <DataTable value={serviceList} loading={loading} key='id' >
                    <Column field="name" header="Name" filter filterMatchMode="contains" ></Column>
                    <Column field="price" header="Price" sortable body={numberBody} ></Column>
                    <Column field="" body={actionServiceBodyTemplate} ></Column>
                </DataTable>
            
            </div>

            <div className="card">
                <Toolbar left={leftEmployeeContents} right={rightEmployeeContents} />
                <DataTable value={employeeList} loading={loading} key='id' scrollable >
                    <Column field="code" header="M?? nh??n vi??n" filter filterMatchMode="contains" ></Column>
                    <Column field="name" header="T??n nh??n vi??n" filter filterMatchMode="contains"></Column>
                    <Column field="dateOfBirth" header="Ng??y sinh" sortable></Column>
                    <Column field="identification" header="M?? CCCD" filter filterMatchMode="contains" ></Column>
                    <Column field="phone" header="S??? ??i???n tho???i" filter filterMatchMode="contains" ></Column>
                    <Column field="" body={actionBodyTemplate} ></Column>
                </DataTable>
            </div>

            <div className="card">
                <Toolbar left={leftContent} right={rightContent} />
                <DataTable value={usedElectricWaterList} loading={loading} key='id' >
                    <Column field="electricNumber" header="S??? ??i???n" sortable body={numberBody} ></Column>
                    <Column field="waterNumber" header="S??? n?????c" sortable body={numberBody} ></Column>
                    <Column field="month" header="Th??ng" sortable body={timeTemplate} ></Column>
                </DataTable>
            
            </div>

            <div className="card">
                <Toolbar left={leftInfrastructureContents}/>
                <DataTable value={infrastructureList} loading={loading} key='id' scrollable >
                    <Column field="name" header="T??n thi???t b???" filter filterMatchMode="contains" body={linkTemplate} ></Column>
                    <Column field="quantityCompanyUse" header="SL c??ng ty s??? d???ng" sortable></Column>
                    <Column field="type" header="Ph??n lo???i" filter filterMatchMode="contains" ></Column>
                    {/* <Column field="" body={actionTemplate} ></Column> */}
                </DataTable>
            </div>
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

            {displayUsedElectricWaterNew && 
                <UsedElectricWaterForm 
                    display={displayUsedElectricWaterNew} 
                    setDisplay={setDisplayUsedElectricWaterNew} 
                    handleHide={handleHideUsedElectricWaterNewDialog}
                    toast={toast}
                    flagChange={flagChange}
                    setFlagChange={setFlagChange}
                    setLoading={setLoadingPage}
                    loading={loadingPage}
                    companyId={id}
                />
            }

            {/* {displayUsedInfrastructureNew && 
                <UsedInfrastructureForm 
                    display={displayUsedInfrastructureNew} 
                    setDisplay={setDisplayUsedInfrastructureNew} 
                    handleHide={handleHideUsedInfrastructureNewDialog}
                    toast={toast}
                    flagChange={flagChange}
                    setFlagChange={setFlagChange}
                    setLoading={setLoadingPage}
                    loading={loadingPage}
                    isUpdate={isUpdateInf}
                    usedInfrastructureToUpdate={usedInfrastructureToUpdate}
                    companyId={id}
                    infrastructureList={infrastructureList}
                />
            } */}
            <Loading visible={loadingPage} onHide={() => setLoadingPage(false)} />
        </div>
    )
}