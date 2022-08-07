import i18n from '../i18n';
import { Const, ServiceHandle } from '../utilities';

export class StatusItemService {

    getStatus(statusId) {
        return ServiceHandle.get(Const.API.Statuses + `/${statusId}`).then(res => {
            return res.data
        });
    }

    /**
     *
     * @param {*} params
     * @returns Page{statusList, totalRecords}
     */
    getStatuses(params) {
        return ServiceHandle.get(Const.API.Statuses, { params: params }).then(res => {
            let _data = [...res.data]
            _data.map(item => {
                return (item.description = i18n.t(`status:${item.statusTypeId}.${item.statusId}`, item.description));
            });

            return {
                statusList: res.data,
                totalRecords: res.headers['x-total-count']
            }
        });
    }

    // add more overload for each status type
    getAcctgTransEntryReconciles(params) {
        let _params = { ...{ 'statusTypeId': 'AcctgTransEntryReconcile', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getAssets(params) {
        let _params = { ...{ 'statusTypeId': 'Asset', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getAssetMaintenances(params) {
        let _params = { ...{ 'statusTypeId': 'AssetMaintenance', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getCommunicationEvents(params) {
        let _params = { ...{ 'statusTypeId': 'CommunicationEvent', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getCommunicationEventParties(params) {
        let _params = { ...{ 'statusTypeId': 'CommunicationEventParty', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getContactListParties(params) {
        let _params = { ...{ 'statusTypeId': 'ContactListParty', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getEmailMessages(params) {
        let _params = { ...{ 'statusTypeId': 'EmailMessage', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getEmplPositions(params) {
        let _params = { ...{ 'statusTypeId': 'EmplPosition', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getEntitySyncs(params) {
        let _params = { ...{ 'statusTypeId': 'EntitySync', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getFinancialAccounts(params) {
        let _params = { ...{ 'statusTypeId': 'FinancialAccount', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getGlReconciliations(params) {
        let _params = { ...{ 'statusTypeId': 'GlReconciliation', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getInvoices(params) {
        let _params = { ...{ 'statusTypeId': 'Invoice', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getLeadStatuses(params) {
        let _params = { ...{ 'statusTypeId': 'LeadStatus', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getMarketingCampaigns(params) {
        let _params = { ...{ 'statusTypeId': 'MarketingCampaign', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getOrderHeaders(params) {
        let _params = { ...{ 'statusTypeId': 'OrderHeader', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getPayments(params) {
        let _params = { ...{ 'statusTypeId': 'Payment', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getPaymentReconciles(params) {
        let _params = { ...{ 'statusTypeId': 'PaymentReconcile', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getPhiessicalInventory(params) {
        let _params = { ...{ 'statusTypeId': 'PhysicalInventory', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getPrintJobs(params) {
        let _params = { ...{ 'statusTypeId': 'PrintJob', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getProductReviews(params) {
        let _params = { ...{ 'statusTypeId': 'ProductReview', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getRequests(params) {
        let _params = { ...{ 'statusTypeId': 'Request', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getRequirements(params) {
        let _params = { ...{ 'statusTypeId': 'Requirement', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getReturns(params) {
        let _params = { ...{ 'statusTypeId': 'Return', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getShipments(params) {
        let _params = { ...{ 'statusTypeId': 'Shipment', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getShipmentItemSources(params) {
        let _params = { ...{ 'statusTypeId': 'ShipmentItemSource', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getShipmentRouteSegments(params) {
        let _params = { ...{ 'statusTypeId': 'ShipmentRouteSegment', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getSystemMessages(params) {
        let _params = { ...{ 'statusTypeId': 'SystemMessage', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getTimesheets(params) {
        let _params = { ...{ 'statusTypeId': 'Timesheet', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getWorkEfforts(params) {
        let _params = { ...{ 'statusTypeId': 'WorkEffort', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getWorkEffortAssetAssigns(params) {
        let _params = { ...{ 'statusTypeId': 'WorkEffortAssetAssign', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getWorkEffortParties(params) {
        let _params = { ...{ 'statusTypeId': 'WorkEffortParty', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }
    getWorkEffortProducts(params) {
        let _params = { ...{ 'statusTypeId': 'WorkEffortProduct', "pageNoLimit": true }, ...params }; // merge all
        return this.getStatuses(_params);
    }


}
