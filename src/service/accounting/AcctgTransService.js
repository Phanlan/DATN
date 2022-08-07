import { ServiceHandle } from '../../utilities';
import Const from "../../utilities/Const";

export class AcctgTransService {

    getAcctgTrans(params) {
        return ServiceHandle.get(Const.API.Trans, { params: params })
            //.then(res => res.data);
            .then(res => res);
    }

    getAcctgTransTypes() {
        return ServiceHandle.get(Const.API.Enumeration_Acc + "?enumTypeId=AcctgTransType",{})
            .then(res => res.data);
    }

    getListPartyId() {
        return ServiceHandle.get(Const.API.Parties_Acc + "?partyTypeEnumId=PtyPerson",{})
            .then(res => res.data);
    }

    getListCcy() {
        return ServiceHandle.get(Const.API.Uom_Acc + "?uomTypeEnumId=UT_CURRENCY_MEASURE",{})
            .then(res => res.data);
    }

    getListGlJournals() {
        return ServiceHandle.get(Const.API.ListGL_Acc,{})
            .then(res => res.data);
    }
}
