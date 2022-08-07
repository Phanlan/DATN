import { Const, ServiceHandle } from '../utilities';

export class CustomerService {

    changeStatusParty(params) {
        return ServiceHandle.post(Const.API.ChangeStatusParty, params)
            .then(res => res.data);
    }

    getPersonalCustomers(params) {
        return ServiceHandle.get(Const.API.GetPersonalCustomers, { params: params })
            .then(res => res.data);
    }

    getPersonalCustomerDetail(params) {
        return ServiceHandle.get(Const.API.GetPersonalCustomerDetail, { params: params })
            .then(res => res.data);
    }
    
    createPersonalCustomer(params) {
        return ServiceHandle.post(Const.API.CreatePersonalCustomer, params)
            .then(res => res.data);
    }

    getOrganizationCustomers(params) {
        return ServiceHandle.get(Const.API.GetOrganizationCustomers, { params: params })
            .then(res => res.data);
    }

    createOrganizationCustomer(params) {
        return ServiceHandle.post(Const.API.CreateOrganizationCustomer, params)
            .then(res => res.data);
    }
}