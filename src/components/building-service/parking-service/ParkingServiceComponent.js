import React, { useContext, useEffect, useState } from 'react';
import ParkingServiceService from "./ParkingServiceService";
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { FormUpdate } from '../FormUpdate';
import { ToastContext } from '../../../App';
import { NumberFormat } from '../../utils/NumberFormat';
import { Loading } from '../../common/Loading';

export const ParkingService =() => {
    const [displayServiceNew, setDisplayServiceNew] = useState(false);
    const toast = useContext(ToastContext);
    const [flagChange, setFlagChange] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingPage, setLoadingPage] = useState(false);
    const [currentParkingService, setCurrentParkingService] = useState({});

    useEffect(() => {
        try{
            setLoading(true);
            ParkingServiceService.getCurrentParkingService().then((response) => {
                if(response.data.code !== 404) {
                    setCurrentParkingService(response.data.data);
                }
            });
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

    const handleHideServiceNewDialog = () => {
        setDisplayServiceNew(false);
    }
    const leftContents = (
        <h5 className="mt-4">Dịch vụ trông giữ xe</h5>
    )

    const rightContents = (
        <>
            <Button
            label='Cập nhật'
            className="p-button-outlined p-mr-2"
            onClick={() => {setDisplayServiceNew(true);}}
            />
        </>
    );
    return (
        <div>
            {displayServiceNew && 
                <FormUpdate 
                    display={displayServiceNew} 
                    setDisplay={setDisplayServiceNew} 
                    handleHide={handleHideServiceNewDialog}
                    toast={toast}
                    flagChange={flagChange}
                    setFlagChange={setFlagChange}
                    setLoading={setLoadingPage}
                    loading={loadingPage}
                    setCurrentService={setCurrentParkingService}
                    currentService={currentParkingService}
                    service= 'parking'
                />
            }
            <div className="container-fluid px-4">
                <Toolbar left={leftContents} right={rightContents} />
                <div className="card mb-4" loading={loading}>
                    <div className="card-body">
                        <table className="table table-bordered text-center">
                            <tbody>
                                <tr>
                                    <td> <b>Tên:</b></td>
                                    <td>{currentParkingService.name}</td>
                                </tr>
                                <tr>
                                    <td><b>Giá:</b></td>
                                    <td>{<NumberFormat value={currentParkingService.price} />} vnđ</td>
                                </tr>
                                <tr>
                                    <td><b>Số lượng:</b></td>
                                    <td>{currentParkingService.slot}</td>
                                </tr>
                                <tr>
                                    <td><b>Bắt buộc:</b></td>
                                    <td>Không</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Loading visible={loadingPage} onHide={() => setLoadingPage(false)} />
        </div>
    );

}

