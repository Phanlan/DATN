import React, {forwardRef} from 'react';
import { DataTable } from "primereact/datatable";

const DataTableTemplate = (props, ref) => {

    return (
        <DataTable
            rowsPerPageOptions={[5, 10, 20, 50, 100]}
            {...props}
            ref={ref}
            paginator
            paginatorTemplate="RowsPerPageDropdown CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
            currentPageReportTemplate='Hiển thị {first} - {last} trên {totalRecords}'
            emptyMessage='Chưa có dữ liệu'
        />
    );
}

export const DataTablePaginator = forwardRef(DataTableTemplate);
