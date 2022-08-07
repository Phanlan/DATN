import { ServiceHandle } from '../../utilities';
import Const from "../../utilities/Const";

export class PaymentInService {

    getPayments(params) {
        return ServiceHandle.get(Const.API.Payments_Acc,{ params: params })
            .then(res => {
                return {
                    paymentList: res.data,
                    totalRecords: res.headers['x-total-count']
                }
            });
    }

    getPaymentTypes() {
        return ServiceHandle.get(Const.API.Enumeration_Acc + "?enumTypeId=PaymentType",{})
            .then(res => res.data);
    }

    getListPartyIdFrom() {
        return ServiceHandle.get(Const.API.Parties_Acc + "?roleTypeId!=OrgInternal",{})
            .then(res => res.data);
    }

    getListPartyIdTo() {
        return ServiceHandle.get(Const.API.Parties_Acc + "?roleTypeId=OrgInternal",{})
            .then(res => res.data);
    }
}
