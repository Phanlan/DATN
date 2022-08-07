import { ServiceHandle } from '../../utilities';
import Const from "../../utilities/Const";

export class InvoiceReceivableService {

    getInvoices(params) {
        return ServiceHandle.get(Const.API.Invoices_Acc, { params: params }).then(res => {
            return {
                invoiceList: res.data,
                totalRecords: res.headers['x-total-count']
            }
        });
    }

    getExtInvoices(params) {
        return ServiceHandle.get(Const.API.Invoices_Acc, { params: params }).then(res => {
            return {
                invoiceList: res.invoices,
                totalRecords: res.totalRecords
            }
        });
    }

    getInvoiceTypes() {
        return ServiceHandle.get(Const.API.Enumeration_Acc + "?enumTypeId=InvoiceType",{})
            .then(res => res.data);
    }

    getListPartyId() {
        return ServiceHandle.get(Const.API.Parties_Acc,{})
            .then(res => res.data);
    }

    getListProducts() {
        return ServiceHandle.get(Const.API.Products_Acc,{})
            .then(res => res.data);
    }
}
