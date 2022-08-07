import { Const, ServiceHandle } from '../utilities';

export class PartyService {
    
    /**
     * 
     * @param {*} partyId 
     * @returns 
     */
    getParty(partyId) {
        return ServiceHandle.get(Const.Mantle.API.Parties + `/${partyId}`).then(res => {
            return res.data
        });
    }

    /**
     * Lookup Party ID List
     * @param {*} params 
     * @returns Page{partyIdList[partyId], totalRecords}
     */
     getParties(params) {
        return ServiceHandle.get(Const.API.Mantle.Parties, { params: params }).then(res => {
            return {
                partyIdList: res.data.partyIdList,
                totalRecords: res.data.partyIdListPageSize
            }
        });
    }

    /**
     * Lookup Party Documents
     * @param {*} params 
     * @returns Page{documentList[partyDocument], totalRecords}
     */
     search(params) {
        return ServiceHandle.get(Const.API.Mantle.Parties + `/search`, { params: params }).then(res => {
            return {
                documentList: res.data.documentList,
                totalRecords: res.data.documentListCount
            }
        });
    }


     
}