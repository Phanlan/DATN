import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'primereact/button';

import { ComboPromotionElement } from './ComboPromotionElement';

export const ComboPromotion = (props) => {
    const [t] = useTranslation('common');
    const { quantityUoms, productIds, setProductIds, productQuantitys, setProductQuantitys, conditions, setConditions } = props;

    useEffect(() => {

    },[conditions])

    const addNewCondition = (e) => {
        let oldConditions = [...conditions]
        let newValue = oldConditions[oldConditions.length - 1] + 1;
        setConditions([...conditions, newValue]);
    }

    const deleteCondition = (id) => {
        let newConditions = [...conditions];

        var index = newConditions.indexOf(id);
        if (index > -1) {
            newConditions.splice(index, 1);
            setConditions(newConditions);

            let newProductQuantitys = [...productQuantitys];
            newProductQuantitys[id] = -1;
            setProductQuantitys(newProductQuantitys);
        }
    }
console.log(conditions)
    return (
        <>
            <div className="p-grid">
                <div className="p-col-12 p-md-9"></div>
                <div className="p-col-12 p-md-3">
                    <Button label={t('promotion.addNewCondition')} icon="pi pi-plus" className="p-button-primary p-mr-2 p-mb-2"
                        onClick={(e) => addNewCondition(e)} />
                </div>
            </div>
            { conditions && conditions.map((elm, index) => {
                    return (
                        <ComboPromotionElement key={index} id={elm} deleteCondition={deleteCondition}
                            productIds={productIds} setProductIds={setProductIds} quantityUoms={quantityUoms}
                            productQuantitys={productQuantitys} setProductQuantitys={setProductQuantitys} />
                    );
                })
            }
        </>
    );
}