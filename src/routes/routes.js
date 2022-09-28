import React, { Component } from 'react';
import {Home} from '../components/home/Home';
import {
    Switch,
    Route,
  } from "react-router-dom";
import { Salary } from '../components/BuildingEmployee/Salary';
import { CompanyTable } from '../components/company-table/CompanyTable';
import { CompanyDetail } from '../components/company-table/CompanyDetail';
import { BuildingEmployee } from '../components/BuildingEmployee/BuildingEmployee';
import { Service } from '../components/building-service/Service'
import { ProtectedService } from '../components/building-service/protected-service/ProtectedServiceComponent';
import { ParkingService } from '../components/building-service/parking-service/ParkingServiceComponent'
import { MaintenanceService } from '../components/building-service/maintenance-service/MaintenanceService';
import { FoodService } from '../components/building-service/food-service/FoodServiceComponent';
import { CleanService } from '../components/building-service/cleaned-service/CleanedServiceComponent';
import { CompanyStat } from '../components/company-stat/CompanyStat';
import { EmployeeStat } from '../components/employee-stat/EmployeeStat';
import { Infrastructure } from '../components/infrastructure';
import { InfrastructureDetail } from '../components/infrastructure/InfrastructureDetail'
import { LogIn } from '../components/LogIn/LogIn';
import { Signup } from '../SignUp';

class RouterSystem extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/login"><LogIn/></Route>
                    <Route exact path="/signup"><Signup /></Route>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/companies"><CompanyTable/></Route>
                    <Route path="/company-detail/:id" component={CompanyDetail}></Route>
                    <Route path="/building-employee" ><BuildingEmployee /></Route>
                    <Route path="/salary" ><Salary /></Route>
                    <Route path="/building-service" ><Service /></Route>
                    <Route path="/building-infrastructure" ><Infrastructure /></Route>
                    <Route path="/infrastructure-detail/:id" component={InfrastructureDetail}></Route>
                    <Route path="/protected-service" component={ProtectedService}></Route>
                    <Route path="/parking-service" component={ParkingService}></Route>
                    <Route path="/maintenance-service" component={MaintenanceService}></Route>
                    <Route path="/food-service" component={FoodService}></Route>
                    <Route path="/cleaned-service" component={CleanService}></Route>
                    <Route path="/company-stat" component={CompanyStat}></Route>
                    <Route path="/employee-stat" component={EmployeeStat}></Route>
                </Switch>
            </div>
        );
    }
}

export default RouterSystem;
