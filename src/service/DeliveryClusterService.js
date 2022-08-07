import { Const, ServiceHandle } from '../utilities';

export class DeliveryClusterService {

    /**
     * return Page{deliveryClusterList, totalRecords}
     */
    getDeliveryClusters(params) {
        return ServiceHandle.get(Const.API.DeliveryClusters_Log, { params: params }).then(res => {
            return {
                deliveryClusterList: res.data,
                totalRecords: res.headers['x-total-count']
            }
        });
    }
    //call lable
    getDeliveryClustersDetail(deliveryClusterId){
        return ServiceHandle.get(Const.API.DeliveryClusters_Log + `/${deliveryClusterId}`).then(res => {
            return res
        });
    }
    //call table
    getDeliveryClusterCustomers(deliveryClusterId, param){
        return ServiceHandle.get(Const.API.DeliveryClusters_Log + `/${deliveryClusterId}/customers`, {params: param}).then(res => {
            return {
                customerList: res.data.customerList,
                totalRecords: res.data.customerListCount
            }
        });
    } 
    //delete
    deleteDeliveryCluster(deliveryClusterId){
        return ServiceHandle.delete(Const.API.DeliveryClusters_Log + `/${deliveryClusterId}`).then(res => {
            return res
        });
    } 
    //delete table Customer Detail
    deleteDeliveryClusterCustomers(deliveryClusterId, param){
        return ServiceHandle.delete(Const.API.DeliveryClusters_Log + `/${deliveryClusterId}/customers`, {data: param}).then(res => {
            return res
        });
    } 
   // update lable
    updateDeliveryCluster(deliveryClusterId, param){
        return ServiceHandle.patch(Const.API.DeliveryClusters_Log + `/${deliveryClusterId}`, param).then(res => {
            return res.data
        });
    } 
    
    addDeliveryClusterCustomers(deliveryClusterId, param){
        return ServiceHandle.patch(Const.API.DeliveryClusters_Log + `/${deliveryClusterId}/customers`, param).then(res => {
            return {
                customerList: res.data.customerList,
                totalRecords: res.data.customerListCount
            }
        });
    } 
   
    getCandidateCustomers(param) {
    return ServiceHandle.get(Const.API.DeliveryClusters_Log + `/candidateCustomers`, param)
        .then(res => {
            return {
                customerList: res.data.customerList,
                totalRecords: res.data.customerListCount
            }
        });
    }

    getDeliveryClustersDetailView(params){
        return ServiceHandle.get(Const.API.DeliveryClusterDetailView_Log, {params}).then(res => {
            return res
        });
    }

    saveProductFacility(params, invoiceId){
        return ServiceHandle.post(Const.API.SetProductFacility_Log, params)
          .then(res => res);
    }

    createDeliveryCluster(params){
        return ServiceHandle.post(Const.API.DeliveryClusters_Log, params)
        .then(res => res);
    }
    
    //createDeliveryCluster
    //addDeliveryClusterCustomer//

}
