import axios from "axios";
const COMPANYEMPLOYEE_API_URL = "http://localhost:8080/public-api/v1.0.0/company/"

class CompanyEmployeeService{

    createCompanyEmployee(companyId, companyEmployee){
        return axios.post(COMPANYEMPLOYEE_API_URL + companyId + '/employee/create', companyEmployee)
    }

    updateCompanyEmployee(companyId, id, companyEmployee){
        return axios.put(COMPANYEMPLOYEE_API_URL + companyId + '/employee/update/' + id, companyEmployee)
    }

    deleteCompanyEmployee(companyId, id){
        return axios.delete(COMPANYEMPLOYEE_API_URL + companyId + '/employee/delete/' + id)
    }
    
    getCompanyById(companyId){
        return axios.get(COMPANYEMPLOYEE_API_URL  + companyId);
    }

    getServiceNotUsed(companyId){
        return axios.get(COMPANYEMPLOYEE_API_URL + companyId + '/used-service');
    }

    createNewService(companyId, serviceId){
        return axios.post(COMPANYEMPLOYEE_API_URL + companyId + '/add-service/' + serviceId);
    }

    deleteService(companyId, serviceId){
        return axios.delete(COMPANYEMPLOYEE_API_URL + companyId + '/used-service/delete/' + serviceId);
    }

    createUsedElectricWater(companyId, usedElectricWater){
        return axios.post(COMPANYEMPLOYEE_API_URL + companyId + '/used_electric_water/create', usedElectricWater)
    }

}

export default new CompanyEmployeeService();
