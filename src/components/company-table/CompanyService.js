import axios from "axios";
const COMPANY_API_URL = "http://localhost:8080/public-api/v1.0.0/company"

class CompanyService{
    getAllCompany(){
        return axios.get(COMPANY_API_URL + '/list');
    }

    createCompany(company){
        return axios.post(COMPANY_API_URL + '/create', company)
    }

    updateCompany(id, company){
        return axios.put(COMPANY_API_URL + '/update/' + id, company)
    }

    deleteCompany(id){
        return axios.delete(COMPANY_API_URL + '/delete/' + id)
    }

    createUsedInfrastructure(params){
        return axios.post(COMPANY_API_URL +'/' + params.company_id + '/add/infrastructure/' + params.infrastructure_id + '/' + params.quantity, params)
    }

    updateUsedInfrastructure(companyId, id, params){
        return axios.put(COMPANY_API_URL +'/' + companyId + '/infrastructure/update/' + id, params)
    }
    deleteUsedInfrastructure(company_id,infrastructure_id){
        return axios.delete(COMPANY_API_URL +'/' + company_id + '/infrastructure/delete/' + infrastructure_id)
    }

}

export default new CompanyService();