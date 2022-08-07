import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export const Salary =() => {
    console.log('lam')
    return(
        <>
            <>
                <div className="card">
                    <DataTable responsiveLayout="scroll">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </div>
            </>
        </>
    )
}