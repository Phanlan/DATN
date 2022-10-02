import React, {useEffect, useState, useContext } from "react";
import { useParams} from "react-router-dom";
import { TabView, TabPanel } from 'primereact/tabview';
import { ToastContext } from "../../App";
import { Loading } from '../../components/common/Loading';
import { ServiceCompanyUsed } from "./ServiceCompanyUsed";
import CompanyEmployeeService from "./CompanyEmployeeService";
import { CompanyDetailEmployee } from "./CompanyDetailEmployee";
import { CompanyDetailElectric } from "./CompanyDetailElectric";
import { CompanyDetailInfrastructure } from "./CompanyDetailInfrastructure";
import { CompanyDetailVehicle } from "./CompanyDetailVehicle";

export const DetailCompany = (props) => {
    const toast = useContext(ToastContext);
    const [serviceNotUseList,setServiceNotUseList] = useState([]);
    const [loadingPage, setLoadingPage] = useState(false);
    const [flagChange, setFlagChange] = useState(false);
    const [serviceList,setServiceList] = useState([]);
    const [employeeList,setEmployeeList] = useState([]);
    const [usedElectricWaterList, setUsedElectricWaterList] = useState([]);
    const [infrastructureList, setInfrastructureList] = useState([]);
    const [vehicleList, setVehicleList] = useState([]);
    let { id } = useParams();
    useEffect(() => {
        try{
            setLoadingPage(true);
            CompanyEmployeeService.getServiceNotUsed(id).then((response) => {
                setServiceNotUseList(response.data.data)
            })

            CompanyEmployeeService.getCompanyById(id).then((response) => {
                setServiceList(response.data.data.serviceList);
                setEmployeeList(response.data.data.companyEmployeeList);
                setUsedElectricWaterList(response.data.data.usedElectricWaterList);
                setInfrastructureList(response.data.data.infrastructureList);
                setVehicleList(response?.data?.data?.vehicleResponseList);
            })
        }catch(error) {
            toast.current.show({
                severity: "error",
                summary: 'error',
                detail: error?.response?.data?.errors,
                life: 5000,
            });
        }finally{
            setLoadingPage(false)
        }
        
    }, [flagChange, id]); // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <>
            <div className="card" style={{position: 'relative'}}>
            <h5>Bảng chi tiết công ty</h5>
                <TabView>
                    <TabPanel header='Dịch vụ'>
                        <ServiceCompanyUsed
                            id = {id}
                            serviceNotUseList={serviceNotUseList}
                            setServiceNotUseList={setServiceNotUseList}
                            flagChange={flagChange}
                            setFlagChange={setFlagChange}
                            toast={toast}
                            setServiceList={setServiceList}
                            serviceList={serviceList}
                        />
                    </TabPanel>
                    <TabPanel header='Nhân viên'>
                        <CompanyDetailEmployee id={id}
                            toast={toast}
                            employeeList={employeeList}
                            flagChange={flagChange}
                            setFlagChange={setFlagChange}
                            loadingPage={loadingPage}
                            setLoadingPage={setLoadingPage}
                        />
                    </TabPanel>
                    <TabPanel header='Điện nước'>
                        <CompanyDetailElectric id={id}
                            flagChange={flagChange}
                            setFlagChange={setFlagChange}
                            toast={toast}
                            usedElectricWaterList={usedElectricWaterList}
                        />
                    </TabPanel>
                    <TabPanel header='Trang thiết bị'>
                        <CompanyDetailInfrastructure id={id} 
                            flagChange={flagChange}
                            setFlagChange={setFlagChange}
                            toast={toast}
                            infrastructureList={infrastructureList}
                        />
                    </TabPanel>
                    <TabPanel header='Xe'>
                        <CompanyDetailVehicle id={id} 
                            flagChange={flagChange}
                            setFlagChange={setFlagChange}
                            toast={toast}
                            vehicleList={vehicleList}
                        />
                    </TabPanel>
                </TabView>
                <Loading visible={loadingPage} onHide={() => setLoadingPage(false)} />
            </div>
        </>
    )
}