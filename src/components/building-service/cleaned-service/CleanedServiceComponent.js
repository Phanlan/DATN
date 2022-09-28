
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import React, { useContext, useEffect, useState } from 'react';
import { ToastContext } from '../../../App';
import { Loading } from '../../common/Loading';
import { NumberFormat } from '../../utils/NumberFormat';
import { FormUpdate } from '../FormUpdate';
import CleanedServiceService from "./CleanedServiceService";

export const CleanService = () => {
    const [displayServiceNew, setDisplayServiceNew] = useState(false);
    const toast = useContext(ToastContext);
    const [flagChange, setFlagChange] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingPage, setLoadingPage] = useState(false);
    const [currentCleanService, setCurrentCleanService] = useState({});
    useEffect(() => {
        try{
            setLoading(true);
            CleanedServiceService.getCurrentCleanedService().then((response) => {
                if(response.data.code !== 404) {
                    setCurrentCleanService(response.data.data);
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
        <h5 className="mt-4">Dịch vụ vệ sinh</h5>
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
                    setCurrentService={setCurrentCleanService}
                    currentService={currentCleanService}
                    service= 'clean'
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
                                    <td>{currentCleanService.name}</td>
                                </tr>
                                <tr>
                                    <td><b>Giá:</b></td>
                                    <td>{<NumberFormat value={currentCleanService.price} />} vnđ</td>
                                </tr>
                                <tr>
                                    <td><b>Tần suất</b></td>
                                    <td>{currentCleanService.timesPerWeek} lần/tuần</td>
                                </tr>
                                <tr>
                                    <td><b>Bắt buộc:</b></td>
                                    <td>Có</td>
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

