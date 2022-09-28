import React, { useState, useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'primereact/button';
import { AutoComplete } from 'primereact/autocomplete';
import { InputNumber } from 'primereact/inputnumber';

import { CommonService } from '../../service/CommonService'; 

import { ToastContext } from "../../App";

export const ComboPromotionElement = (props) => {
    const [t] = useTranslation('common');
    const toast = useContext(ToastContext);

    const { deleteCondition, id, productIds, setProductIds, productQuantitys, setProductQuantitys, quantityUoms } = props;
    const [productIdFiltered, setProductIdFiltered] = useState([]);

    const searchProduct = useCallback(async event => {
        let commonService = new CommonService();
        try {
            let data = await commonService.quickSearch('MonteProduct', `*${event.query}*`);

            let documentList = data.documentList.filter(elm => elm.productTypeEnumId === 'PtAsset');
            documentList = documentList.filter(elm => !['PRD_TAX_0', 'PRD_TAX_5', 'PRD_TAX_8', 'PRD_TAX_10', 'PRD_TAX_KCT'].includes(elm.productId));
            let documents = [];
            documentList.forEach(doc => {
                doc?.packingConfigs?.forEach(elm => {
                    documents.push({
                        ...doc,
                        quantityUomId: elm.fromUomId
                    })
                });
                doc?.quantityUomId && documents.push({
                    ...doc,
                    quantityUomId: doc?.quantityUomId
                })
            });
            setProductIdFiltered(documents.map((document) => {
                return { 
                    name: `${document.pseudoId} :: ${document.name} (${quantityUoms[document?.quantityUomId] ? quantityUoms[document?.quantityUomId] : "No Packing"})`,
                    code: document.productId,
                    quantityUomId: document?.quantityUomId ? document?.quantityUomId : ''
                };
            }));
        } catch (error) {
            toast.current.show({ severity: 'error', summary: 'Error Message', detail: error, life: 5000 });
        }
    }, [toast, quantityUoms]);
    
    return (
        <div className="card p-fluid">
            <div className="p-grid" style={{ marginRight: "-2rem", marginTop: "-1.5rem" }}>
                <div className="p-col-12 p-md-11"></div>
                <div className="p-col-12 p-md-1">
                    <Button icon="pi pi-times" className="p-button p-component p-button-rounded p-button-danger p-button-text p-mr-2 p-mb-2 p-button-icon-only"
                        onClick={(e) => deleteCondition(id)} />
                </div>
            </div>

            <div className="p-field p-grid">
                <label htmlFor={id} className="p-col-12 p-mb-2 p-md-4 p-mb-md-0">
                    {t('product.label')} <span style={{ color: "red" }} >&nbsp;*</span>
                </label>
                <div className="p-col-12 p-md-8">
                    <AutoComplete
                        id={'productIds' + id}
                        field="name"
                        placeholder={t('search')}
                        suggestions={productIdFiltered}
                        dropdown
                        completeMethod={searchProduct}
                        value={productIds[id]}
                        onChange={(e) => {
                            let _productIds = [...productIds]
                            _productIds[id] = e.value;
                            setProductIds(_productIds);
                        }}
                    />
                </div>
            </div>

            <div className="p-field p-grid">
                <label htmlFor={id} className="p-col-12 p-mb-2 p-md-4 p-mb-md-0">
                    {t('promotion.productQuantity')} <span style={{ color: "red" }} >&nbsp;*</span>
                </label>
                <div className="p-col-12 p-md-8">
                    <InputNumber
                        id={'productQuantitys' + id}
                        name={'productQuantitys' + id}
                        value={productQuantitys[id]}
                        onChange={(e) => {
                            let newProductQuantitys = [...productQuantitys];
                            newProductQuantitys[id] = e.value;
                            setProductQuantitys(newProductQuantitys);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}