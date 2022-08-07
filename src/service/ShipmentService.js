import { Const, ServiceHandle } from '../utilities';

export class ShipmentService {
    
    getShipment(shipmentId) {
        return ServiceHandle.get(Const.API.Mantle.Shipments + `/${shipmentId}`).then(res => {
            return res.data
        });
    }
    getShipmentContacts(shipmentId){
        return ServiceHandle.get(Const.API.Mantle.Shipments + `/${shipmentId}/contactInfo`).then(res => {
            return res.data
        });
    }
    getShipmentItemSourecs(shipmentId, param){
        return ServiceHandle.get(Const.API.Mantle.Shipments + `/${shipmentId}/itemSources`, param).then(res => {
            return res.data
        });
    }

    /**
     * 
     * @param {*} params 
     * @returns Page{shipmentList, totalRecords}
     */
     getShipments(params) {
      return ServiceHandle.get(Const.API.Logistic.Shipments, {params}).then((res) => {
        return {
          shipmentsList: res.data.shipmentList,
          totalRecords: res.data.shipmentListCount,
        };
      });
    }

}