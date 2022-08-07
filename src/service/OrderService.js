import { Const, ServiceHandle } from '../utilities';

export class OrderService {
    approveOrder(params) {
        return ServiceHandle.post(Const.API.ApproveOrder, params)
            .then(res => res.data);
    }

    cancelOrder(params) {
        return ServiceHandle.post(Const.API.CancelOrder_Sales, params)
            .then(res => res.data);
    }

    getOrderList(params) {
        return ServiceHandle.get(Const.API.GetOrderList, { params: params })
            .then(res => res.data);
    }

    getOrderDetail(params) {
        return ServiceHandle.get(Const.API.GetOrderDetail, { params: params })
            .then(res => res.data);
    }

    editOrder(params) {
        return ServiceHandle.post(Const.API.EditOrder, params).then(res => {
            return res.data
        });
    }

    createOrder(params) {
        return ServiceHandle.post(Const.API.CreateOrder, params).then(res => {
            return res.data
        });
    }

    // getStatusItems(params) {
    //     return ServiceHandle.get(Const.API.GetStatusItems, { params: params })
    //     .then((res) => res.data);
    // }



    //############### /rest/s1/mantle/orders
    /**
     * 
     * @param {*} params 
     * @returns Page{orderList, totalRecords}
     */
     getOrders(params) {
        return ServiceHandle.get(Const.API.Orders, { params: params }).then(res => {
            return {
                orderList: res.data,
                totalRecords: res.headers['x-total-count']
            }
        });
    }

    /**
     * 
     * @param {*} orderId 
     * @returns 
     */
     getOrder(orderId) {
        return ServiceHandle.get(Const.API.Orders + `/${orderId}`).then(res => {
            return res.data
        });
    }

    /**
     * 
     * @param {*} orderId 
     * @returns 
     */
     getOrderDisplayInfo(orderId) {
        return ServiceHandle.get(Const.API.Orders + `/${orderId}/displayInfo`).then(res => {
            return res.data
        });
    }

    

    /**
     * Get all shipments of order part
     * @param {*} orderId 
     * @param {*} orderPartSeqId 
     * @returns 
     */
     getShipments(orderId, orderPartSeqId, param) {
        return ServiceHandle.get(Const.API.Logistic.Orders + `/${orderId}/parts/${orderPartSeqId}/shipments`, param).then(res => {
            return {
                shipmentList: res.data.shipmentList,
                totalRecords: res.data.shipmentListCount
            }
        });
    }

    checkShipment(orderId, orderPartSeqId) {
        return ServiceHandle.get(Const.API.Logistic.Orders + `/${orderId}/parts/${orderPartSeqId}/shipments/check`).then(res => {
            return res;
        });
    }

    quickCreateShipment(orderId, orderPartSeqId, facilityId) {
        return ServiceHandle.post(Const.API.Logistic.Orders + `/${orderId}/parts/${orderPartSeqId}/shipments/quick`
                                ,{"orderId": orderId, "orderPartSeqId":orderPartSeqId, "facilityId": facilityId }
                                ).then(res => {
                                    console.log("res ...", res);
            return res;
        });
    }

}
