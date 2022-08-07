import i18n from '../i18n';
import { Const, ServiceHandle } from '../utilities';

export class EnumService {

    /**
     * 
     * @param {*} enumId 
     * @returns 
     */
    getEnum(enumId) {
        return ServiceHandle.get(Const.API.Enums + `/${enumId}`).then(res => {
            return res.data
        });
    }

    /**
     * 
     * @param {*} params
     * @returns Page{enumList, totalRecords}
     */
    getEnums(params) {
        return ServiceHandle.get(Const.API.Enums, { params: params }).then(res => {
            let _data = [...res.data]
            _data.map(item => {
                return (item.description = i18n.t(`enum:${item.enumTypeId}.${item.enumId}`, item.description));
            });

            return {
                enumList: res.data,
                totalRecords: res.headers['x-total-count']
            }
        });
    }


    // add more overload for enum types
    getAcctgTransResults(params) {
        let _params = { ...{ 'enumTypeId': 'AcctgTransResult', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getAcctgTransTypes(params) {
        let _params = { ...{ 'enumTypeId': 'AcctgTransType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getACHChangeCodes(params) {
        let _params = { ...{ 'enumTypeId': 'ACHChangeCode', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getACHReturnCodes(params) {
        let _params = { ...{ 'enumTypeId': 'ACHReturnCode', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getAgreementContentTypes(params) {
        let _params = { ...{ 'enumTypeId': 'AgreementContentType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getAgreementItemTypes(params) {
        let _params = { ...{ 'enumTypeId': 'AgreementItemType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getAgreementTypes(params) {
        let _params = { ...{ 'enumTypeId': 'AgreementType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getArtifactTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ArtifactType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getAssetClasses(params) {
        let _params = { ...{ 'enumTypeId': 'AssetClass', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getAssetIdentificationTypes(params) {
        let _params = { ...{ 'enumTypeId': 'AssetIdentificationType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getAssetPaymentMethodTypes(params) {
        let _params = { ...{ 'enumTypeId': 'AssetPaymentMethodType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getAssetReservationAutoes(params) {
        let _params = { ...{ 'enumTypeId': 'AssetReservationAuto', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getAssetReservationOrders(params) {
        let _params = { ...{ 'enumTypeId': 'AssetReservationOrder', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getAssetTypes(params) {
        let _params = { ...{ 'enumTypeId': 'AssetType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getAuthzActions(params) {
        let _params = { ...{ 'enumTypeId': 'AuthzAction', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getAuthzTypes(params) {
        let _params = { ...{ 'enumTypeId': 'AuthzType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getBankAccountTypes(params) {
        let _params = { ...{ 'enumTypeId': 'BankAccountType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getBooleanYNs(params) {
        let _params = { ...{ 'enumTypeId': 'BooleanYN', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getBudgetItemTypes(params) {
        let _params = { ...{ 'enumTypeId': 'BudgetItemType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getBudgetTypes(params) {
        let _params = { ...{ 'enumTypeId': 'BudgetType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getCogsMethods(params) {
        let _params = { ...{ 'enumTypeId': 'CogsMethod', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getCommunicationContentTypes(params) {
        let _params = { ...{ 'enumTypeId': 'CommunicationContentType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getCommunicationPurposes(params) {
        let _params = { ...{ 'enumTypeId': 'CommunicationPurpose', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getComparisonOperators(params) {
        let _params = { ...{ 'enumTypeId': 'ComparisonOperator', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getContactListEmailTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ContactListEmailType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getContactListTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ContactListType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getContactMechTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ContactMechType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getContactPaymentTrustLevels(params) {
        let _params = { ...{ 'enumTypeId': 'ContactPaymentTrustLevel', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getContainerTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ContainerType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getCreditCardTypes(params) {
        let _params = { ...{ 'enumTypeId': 'CreditCardType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getCustomsContentses(params) {
        let _params = { ...{ 'enumTypeId': 'CustomsContents', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getCustomsNonDeliveries(params) {
        let _params = { ...{ 'enumTypeId': 'CustomsNonDelivery', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getDataFeedTypes(params) {
        let _params = { ...{ 'enumTypeId': 'DataFeedType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getDataSourceTypes(params) {
        let _params = { ...{ 'enumTypeId': 'DataSourceType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getDayOfWeeks(params) {
        let _params = { ...{ 'enumTypeId': 'DayOfWeek', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getDbFormFieldTypes(params) {
        let _params = { ...{ 'enumTypeId': 'DbFormFieldType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getDbFormPurposes(params) {
        let _params = { ...{ 'enumTypeId': 'DbFormPurpose', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getDepreciationTypes(params) {
        let _params = { ...{ 'enumTypeId': 'DepreciationType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getEmailTypes(params) {
        let _params = { ...{ 'enumTypeId': 'EmailType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getEmplAuthzTypes(params) {
        let _params = { ...{ 'enumTypeId': 'EmplAuthzType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getEmployerClassifications(params) {
        let _params = { ...{ 'enumTypeId': 'EmployerClassification', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getEmploiesmentApplicationReferredBy(params) {
        let _params = { ...{ 'enumTypeId': 'EmploymentApplicationReferredBy', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getEmploymentLeaveReasons(params) {
        let _params = { ...{ 'enumTypeId': 'EmploymentLeaveReason', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getEmploymentLeaveTypes(params) {
        let _params = { ...{ 'enumTypeId': 'EmploymentLeaveType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getEmploiesmentResponsibility(params) {
        let _params = { ...{ 'enumTypeId': 'EmploymentResponsibility', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getEmploymentStatuses(params) {
        let _params = { ...{ 'enumTypeId': 'EmploymentStatus', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getEmplTaxExempts(params) {
        let _params = { ...{ 'enumTypeId': 'EmplTaxExempt', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getEntitySyncArtifactAppls(params) {
        let _params = { ...{ 'enumTypeId': 'EntitySyncArtifactAppl', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getEnumGroups(params) {
        let _params = { ...{ 'enumTypeId': 'EnumGroup', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getFacilityContentTypes(params) {
        let _params = { ...{ 'enumTypeId': 'FacilityContentType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getFacilityGroupTypes(params) {
        let _params = { ...{ 'enumTypeId': 'FacilityGroupType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getFacilityLocationTypes(params) {
        let _params = { ...{ 'enumTypeId': 'FacilityLocationType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getFacilityTypes(params) {
        let _params = { ...{ 'enumTypeId': 'FacilityType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getFinancialAccountReplenishMethods(params) {
        let _params = { ...{ 'enumTypeId': 'FinancialAccountReplenishMethod', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getFinancialAccountReplenishTypes(params) {
        let _params = { ...{ 'enumTypeId': 'FinancialAccountReplenishType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getFinancialAccountTransReasons(params) {
        let _params = { ...{ 'enumTypeId': 'FinancialAccountTransReason', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getFinancialAccountTransTypes(params) {
        let _params = { ...{ 'enumTypeId': 'FinancialAccountTransType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getFormConfigTypes(params) {
        let _params = { ...{ 'enumTypeId': 'FormConfigType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getGeoAssocTypes(params) {
        let _params = { ...{ 'enumTypeId': 'GeoAssocType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getGeoTypes(params) {
        let _params = { ...{ 'enumTypeId': 'GeoType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getGlAccountCategoryTypes(params) {
        let _params = { ...{ 'enumTypeId': 'GlAccountCategoryType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getGlAccountClasses(params) {
        let _params = { ...{ 'enumTypeId': 'GlAccountClass', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getGlAccountTypes(params) {
        let _params = { ...{ 'enumTypeId': 'GlAccountType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getGlFiscalTypes(params) {
        let _params = { ...{ 'enumTypeId': 'GlFiscalType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getGlJournalTypes(params) {
        let _params = { ...{ 'enumTypeId': 'GlJournalType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getGlResourceTypes(params) {
        let _params = { ...{ 'enumTypeId': 'GlResourceType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getGlXbrlClasses(params) {
        let _params = { ...{ 'enumTypeId': 'GlXbrlClass', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getIdentityTypes(params) {
        let _params = { ...{ 'enumTypeId': 'IdentityType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getInventoryVarianceReasons(params) {
        let _params = { ...{ 'enumTypeId': 'InventoryVarianceReason', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getInvoiceContentTypes(params) {
        let _params = { ...{ 'enumTypeId': 'InvoiceContentType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getInvoiceItemAssocTypes(params) {
        let _params = { ...{ 'enumTypeId': 'InvoiceItemAssocType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getInvoiceSequences(params) {
        let _params = { ...{ 'enumTypeId': 'InvoiceSequence', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getInvoiceTypes(params) {
        let _params = { ...{ 'enumTypeId': 'InvoiceType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getItemTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ItemType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getMaintenanceTypes(params) {
        let _params = { ...{ 'enumTypeId': 'MaintenanceType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getMaritalStatuses(params) {
        let _params = { ...{ 'enumTypeId': 'MaritalStatus', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getMarketSegmentTypes(params) {
        let _params = { ...{ 'enumTypeId': 'MarketSegmentType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getMessageReceiveResponses(params) {
        let _params = { ...{ 'enumTypeId': 'MessageReceiveResponse', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getOrderDecisionReasons(params) {
        let _params = { ...{ 'enumTypeId': 'OrderDecisionReason', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getOrderItemQuantityReasons(params) {
        let _params = { ...{ 'enumTypeId': 'OrderItemQuantityReason', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getOrderSequences(params) {
        let _params = { ...{ 'enumTypeId': 'OrderSequence', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPartyBadgeScanPurposes(params) {
        let _params = { ...{ 'enumTypeId': 'PartyBadgeScanPurpose', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPartyBadgeScanResults(params) {
        let _params = { ...{ 'enumTypeId': 'PartyBadgeScanResult', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPartyClassificationTypes(params) {
        let _params = { ...{ 'enumTypeId': 'PartyClassificationType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPartyContentTypes(params) {
        let _params = { ...{ 'enumTypeId': 'PartyContentType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPartyIdTypes(params) {
        let _params = { ...{ 'enumTypeId': 'PartyIdType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPartyRelationshipTypes(params) {
        let _params = { ...{ 'enumTypeId': 'PartyRelationshipType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPartyTypes(params) {
        let _params = { ...{ 'enumTypeId': 'PartyType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPayDistributionGroups(params) {
        let _params = { ...{ 'enumTypeId': 'PayDistributionGroup', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPaymentContentTypes(params) {
        let _params = { ...{ 'enumTypeId': 'PaymentContentType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPaymentGatewayTypes(params) {
        let _params = { ...{ 'enumTypeId': 'PaymentGatewayType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPaymentInstruments(params) {
        let _params = { ...{ 'enumTypeId': 'PaymentInstrument', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPaymentMethodContentTypes(params) {
        let _params = { ...{ 'enumTypeId': 'PaymentMethodContentType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPaymentMethodFileTypes(params) {
        let _params = { ...{ 'enumTypeId': 'PaymentMethodFileType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPaymentMethodPurposes(params) {
        let _params = { ...{ 'enumTypeId': 'PaymentMethodPurpose', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPaymentMethodTransTypes(params) {
        let _params = { ...{ 'enumTypeId': 'PaymentMethodTransType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPaymentMethodTypes(params) {
        let _params = { ...{ 'enumTypeId': 'PaymentMethodType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPaymentOperations(params) {
        let _params = { ...{ 'enumTypeId': 'PaymentOperation', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPaymentTypes(params) {
        let _params = { ...{ 'enumTypeId': 'PaymentType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPayrollAllowanceAmountTypes(params) {
        let _params = { ...{ 'enumTypeId': 'PayrollAllowanceAmountType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPayrollCalcPers(params) {
        let _params = { ...{ 'enumTypeId': 'PayrollCalcPer', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPayrollPhases(params) {
        let _params = { ...{ 'enumTypeId': 'PayrollPhase', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPayrollRateBasises(params) {
        let _params = { ...{ 'enumTypeId': 'PayrollRateBasis', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPayrollTaxForms(params) {
        let _params = { ...{ 'enumTypeId': 'PayrollTaxForm', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPayrollWageGrps(params) {
        let _params = { ...{ 'enumTypeId': 'PayrollWageGrp', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPieceRateTypes(params) {
        let _params = { ...{ 'enumTypeId': 'PieceRateType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getPrinterPurposes(params) {
        let _params = { ...{ 'enumTypeId': 'PrinterPurpose', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getProductAssocTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ProductAssocType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getProductCategoryContentTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ProductCategoryContentType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getProductCategoryTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ProductCategoryType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getProductClasses(params) {
        let _params = { ...{ 'enumTypeId': 'ProductClass', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getProductContentTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ProductContentType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getProductFeatureApplTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ProductFeatureApplType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getProductFeatureIactnTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ProductFeatureIactnType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getProductFeatureTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ProductFeatureType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getProductFormTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ProductFormType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getProductGeoPurposes(params) {
        let _params = { ...{ 'enumTypeId': 'ProductGeoPurpose', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getProductIdentificationTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ProductIdentificationType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getProductPricePurposes(params) {
        let _params = { ...{ 'enumTypeId': 'ProductPricePurpose', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getProductPriceTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ProductPriceType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getProductStoreCategoryTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ProductStoreCategoryType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getProductStoreContentTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ProductStoreContentType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getProductStoreEmailTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ProductStoreEmailType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getProductStoreSettingTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ProductStoreSettingType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getProductStoreWikiSpaceTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ProductStoreWikiSpaceType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getProductTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ProductType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getRateModifiers(params) {
        let _params = { ...{ 'enumTypeId': 'RateModifier', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getRatePurposes(params) {
        let _params = { ...{ 'enumTypeId': 'RatePurpose', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getRateTypes(params) {
        let _params = { ...{ 'enumTypeId': 'RateType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getRejectionReasons(params) {
        let _params = { ...{ 'enumTypeId': 'RejectionReason', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getRequestContentTypes(params) {
        let _params = { ...{ 'enumTypeId': 'RequestContentType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getRequestResolutions(params) {
        let _params = { ...{ 'enumTypeId': 'RequestResolution', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getRequestTypes(params) {
        let _params = { ...{ 'enumTypeId': 'RequestType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getRequirementTypes(params) {
        let _params = { ...{ 'enumTypeId': 'RequirementType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getResidenceStatuses(params) {
        let _params = { ...{ 'enumTypeId': 'ResidenceStatus', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getReturnReasons(params) {
        let _params = { ...{ 'enumTypeId': 'ReturnReason', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getReturnResponses(params) {
        let _params = { ...{ 'enumTypeId': 'ReturnResponse', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getRoleGroups(params) {
        let _params = { ...{ 'enumTypeId': 'RoleGroup', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getSalesChannels(params) {
        let _params = { ...{ 'enumTypeId': 'SalesChannel', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getScreenThemeResourceTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ScreenThemeResourceType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getScreenThemeTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ScreenThemeType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getServiceRegisterTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ServiceRegisterType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getShipmentMethods(params) {
        let _params = { ...{ 'enumTypeId': 'ShipmentMethod', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getShipmentTrackingStatuses(params) {
        let _params = { ...{ 'enumTypeId': 'ShipmentTrackingStatus', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getShipmentTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ShipmentType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getShippingGatewayOptions(params) {
        let _params = { ...{ 'enumTypeId': 'ShippingGatewayOption', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getShippingGatewayTypes(params) {
        let _params = { ...{ 'enumTypeId': 'ShippingGatewayType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getSignatureRequireds(params) {
        let _params = { ...{ 'enumTypeId': 'SignatureRequired', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getSixteenPointCompasses(params) {
        let _params = { ...{ 'enumTypeId': 'SixteenPointCompass', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getSubscriptionTypes(params) {
        let _params = { ...{ 'enumTypeId': 'SubscriptionType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getSupplierPreferredOrders(params) {
        let _params = { ...{ 'enumTypeId': 'SupplierPreferredOrder', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getSystemMessageAuthTypes(params) {
        let _params = { ...{ 'enumTypeId': 'SystemMessageAuthType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getTaxAuthorityAssocTypes(params) {
        let _params = { ...{ 'enumTypeId': 'TaxAuthorityAssocType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getTaxAuthorityTypes(params) {
        let _params = { ...{ 'enumTypeId': 'TaxAuthorityType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getTaxClassifications(params) {
        let _params = { ...{ 'enumTypeId': 'TaxClassification', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getTaxDepreciationTypes(params) {
        let _params = { ...{ 'enumTypeId': 'TaxDepreciationType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getTaxFederalStatuses(params) {
        let _params = { ...{ 'enumTypeId': 'TaxFederalStatus', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getTaxForms(params) {
        let _params = { ...{ 'enumTypeId': 'TaxForm', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getTaxGatewayTypes(params) {
        let _params = { ...{ 'enumTypeId': 'TaxGatewayType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getTaxStateStatuses(params) {
        let _params = { ...{ 'enumTypeId': 'TaxStateStatus', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getTerminationTypes(params) {
        let _params = { ...{ 'enumTypeId': 'TerminationType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getTermTypes(params) {
        let _params = { ...{ 'enumTypeId': 'TermType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getTimePeriodPurposes(params) {
        let _params = { ...{ 'enumTypeId': 'TimePeriodPurpose', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getTrackingCodeSources(params) {
        let _params = { ...{ 'enumTypeId': 'TrackingCodeSource', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getTrackingCodeTypes(params) {
        let _params = { ...{ 'enumTypeId': 'TrackingCodeType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getUomDimTypeGroups(params) {
        let _params = { ...{ 'enumTypeId': 'UomDimTypeGroup', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getUomTypes(params) {
        let _params = { ...{ 'enumTypeId': 'UomType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getUserAuthcFactorTypes(params) {
        let _params = { ...{ 'enumTypeId': 'UserAuthcFactorType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getUserGroupTypes(params) {
        let _params = { ...{ 'enumTypeId': 'UserGroupType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getUserPreferenceKeies(params) {
        let _params = { ...{ 'enumTypeId': 'UserPreferenceKey', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getWorkEffortAssocTypes(params) {
        let _params = { ...{ 'enumTypeId': 'WorkEffortAssocType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getWorkEffortContentTypes(params) {
        let _params = { ...{ 'enumTypeId': 'WorkEffortContentType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getWorkEffortFacilityTypes(params) {
        let _params = { ...{ 'enumTypeId': 'WorkEffortFacilityType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getWorkEffortPartiesAvailability(params) {
        let _params = { ...{ 'enumTypeId': 'WorkEffortPartyAvailability', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getWorkEffortPartyDelegateReasons(params) {
        let _params = { ...{ 'enumTypeId': 'WorkEffortPartyDelegateReason', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getWorkEffortPartyExpectations(params) {
        let _params = { ...{ 'enumTypeId': 'WorkEffortPartyExpectation', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getWorkEffortProductTypes(params) {
        let _params = { ...{ 'enumTypeId': 'WorkEffortProductType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getWorkEffortPurposes(params) {
        let _params = { ...{ 'enumTypeId': 'WorkEffortPurpose', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getWorkEffortResolutions(params) {
        let _params = { ...{ 'enumTypeId': 'WorkEffortResolution', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getWorkEffortTypes(params) {
        let _params = { ...{ 'enumTypeId': 'WorkEffortType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getWorkEffortVisibilities(params) {
        let _params = { ...{ 'enumTypeId': 'WorkEffortVisibility', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getWorkRequirementFulfillmentTypes(params) {
        let _params = { ...{ 'enumTypeId': 'WorkRequirementFulfillmentType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
    getWorkTypes(params) {
        let _params = { ...{ 'enumTypeId': 'WorkType', 'pageNoLimit': true }, ...params }; // merge all
        return this.getEnums(_params);
    }
}