import i18n from '../i18n';
import { Const, ServiceHandle } from '../utilities';

export class UomService {
    
    getUom(uomId) {
        return ServiceHandle.get(Const.API.Uoms + `/${uomId}`).then(res => {
            return res.data
        });
    }

    /**
     * 
     * @param {*} params 
     * @returns Page{uomList, totalRecords}
     */
    getUoms(params) {
        return ServiceHandle.get(Const.API.Uoms, { params: params }).then(res => {
            let _data=[...res.data]
            _data.map(item => {
                return (item.description = i18n.t(`uom:${item.uomTypeEnumId}.${item.uomId}`, item.description));
              });
              
            return {
                uomList: res.data,
                totalRecords: res.headers['x-total-count']
            }
        });
    }


    // add more overload for enum types
    getAreaMeasure(params) {
        let _params = { ...{ 'uomTypeEnumId': 'UT_AREA_MEASURE', 'pageNoLimit': true }, ...params }; // merge all
        return this.getUoms(_params);
    }
    getCurrencyMeasure(params) {
        let _params = { ...{ 'uomTypeEnumId': 'UT_CURRENCY_MEASURE', 'pageNoLimit': true }, ...params }; // merge all
        return this.getUoms(_params);
    }
    getDataMeasure(params) {
        let _params = { ...{ 'uomTypeEnumId': 'UT_DATA_MEASURE', 'pageNoLimit': true }, ...params }; // merge all
        return this.getUoms(_params);
    }
    getDataspdMeasure(params) {
        let _params = { ...{ 'uomTypeEnumId': 'UT_DATASPD_MEASURE', 'pageNoLimit': true }, ...params }; // merge all
        return this.getUoms(_params);
    }
    getDensityMeas(params) {
        let _params = { ...{ 'uomTypeEnumId': 'UT_DENSITY_MEAS', 'pageNoLimit': true }, ...params }; // merge all
        return this.getUoms(_params);
    }
    getEnergyMeasure(params) {
        let _params = { ...{ 'uomTypeEnumId': 'UT_ENERGY_MEASURE', 'pageNoLimit': true }, ...params }; // merge all
        return this.getUoms(_params);
    }
    getLengthMeasure(params) {
        let _params = { ...{ 'uomTypeEnumId': 'UT_LENGTH_MEASURE', 'pageNoLimit': true }, ...params }; // merge all
        return this.getUoms(_params);
    }
    getOtherMeasure(params) {
        let _params = { ...{ 'uomTypeEnumId': 'UT_OTHER_MEASURE', 'pageNoLimit': true }, ...params }; // merge all
        return this.getUoms(_params);
    }
    getPowerMeasure(params) {
        let _params = { ...{ 'uomTypeEnumId': 'UT_POWER_MEASURE', 'pageNoLimit': true }, ...params }; // merge all
        return this.getUoms(_params);
    }
    getPressureMeasure(params) {
        let _params = { ...{ 'uomTypeEnumId': 'UT_PRESSURE_MEASURE', 'pageNoLimit': true }, ...params }; // merge all
        return this.getUoms(_params);
    }
    getTempMeasure(params) {
        let _params = { ...{ 'uomTypeEnumId': 'UT_TEMP_MEASURE', 'pageNoLimit': true }, ...params }; // merge all
        return this.getUoms(_params);
    }
    getTimeFreqMeasure(params) {
        let _params = { ...{ 'uomTypeEnumId': 'UT_TIME_FREQ_MEASURE', 'pageNoLimit': true }, ...params }; // merge all
        return this.getUoms(_params);
    }
    getVelocityMeasure(params) {
        let _params = { ...{ 'uomTypeEnumId': 'UT_VELOCITY_MEASURE', 'pageNoLimit': true }, ...params }; // merge all
        return this.getUoms(_params);
    }
    getVolumeDryMeas(params) {
        let _params = { ...{ 'uomTypeEnumId': 'UT_VOLUME_DRY_MEAS', 'pageNoLimit': true }, ...params }; // merge all
        return this.getUoms(_params);
    }
    getVolumeLiqMeas(params) {
        let _params = { ...{ 'uomTypeEnumId': 'UT_VOLUME_LIQ_MEAS', 'pageNoLimit': true }, ...params }; // merge all
        return this.getUoms(_params);
    }
    getWeightMeasure(params) {
        let _params = { ...{ 'uomTypeEnumId': 'UT_WEIGHT_MEASURE', 'pageNoLimit': true }, ...params }; // merge all
        return this.getUoms(_params);
    } 
}