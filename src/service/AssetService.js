import { Const, ServiceHandle } from '../utilities';

export class AssetService {

    /**
     * 
     * @param {*} assetId 
     * @returns Asset
     */
    getAsset(assetId) {
        return ServiceHandle.get(Const.API.Assets + `/${assetId}` ).then(res => {
            return  res.data;
        });
    }

    /**
     * 
     * @param {*} assetId 
     * @returns AssetDisplayInfo
     *  {
            "asset": {},
            "isFixedAsset": true,
            "statusItem": {},
            "statusId": "string",
            "statusHistoryList": [
                {}
            ],
            "product": {},
            "facility": {},
            "facilityLocation": {},
            "originFacility": {},
            "assetDetailList": [
                {}
            ],
            "assetReservationList": [
                {}
            ]
            }
     */
    getAssetDisplayInfo(assetId) {
        return ServiceHandle.get(Const.API.Assets + `/${assetId}/displayInfo` ).then(res => {
            return  res.data;
        });
    }


    /**
     * 
     * @param {*} params 
     * @returns Page{assetList, totalRecords}
     */
    getAssets(params) {
        return ServiceHandle.get(Const.API.Assets, { params: params }).then(res => {
            return {
                assetList: res.data,
                totalRecords: res.headers['x-total-count']
            }
        });
    }

    /**
     * Inventory
     * @param {*} params 
     * @returns 
     */
    getAssetsByAstTpInventory(params) {
        let _params = { ...{ 'assetTypeEnumId': 'AstTpInventory'}, ...params };
        return this.getAssets(_params);
    }


}
