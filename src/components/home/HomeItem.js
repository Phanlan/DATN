import React, {useCallback} from 'react';
import { useHistory } from 'react-router-dom';
import { Panel } from 'primereact/panel';
import { ListBox } from 'primereact/listbox';

export const HomeItem = (props) => {
    const {options, header} = props;
    const history = useHistory();
    const headerTemplate = <h5 style={{textAlign: 'center', paddingTop: '10px'}} >{header}</h5>

    const template = (option) => {
        return (
            <>
            <a
              href={`#/${option.code}`}
              style={{ color: "#000" }}
            > {option.name? <i className="pi pi-angle-right"></i>: ''}
              {option.name}
            </a>
            </>
        );
    }
    const open = useCallback(e => {
      history.push("/" + e.value.code);
    }, [history])
    
    return(
        <>
            <Panel headerTemplate = {headerTemplate}>
                <ListBox 
                options ={options}
                onChange={(e) => open(e)} 
                itemTemplate={template}
                optionLabel="name" style={{ border: 'none', fontSize: '14px'}}
                listStyle={{ height: '50px' }} />
            </Panel>
        </>
    )
}