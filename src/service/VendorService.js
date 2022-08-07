
import { Const, ServiceHandle } from "../utilities";

export class VendorService {

    getStoreOrg(params) {
        return ServiceHandle.get(Const.API.GetStoreOrg,{ params: params}).then(res => {
            return res.data.data
        });
    }

}
