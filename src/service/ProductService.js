import { Const, ServiceHandle } from '../utilities';

export class ProductService {
    getCategoryListRollup(params) {
        return ServiceHandle.get(Const.API.GetCategoryListRollup,{params: params}).then((res) => res.data);
    }

    getProductPrice(params) {
        return ServiceHandle.get(Const.API.GetProductPrice,{params: params}).then((res) => res.data);
    }

    getProductDimensions(params) {
        return ServiceHandle.get(Const.API.GetProductDimensions,{params: params}).then((res) => res.data);
    }

    getAllProducts(params) {
        return ServiceHandle.get(Const.API.getProducts,{params: params}).then((res) => res.data);
    }

    getProductDetail(params) {
        return ServiceHandle.get(Const.API.GetProductDetail,{ params: params})
            .then(res => res.data.data);
    }

    getCategoryList(params) {
        return ServiceHandle.get(Const.API.GetCategoryList,{params: params}).then((res) => res.data);
    }

    getProductCategoryList(params) {
      return ServiceHandle.get(Const.API.GetProductCategoryList,{params: params}).then((res) => res.data);
    }

    createProductAdvance(params){
      return ServiceHandle.post(Const.API.CreateProductAdvance, params).then((res) => res.data);
    }

    
    /**
     * ProductStore detail
     * @param {*} productStore 
     * @returns 
     */
    getProductStore(productStoreId) {
        return ServiceHandle.get(Const.API.Mantle.Products + `/stores/${productStoreId}`).then(res => {
            return res.data
        });
    }

    /**
     * ProductStore list
     * @param {*} params 
     * @returns Page{shipmentList, totalRecords}
     */
     getProductStores(params) {
        return ServiceHandle.get(Const.API.Logistic.Products + `/stores`, {params}).then((res) => {
          return {
            productStoreList: res.data,
            totalRecords: res.headers['x-total-count']
          };
        });
      }

}