import { Const, ServiceHandle } from '../utilities';

export class GeoService {
    
    getGeo(geoId) {
        return ServiceHandle.get(Const.API.Geos + `/${geoId}`).then(res => {
            return res.data
        });
    }

    /**
     * 
     * @param {*} params 
     * @returns Page{geoList(geoId, geoName...), totalRecords}
     */
     getGeos(params) {
        return ServiceHandle.get(Const.API.Geos, { params: params }).then(res => {
            let _data=[...res.data]
            _data.map(item => {
                return (item.geoName =  (item.geoNameLocal? item.geoNameLocal: item.geoName));
              });
              
            return {
                geoList: res.data,
                totalRecords: res.headers['x-total-count']
            }
        });
    }

    /**
     * non paging
     */
    getGeoRegionList(geoId, params) {
        let _params = {...params, geoId};
        return ServiceHandle.get(Const.API.Geos + `/${geoId}/regions`, { params: _params }).then(res => {
            return res.data.resultList;
        });
    }

    getCountries(params) {
        let _params = { ...{ 'geoTypeEnumId': 'GEOT_COUNTRY', 'pageNoLimit': true }, ...params }; // merge all
        return this.getGeos(_params);
    }
}