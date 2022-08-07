import React, {forwardRef} from 'react';
import { DataTable } from "primereact/datatable";
import { useTranslation } from 'react-i18next';

const DataTableTemplate = (props, ref) => {
    const { t } = useTranslation('common');

    return (
        <DataTable
            rowsPerPageOptions={[5, 10, 20, 50, 100]}
            {...props}
            ref={ref}
            paginator
            paginatorTemplate="RowsPerPageDropdown CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
            currentPageReportTemplate={t('datatable.currentPageReportTemplate')}
            emptyMessage={t('datatable.emptyMessage')}
        />
    );
}

export const DataTablePaginator = forwardRef(DataTableTemplate);
