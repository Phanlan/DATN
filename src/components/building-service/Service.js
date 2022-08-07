import React, { Component } from 'react';

class Service extends Component {
    render() {
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
                                    <div className="card-body">Cleaned Service</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="/cleaned-service">View Details</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="card bg-warning text-white mb-4">
                                    <div className="card-body"> Maintenance Service</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="/maintenance-service">View Details</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="card bg-success text-white mb-4">
                                    <div className="card-body">Food Service</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="/food-service">View Details</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="card bg-danger text-white mb-4">
                                    <div className="card-body">Parking Service</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="/parking-service">View Details</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="card bg-info text-white mb-4">
                                    <div className="card-body">Protected Service</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="/protected-service">View
                                            Details</a>
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
}

export default Service;
