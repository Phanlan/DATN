import { ServiceHandle } from '../../utilities';
import Const from "../../utilities/Const";

export class TimePeriodService {

    getTimePeriods() {
        return ServiceHandle.get(Const.API.TimePeriod_Acc,{})
            .then(res => res.data);
    }
}
