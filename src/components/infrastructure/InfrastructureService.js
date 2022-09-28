import axios from "axios";
const INFRASTRUCTURE_API_URL = "http://localhost:8080/public-api/v1.0.0/infrastructure"

class InfrastructureService{
    getAllInfrastructure(){
        return axios.get(INFRASTRUCTURE_API_URL + '/list');
    }

    getInfrastructureType(){
        return axios.get(INFRASTRUCTURE_API_URL + '/list-infastructureType');
    }

    createInfrastructure(infrastructure){
        return axios.post(INFRASTRUCTURE_API_URL + '/create', infrastructure)
    }

    deleteInfrastructure(id){
        return axios.delete(INFRASTRUCTURE_API_URL + '/delete/'+ id);
    }

    updateInfrastructure(id, infrastructure){
        return axios.put(INFRASTRUCTURE_API_URL + '/update/'+ id, infrastructure);
    }

    getInfrastructureById(infrastructureId){
        return axios.get(INFRASTRUCTURE_API_URL  + '/' + infrastructureId);
    }

    createCompanyUsed(params){
        return axios.post(INFRASTRUCTURE_API_URL + `/${params.infrastructure_id}/add/company/${params.company_id}/${params.quantity}`, params)
    }

    updateCompanyUsed(params){
        return axios.put(INFRASTRUCTURE_API_URL + `/${params.infrastructure_id}/company/update/${params.company_id}` , params);
    }

    deleteCompanyUsed(params){
        return axios.delete(INFRASTRUCTURE_API_URL + `/${params.infrastructure_id}/company/delete/${params.company_id}`);
    }

}

export default new InfrastructureService();