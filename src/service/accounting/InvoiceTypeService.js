import { ServiceHandle } from '../../utilities';
import Const from "../../utilities/Const";

export class InvoiceTypeService {

    getInvoiceTypes() {
        return ServiceHandle.get(Const.API.Enumeration_Acc + "?enumTypeId=InvoiceType",{})
            .then(res => res.data);
    }
}
