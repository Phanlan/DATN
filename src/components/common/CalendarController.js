import React from 'react';
import { Controller } from 'react-hook-form';
import { Calendar } from 'primereact/calendar';
import { classNames } from 'primereact/utils';

export const CalendarController = (props) => {
    const { id, label, checkErr, control, getFormErrorMessage, callback, disabledRequired } = props;

    return (
        <div className="p-field p-grid">
            <label htmlFor={id} className={classNames("p-col-12 p-mb-2 p-md-4 p-mb-md-0", { "required": checkErr && !disabledRequired})}>
                {label}
            </label>
            <div className="p-col-12 p-md-8">
                <Controller name={id} control={control} render={({ field, fieldState }) => (
                    <Calendar
                        className={checkErr && classNames({ 'p-invalid': fieldState.invalid })}
                        inputId={field.name}
                        name={field.name}
                        value={field.value}
                        onChange={(e) => {
                            field.onChange(e.value);
                            callback && callback(e);
                        }}
                        {...props}
                    />
                )} />
                {checkErr && getFormErrorMessage(id)}
            </div>
        </div>
    );
};
