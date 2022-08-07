import React from 'react'
import { Dropdown } from 'primereact/dropdown'
import { useTranslation } from "react-i18next"
import { Calendar } from 'primereact/calendar'
import { PropTypes } from 'prop-types'

export const monthNavigatorTemplate = (e={value:'', options:[], onChange:()=>{}}) => (
    <Dropdown
        value={e.value}
        options={e.options}
        onChange={(event) => e.onChange(event.originalEvent, event.value)}
        style={{ lineHeight: 1 }}
    />
);

export const yearNavigatorTemplate = (e={value:'', options:[], onChange:()=>{}}) => (
    <Dropdown
        value={e.value}
        options={e.options}
        onChange={(event) => e.onChange(event.originalEvent, event.value)}
        className="p-ml-2"
        style={{ lineHeight: 1 }}
    />
);

export const DateRangeFilter = (props) => {
    const {id, value, onChange, ...rest} = props
    const { i18n } = useTranslation()
    return (
        <Calendar
            id={id}
            style={{width: '100%'}}
            selectionMode="range"
            readOnlyInput
            value={value}
            onChange={onChange}
            placeholder=""
            locale={i18n.language}
            monthNavigator
            yearNavigator
            showButtonBar
            yearRange="2020:2030"
            monthNavigatorTemplate={monthNavigatorTemplate}
            yearNavigatorTemplate={yearNavigatorTemplate}
            {...rest}
        />
    )
}

DateRangeFilter.propTypes  = {
    id: PropTypes.string.isRequired,
    value: PropTypes.array,
    onChange: PropTypes.func.isRequired
}

DateRangeFilter.defaultProps  = {
    onChange: () => {},
    value: null,
    id: ''
}

