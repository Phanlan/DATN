import React from 'react'
import { Dropdown } from 'primereact/dropdown'
import { PropTypes } from 'prop-types'

export const DropdownFilter = (props) => {
    const {value, options, onChange, ...rest} = props
    return (
        <Dropdown 
            value={value} 
            options={options} 
            optionLabel="name" 
            optionValue="value" 
            onChange={onChange}  
            className="p-column-filter" 
            showClear 
            filter 
            filterBy="name"
            style={{width:'100%'}}
            {...rest}
        />
    )
}

DropdownFilter.propTypes = {
    value: PropTypes.any,
    options: PropTypes.array,
    onChange: PropTypes.func.isRequired
}

DropdownFilter.defaultProps = {
    onChange: () => {},
    value: null,
    options: []
}