import {
  Const,
  ServiceHandle
} from '../utilities';

export class SupplierService {
  getSuppliers(params) {
    const _params = {
      ...params
    };
    _params.roleTypeId = 'Supplier';
    return ServiceHandle.get(Const.API.Mantle.Parties + '/search', {
      params: _params
    }).then(res => {
      return {
        totalRecords: res.data.documentListCount,
        suppliers: res.data.documentList
      }
    });
  }

  createSupplier(params) {
    return ServiceHandle.post(Const.API.Purchasing.Suppliers, params).then((res) => res.data);
  }

  getESupplierProducts(params) {
    return ServiceHandle.get(Const.API.Purchasing.Suppliers + '/eProductPrices', {
      params: params
    }).then(res => {
      return {
        totalRecords: res.headers['x-total-count'],
        suppliers: res.data
      }
    });
  }

  getSupplierProducts(params) {
    return ServiceHandle.get(Const.API.Purchasing.Suppliers + '/productPrices', {
      params: params
    }).then(res => {
      return {
        totalRecords: res.data.totalRecords,
        suppliers: res.data.supplierProducts
      }
    });
  }

}