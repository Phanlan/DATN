/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Menu.css';
class Menu extends Component {
    render() {
        return (
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark menu" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Home View</div >
                            <a className="nav-link" href="/">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Home
                            </a>
                            <div className="sb-sidenav-menu-heading">Manager</div>
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link collapsed" href="" data-bs-toggle="collapse" data-bs-target="#collapseCompany" aria-expanded="false" aria-controls="collapseCompany">
                                        Companies
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="collapseCompany" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="#/companies">Company Table</a>
                                        </nav>
                                    </div>
                                    <a className="nav-link collapsed" href="" data-bs-toggle="collapse" data-bs-target="#collapseBuilding" aria-expanded="false" aria-controls="collapseBuilding">
                                        Building
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="collapseBuilding" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="#/building-employee">Building Employee</a>
                                            <a className="nav-link" href="#/salary">Salary</a>
                                            <a className="nav-link" href="#/building-service">Building Service</a>
                                        </nav>
                                    </div>
                                </nav>
                            
                            <div className="sb-sidenav-menu-heading">Statitics</div>
                            <a className="nav-link" href="#/company-stat">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Company Stat
                            </a>
                            <a className="nav-link" href="#/employee-stat">
                                <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                Employee Stat
                            </a>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Admin
                    </div>
                </nav>
            </div>
        );
    }
}

export default Menu;
