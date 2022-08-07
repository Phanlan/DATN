import { Const, ServiceHandle } from '../utilities';

export class PurchasingService {
    searchPartyList(params) {
        return ServiceHandle.get(Const.API.SearchPartyList, { params: params })
        .then((res) => res.data);
    }

    getFacilityList(params) {
        return ServiceHandle.get(Const.API.GetFacilityList, { params: params })
        .then((res) => res.data);
    }

    getCustomerOrgList() {
        return ServiceHandle.get(Const.API.GetCustomerOrgList, {})
        .then((res) => res.data);
    }

    getProductDetail(params) {
        return ServiceHandle.get(Const.API.GetProductDetail_Pur, { params: params})
            .then(res => res.data.data);
    }

    createPurchaseOrder(params) {
      return ServiceHandle.post(Const.API.CreatePurchaseOrder, params)
        .then(res => res.data );
    }

    getOrderDetail(params) {
      return ServiceHandle.get(Const.API.GetPurchaseOrderDetail, { params: params })
        .then(res => res.data);
    }
}