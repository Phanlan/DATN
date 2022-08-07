import { ServiceHandle } from '../../utilities';
import Const from "../../utilities/Const";

export class ArInvoiceAgingService {

  getArInvoiceAging() {
    return ServiceHandle.get(Const.API.AgingInvoices_Acc,{})
      .then(res => res.data);
  }
}
