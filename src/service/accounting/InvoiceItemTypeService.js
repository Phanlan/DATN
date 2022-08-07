import { ServiceHandle } from '../../utilities';
import Const from "../../utilities/Const";

export class InvoiceItemTypeService {

    getInvoiceItemTypes() {
        return ServiceHandle.get(Const.API.Enumeration_Acc + "?enumTypeId=ItemType",{})
            .then(res => res.data);
    }
}
