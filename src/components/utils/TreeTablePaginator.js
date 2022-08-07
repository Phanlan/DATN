import React, {forwardRef} from 'react';
import { TreeTable } from 'primereact/treetable';
import { useTranslation } from 'react-i18next';

const TreeTableTemplate = (props, ref) => {
    const { t } = useTranslation('common');

    return (
        <TreeTable
            paginator
            {...props}
            ref={ref}
            rowsPerPageOptions={[5, 10, 20, 50, 100]}
            paginatorTemplate="RowsPerPageDropdown CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
            currentPageReportTemplate={t('datatable.currentPageReportTemplate')}
            emptyMessage={t('datatable.emptyMessage')}
        />
    );
}

export const TreeTablePaginator = forwardRef(TreeTableTemplate);
