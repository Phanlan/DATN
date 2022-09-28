import React from 'react';

export const Service = () => {
    return (
        <div id="layoutSidenav_content">
            <main>
                <div className="container-fluid px-4">
                    <h1 className="mt-4">Manager Buiding Service</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item active"></li>
                    </ol>
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="card bg-primary text-white mb-4">
                                <div className="card-body">Dịch vụ vệ sinh</div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <a className="small text-white stretched-link" href="#/cleaned-service">Chi tiết</a>
                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="card bg-warning text-white mb-4">
                                <div className="card-body"> Dịch vụ bảo trì</div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <a className="small text-white stretched-link" href="#/maintenance-service">Chi tiết</a>
                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="card bg-success text-white mb-4">
                                <div className="card-body">Dịch vụ ăn uống</div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <a className="small text-white stretched-link" href="#/food-service">Chi tiết</a>
                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="card bg-danger text-white mb-4">
                                <div className="card-body">Dịch vụ trông giữ xe</div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <a className="small text-white stretched-link" href="#/parking-service">Chi tiết</a>
                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="card bg-info text-white mb-4">
                                <div className="card-body">Dịch vụ bảo vệ</div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <a className="small text-white stretched-link" href="#/protected-service">Chi tiết</a>
                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </main>
            
        </div>
    );
}

