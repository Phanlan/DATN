import { ServiceHandle } from '../../utilities';
import Const from "../../utilities/Const";

export class APInvoiceAgingService {

  // getAPInvoiceAging() {
  //   return ServiceHandle.get(Const.API.AgingInvoices_Acc,{})
  //     .then(res => res.data);
  // }

  getAPInvoiceAging() {
    return ServiceHandle.get(Const.API.AgingInvoices_Acc,{})
        .then(res => {
          return {
            invoiceList: res.data,
            totalRecords: res.headers['x-total-count']
          }
        });
  }

}
