import { Const, ServiceHandle } from '../utilities';

export class OrganizationService {

    getOrganization(params) {
        return ServiceHandle.get(Const.API.GetOrganization, { params: params })
            .then(res => res.data);
    }
}