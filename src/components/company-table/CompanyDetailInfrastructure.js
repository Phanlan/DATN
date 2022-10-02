import { Column } from "primereact/column"
import { Toolbar } from "primereact/toolbar"
import { DataTable } from "../utils"

export const CompanyDetailInfrastructure = (props) => {
    const {infrastructureList} = props;

    const leftInfrastructureContents = (
        <>
            <h5 className='p-m-0'>Danh sách thiết bị công ty sử dụng</h5>
        </>
    );

    const linkTemplate = (data, props) => {
        return (
          <>
            <a
                href={`#/infrastructure-detail/${data["id"]}`}
                style={{ color: "#2196f3" }}
            >
                {data[props.field]}
            </a>
          </>
        );
    };
    return(
        <>
            <div className="card">
                <Toolbar left={leftInfrastructureContents}/>
                <DataTable value={infrastructureList}  key='id' scrollable rows={5} >
                    <Column field="name" header="Tên thiết bị" filter filterMatchMode="contains" body={linkTemplate} />
                    <Column field="quantityCompanyUse" header="SL công ty sử dụng" sortable/>
                    <Column field="type" header="Phân loại" filter filterMatchMode="contains" />
                    {/* <Column field="" body={actionTemplate} ></Column> */}
                </DataTable>
            </div>
        </>
    )
}