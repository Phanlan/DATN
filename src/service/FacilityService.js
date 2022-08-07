import { Const, ServiceHandle } from '../utilities';

export class FacilityService {

    getWhFacilitiesByOwner(params) {
        return ServiceHandle.get(Const.API.GetWhFacilitiesByOwner, { params: params }).then(res => {
            return res.data.data
        });
    }

    getFacilityRequireDateConfig(){
        return ServiceHandle.get(Const.API.GetFacilitiesWithDateConfig_Log, {}).then(res => {
            return res.data
        });
    }

    getListProductFacility(){
        return ServiceHandle.get(Const.API.GetListProductFacilityUseView_Log, {}).then(res => {
            return res.data
        });
    }


    /**
     *
     * @param {*} facilityId
     * @returns Facility detail
     */
     getFacility(facilityId) {
        return ServiceHandle.get(Const.API.Facilities + `/${facilityId}` ).then(res => {
            return  res.data;
        });
    }

    /**
     *
     * @param {*} params
     * @returns Page{facilityList, totalRecords}
     */
    getFacilities(params) {
        return ServiceHandle.get(Const.API.Facilities, { params: params }).then(res => {
            return {
                facilityList: res.data,
                totalRecords: res.headers['x-total-count']
            }
        });
    }

    createFacility(params) {
        return ServiceHandle.post(Const.API.Facilities, params).then(res => {
            return res.data
        });
    }

    updateFacility(facilityId, params) {
        return ServiceHandle.patch(Const.API.Facilities + `/${facilityId}`, params).then(res => {
            return res.data
        });
    }


    deleteContactMech(facilityId, contactMechId, contactMechPurposeId) {
        return ServiceHandle.delete(Const.API.Facilities + `/${facilityId}/contactMechs/${contactMechId}`, {contactMechPurposeId: contactMechPurposeId}).then(res => {
            return res.data
        });
    }

    //########################  postalAddress

    getPostalAddresses(facilityId, params) {
        return ServiceHandle.get(Const.API.Facilities + `/${facilityId}/contactMechs/postalAddresses`, { params: params }).then(res => {
            return {
                postalAddressList: res.data,
                totalRecords: res.headers['x-total-count']
            }
        });
    }

    /**
     *
     * @param {*} facilityId
     * @param {*} contactMechId
     * @param {*} params
     * @returns contactMechId
     */
    updatePostalAddress(facilityId, contactMechId, params) {
        return ServiceHandle.patch(Const.API.Facilities + `/${facilityId}/contactMechs/${contactMechId}/postalAddress`, params).then(res => {
            return res.data
        });
    }

    //######################## telecomNumbers

    getTelecomNumbers(facilityId, params) {
        return ServiceHandle.get(Const.API.Facilities + `/${facilityId}/contactMechs/telecomNumbers`, { params: params }).then(res => {
            return {
                telecomNumberList: res.data,
                totalRecords: res.headers['x-total-count']
            }
        });
    }
    /**
     *
     * @param {*} facilityId
     * @param {*} contactMechId
     * @param {*} params
     * @returns contactMechId
     */
    updateTelecomNumber(facilityId, contactMechId, params) {
        return ServiceHandle.patch(Const.API.Facilities + `/${facilityId}/contactMechs/${contactMechId}/telecomNumber`, params).then(res => {
            return res.data
        });
    }

    getAllFacilities(){
        return ServiceHandle.get(Const.API.Facilities, {}).then(res => {
            return res.data
        });
    }

    // POST http://localhost:8080/rest/s1/log/setProductFacility
    saveProductFacility(params, invoiceId){
        return ServiceHandle.post("/rest/s1/log/setProductFacility", params)
          .then(res => res);
    }

}
