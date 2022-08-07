import { Const, ServiceHandle } from '../utilities';

export class PromotionService {

    getPromotionFromProductId(params) {
        return ServiceHandle.get(Const.API.GetPromotionFromProductId, { params: params })
            .then(res => res.data);
    }

    expiredPromotion(params) {
        return ServiceHandle.post(Const.API.ExpiredPromotion, params)
            .then(res => res.data);
    }

    getListServiceRegister(params) {
        return ServiceHandle.get(Const.API.GetListServiceRegister, { params: params })
            .then(res => res.data);
    }

    getListPartyClassification(params) {
        return ServiceHandle.get(Const.API.GetListPartyClassification, { params: params })
        .then(res => res.data);
    }

    createPromotion(params) {
        return ServiceHandle.post(Const.API.CreatePromotion, params)
        .then(res => res.data);
    }
}