import { Const, ServiceHandle } from '../utilities';

export class POSService {

    getCustomerInfo(params) {
        return ServiceHandle.get(Const.API.GetCustomerInfo_POS, { params: params })
            .then(res => res.data);
    }

    getOrderDetail(params) {
        return ServiceHandle.get(Const.API.GetOrderDetail_POS, { params: params })
            .then(res => res.data);
    }

    getOrderList(params) {
        return ServiceHandle.get(Const.API.GetOrderList_POS, { params: params })
            .then(res => res.data);
    }

    getPromoList(params) {
        return ServiceHandle.get(Const.API.GetPromoList_POS,{params:params})
            .then(res => res.data);
        
    }

    getPromoDetail(params) {
        return ServiceHandle.get(Const.API.GetPromoDetail_POS,{params:params})
            .then(res => res.data);
        
    }

    getPromoRules(params) {
        return ServiceHandle.get(Const.API.GetPromoRules,{params:params})
            .then(res => res.data);
        
    }

    quickSearch(documentType, queryString){
        return ServiceHandle.get(Const.API.SearchProducts,{params:{documentType:documentType,queryString:queryString}})
            .then(res => res.data);
    }

    addOrderItem(productStoreId, customerPartyId, orderId, productId, quantity){
        return ServiceHandle.get(Const.API.AddOrderItem,{params:{productStoreId:productStoreId, salesChannelEnumId:'ScPos', customerPartyId:customerPartyId, orderId:orderId, productId:productId, quantity:quantity}})
        .then(res => res.data);
    }

    /*delete OrderItem by sending quantity 0*/
    updateOrderItem(orderId,orderItemSeqId,quantity){
        return ServiceHandle.post(Const.API.UpdateOrderItem,{orderId:orderId,orderItemSeqId:orderItemSeqId,quantity:quantity})
        .then(res => res.data);
    }

    getOrderHeader(orderId){
        return ServiceHandle.get(Const.API.GetOrderHeader,{params:{orderId:orderId}})
        .then(res => res.data);
    }

    getOrderItemList(orderId){
        return ServiceHandle.get(Const.API.GetOrderItemList,{params:{orderId:orderId}})
        .then(res => res.data);
    }

    getPaymentInstrumentOptions(){
        return ServiceHandle.get(Const.API.GetPaymentInstrumentOptions,{})
        .then(res => res.data);
    }
    /*
    getPaymentTypeOptions(){
        return ServiceHandle.get('http://localhost:8080/rest/s1/pos/getPaymentTypeOptions',{})
        .then(res => res.data);
        
    }
    */
    addOrderPartPayment(orderId, paymentInstrumentEnumId, amount){
        return ServiceHandle.post(Const.API.AddOrderPartPayment,{orderId:orderId, paymentInstrumentEnumId:paymentInstrumentEnumId, amount:amount})
        .then(res => res.data);
    }

    getTentativeOrderIfAny(customerPartyId, productStoreId){
        return ServiceHandle.get(Const.API.GetTentativeOrderIfAny,{params:{customerPartyId:customerPartyId, productStoreId:productStoreId}})
        .then(res => res.data);
    }

    updateOrderCustomerPartyId(orderId, customerPartyId){
        return ServiceHandle.post(Const.API.UpdateOrderCustomerPartyId,{orderId:orderId, customerPartyId:customerPartyId})
        .then(res => res.data);
    }

    holdOrder(orderId){
        return ServiceHandle.post(Const.API.HoldOrder,{orderId:orderId})
        .then(res => res.data);
    }

    reopenOrder(orderId){
        return ServiceHandle.post(Const.API.ReopenOrder,{orderId:orderId})
        .then(res => res.data);
    }

    cancelOrder(orderId){
        return ServiceHandle.post(Const.API.CancelOrder,{orderId:orderId})
        .then(res => res.data);
    }

    completeOrder(orderId, paymentId){
        return ServiceHandle.post(Const.API.CompleteOrder,{orderId:orderId, paymentId:paymentId})
        .then(res => res.data);
    }
    
    getHeldOrderList(){
        return ServiceHandle.get(Const.API.GetHeldOrderList,{})
        .then(res => res.data);
    }

    deleteOrderItem(orderItemSeqId, orderId ,orderPartSeqId){
        return ServiceHandle.get(Const.API.DeleteOrderItem,{
        params:{
        orderItemSeqId: orderItemSeqId,
        orderId: orderId,
        orderPartSeqId: orderPartSeqId}})
        .then(res => res.data);
    }

}
