import React, {forwardRef} from 'react';
import { DataTable } from "primereact/datatable";
import { useTranslation } from 'react-i18next';

const DataTableNoPaninatorTemplate = (props, ref) => {
    const { t } = useTranslation('common');

    return (
        <DataTable
            {...props}
            ref={ref}
            currentPageReportTemplate={t('datatable.currentPageReportTemplate')}
            emptyMessage={t('datatable.emptyMessage')}
        />
    );
}

export const DataTableNoPaginator = forwardRef(DataTableNoPaninatorTemplate);
