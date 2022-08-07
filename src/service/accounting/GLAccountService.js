import { ServiceHandle } from '../../utilities';
import Const from "../../utilities/Const";

export class GLAccountService {

    getGLAccounts() {
        return ServiceHandle.get(Const.API.GLAccount_Acc,{})
            .then(res => {
                return {
                    glAccountList: res.data,
                    totalRecords: res.headers['x-total-count']
                }
            });
    }

}
