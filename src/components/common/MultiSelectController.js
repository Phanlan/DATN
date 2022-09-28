import React from 'react';
import { Controller } from 'react-hook-form';
import { MultiSelect } from 'primereact/multiselect';
import { classNames } from 'primereact/utils';

export const MultiSelectController = (props) => {
    const { id, label, checkErr, control, getFormErrorMessage } = props;

    return (
        <div className="p-field p-grid">
            <label htmlFor={id} className={classNames("p-col-12 p-mb-2 p-md-4 p-mb-md-0", { "required": checkErr })}>
                {label}
            </label>
            <div className="p-col-12 p-md-8">
                <Controller name={id} control={control} render={({ field, fieldState }) => (
                    <MultiSelect
                        id={field.name}
                        name={field.name}
                        value={field.value}
                        onChange={(e) => field.onChange(e.value)}
                        optionLabel="name"
                        className={checkErr && classNames({ 'p-invalid': fieldState.invalid })}
                        {...props}
                    />
                )} />
                {checkErr && getFormErrorMessage(id)}
            </div>
        </div>
    );
};
