/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                    <img className="App-logo" src="/assets/img/office-building.png" width="40px" height="40px"/>
                    <a className="navbar-brand ps-3" href="/">Building Manage</a>
                    <button className= "btn btn-link btn-sm order-1 order-lg-0 me-3 me-lg-4 ms-auto" >
                        <a href="#/login" ><i className="fas fa-user fa-fw" id="sidebarToggle" style={{fontSize: '1.4rem'}} /> </a>
                    </button>
                    {/* <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"/></a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Activity Log</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                    </ul> */}
                </nav>
            </div>
        );
    }
}

export default Header;
