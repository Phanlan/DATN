import { ServiceHandle } from '../../utilities';
import Const from "../../utilities/Const";

export class NewARInvoiceService {

    // getPartyWithDesc() {
    //     return ServiceHandle.get(Const.API.PartiesWithDesc,{})
    //         .then(res => res.data);
    // }

    saveAll(params){
        return ServiceHandle.post(Const.API.Invoices_Acc, params)
            .then(res => res);
    }

    // POST http://localhost:8080/rest/s1/mantle/invoices/100051/items
    saveInvoiceItems(params, invoiceId){
        return ServiceHandle.post(Const.API.Invoices_Acc + "/" + invoiceId + "/items", params)
          .then(res => res);
    }

}
