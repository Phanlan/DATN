import { Const, ServiceHandle } from '../utilities';

export class SalesmanService {
    editSaleEmployee(params) {
        return ServiceHandle.post(Const.API.EditSaleEmployee, params).then((res) => res.data);
    }

    /**
     * Create Salesman
     * @param {*} params 
     * @returns partyId
     */
    createSaleEmployee(params) {
        return ServiceHandle.post(Const.API.CreateSaleEmployee, params).then((res) => res.data);
    }

    /**
     * Get list salesman
     * @param {*} params 
     * @returns totalRecords, salesmans
     */
    getSaleEmployeeList(params) {
        return ServiceHandle.get(Const.API.GetSaleEmployees, {params: params}).then((res) => {
            return {
                totalRecords: res.data.totalRows,
                salesmans: res.data.employees
            }
        });
    }

    /**
     * Get detail salesman
     * @param {*} params 
     * @returns employee
     */
    getSaleEmployeeDetail(params) {
        return ServiceHandle.get(Const.API.GetSaleEmployeeDetail, {params: params}).then(res => res.data);
    }
}