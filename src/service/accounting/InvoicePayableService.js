import { ServiceHandle } from '../../utilities';
import Const from "../../utilities/Const";

export class InvoicePayableService {

    getInvoices() {
        let params = {
            fromPartyId: 'ORG_ZIZI_CORP'
        }
        return ServiceHandle.get(Const.API.InvoiceFindView_Acc,{params: params})
            .then(res => res.data);
    }

    getInvoicesPayable() {
        let params = {
            toPartyId: 'ORG_ZIZI_CORP'
        }
        return ServiceHandle.get(Const.API.InvoiceFindView_Acc,{params: params})
            .then(res => res.data);
    }

    getInvoiceTypes() {
        return ServiceHandle.get(Const.API.Enumeration_Acc + "?enumTypeId=InvoiceType",{})
            .then(res => res.data);
    }

    getListPartyId() {
        return ServiceHandle.get(Const.API.Parties_Acc,{})
            .then(res => res.data);
    }
}
