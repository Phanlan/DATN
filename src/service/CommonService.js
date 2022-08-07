import { Const, ServiceHandle } from '../utilities';

export class CommonService {

    quickSearch(documentType, queryString){
        return ServiceHandle.get(Const.API.QuickSearch,{params:{documentType:documentType,queryString:queryString}})
            .then(res => res.data);
    }
    
    getUserGroupMember(partyId){
        return ServiceHandle.get(Const.API.GetUserGroupMember,{params:{partyId:partyId}})
        .then(res => res.data);
    }

    getProductStores(partyId){
        return ServiceHandle.get(Const.API.GetProductStores,{params:{partyId:partyId}})
        .then(res => res.data);
    }
    getEnumeration(params) {
        return ServiceHandle.get(Const.API.GetEnumeration,{params : params}).then(res => res.data);
    }

    /**
     * Get data from user_group table
     * @param {*} groupTypeEnumId 
     * @returns [{userGroupId, description}, ...]
     */
    getUserGroupList(groupTypeEnumId) {
        let params = {
            groupTypeEnumId: groupTypeEnumId
        }

        return ServiceHandle.get(Const.API.GetUserGroupList,{params : params}).then(res => {
            let groups = res.data.userGroups;

            let data = [];
            groups.forEach(e => {
                data.push({
                    userGroupId: e.userGroupId,
                    description: e.description
                })
            });

            return data;
        });
    }
}