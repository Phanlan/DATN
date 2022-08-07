import i18n from '../i18n';
import { Const, ServiceHandle } from '../utilities';

export class ContactMechService {

    // jcontactMechPurpose

    /**
     * 
     * @param {*} contactMechPurposeId 
     * @returns Contact mech purpose detail
     */
    getContactMechPurpose(contactMechPurposeId) {
        return ServiceHandle.get(Const.API.ContactMechs + `/purposes/{contactMechPurposeId}`).then(res => {
            return res.data
        });
    }

    /**
     * 
     * @param {*} params
     * @returns Page{contactMechPurposeList(contactMechPurposeId, description...), totalRecords}
     */
     getContactMechPurposes(params) {
        return ServiceHandle.get(Const.API.ContactMechs + `/purposes`, { params: params }).then(res => {
            let _data = [...res.data]
            _data.map(item => {
                return (item.description = i18n.t(`contact_mech_purpose:${item.contactMechTypeEnumId}.${item.contactMechPurposeId}`, item.description));
            });

            return {
                contactMechPurposeList: res.data,
                totalRecords: res.headers['x-total-count']
            }
        });
    }

    // fetch contact mech purpose by contact type
    getPurposeByPostalAddresses(params) {
        let _params = { ...{ 'contactMechTypeEnumId': 'CmtPostalAddress', 'pageNoLimit': true }, ...params }; // merge all
        return this.getContactMechPurposes(_params);
    }

    getPurposeByTelecomNumbers(params) {
        let _params = { ...{ 'contactMechTypeEnumId': 'CmtTelecomNumber', 'pageNoLimit': true }, ...params }; // merge all
        return this.getContactMechPurposes(_params);
    }

    getPurposeByEmailAddresses(params) {
        let _params = { ...{ 'contactMechTypeEnumId': 'CmtEmailAddress', 'pageNoLimit': true }, ...params }; // merge all
        return this.getContactMechPurposes(_params);
    }

    getPurposeByWebAddresses(params) {
        let _params = { ...{ 'contactMechTypeEnumId': 'CmtWebAddress', 'pageNoLimit': true }, ...params }; // merge all
        return this.getContactMechPurposes(_params);
    }

    getPurposeByIpAddress(params) {
        let _params = { ...{ 'contactMechTypeEnumId': 'CmtIpAddress', 'pageNoLimit': true }, ...params }; // merge all
        return this.getContactMechPurposes(_params);
    }



    // contactMechs
    

    /**
     * 
     * @param {*} params 
     * @returns contactMechId
     */
    createPostalAddress(params) {
        return ServiceHandle.post(Const.API.ContactMechs + `/postalAddresses`, params).then(res => {
            return res.data
        });
    }

    /**
     * 
     * @param {*} params 
     * @returns contactMechId, trustLevelEnumId
     */
    createTelecomNumber(params) {
        return ServiceHandle.post(Const.API.ContactMechs + `/telecomNumbers`, params).then(res => {
            return res.data
        });
    }

  
}