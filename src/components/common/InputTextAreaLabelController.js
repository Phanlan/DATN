import React from 'react';
import { Controller } from 'react-hook-form';
import { InputTextarea } from 'primereact/inputtextarea';
import { classNames } from 'primereact/utils';

export const InputTextAreaLabelController = (props) => {
    
    const { id, label, checkErr, control, getFormErrorMessage, callback, disabled } = props;

    return (
        <div className="p-grid p-mt-3 p-fluid">
            <label htmlFor={id} className="p-col-12 p-mb-1 p-md-3 p-mb-md-0 p-mt-2">
                <b>{label}:</b>{checkErr && <span style={{ color: "red" }} >&nbsp;*</span>}
            </label>
            <div className="p-col-12 p-md-8">
                <Controller name={id} control={control} render={({ field, fieldState }) => (
                    <InputTextarea
                        className={checkErr && classNames({ 'p-invalid': fieldState.invalid })}
                        id={field.name}
                        name={field.name}
                        value={field.value}
                        onChange={(e) => {
                            field.onChange(e.target.value)
                            callback && callback(e);
                        }}
                        disabled={disabled}
                        {...props}
                    />
                )} />
                {checkErr && getFormErrorMessage(id)}
            </div>
        </div>
    );
};
