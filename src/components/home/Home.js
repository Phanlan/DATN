import React from 'react';
import '../../style.css'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { HomeItem } from './HomeItem';
import '../../App.css'

export const Home =() => {
    const companies = [
        { name: "Chi tiết", code: 'companies' },
    ];
    const buildingEmployee = [
        { name: "Chi tiết", code: 'building-employee' },
    ];
    const salary = [
        { name: "Chi tiết", code: 'salary' },
    ];
    const buildingService = [
        { name: "Chi tiết", code: 'building-service' },
    ];
    const infrastructure = [
        { name: "Chi tiết", code: 'building-infrastructure' },
    ];
        return (
            <div>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <h1 className="mt-4">Quản lí tòa nhà</h1>
                            <br/>
                            <br/>
                            <div className="row">
                                <div className="col-xl-3 col-md-6">
                                    <div className="bg-primary text-white mb-4">
                                    <HomeItem options = {buildingEmployee} header ="Quản lí nhân viên tòa nhà" />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="bg-warning text-white mb-4">
                                        <HomeItem options = {companies} header ="Quản lí công ty thuê" />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="bg-success text-white mb-4">
                                        <HomeItem options = {salary} header ="Quản lí lương nhân viên" />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="bg-danger text-white mb-4">
                                        <HomeItem options = {buildingService} header ="Quản lí dịch vụ tòa nhà" />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="bg-danger text-white mb-4">
                                        <HomeItem options = {infrastructure} header ="Quản lí trang thiết bị" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                </div>
            </div>
        );
    }
