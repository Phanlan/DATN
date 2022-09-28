import React from 'react';
import { Controller } from 'react-hook-form';
import { InputNumber } from 'primereact/inputnumber';
import { classNames } from 'primereact/utils';

export const InputNumberController = (props) => {
    const { id, label, checkErr, control, getFormErrorMessage, callback } = props;

    return (
        <div className="p-field p-grid">
            <label htmlFor={id} className="p-col-12 p-mb-2 p-md-4 p-mb-md-0">
                {label}{checkErr && <span style={{ color: "red" }} >&nbsp;*</span>}
            </label>
            <div className="p-col-12 p-md-8">
                <Controller name={id} control={control} render={({ field, fieldState }) => (
                    <InputNumber
                        className={checkErr && classNames({ 'p-invalid': fieldState.invalid })}
                        id={field.name}
                        name={field.name}
                        value={field.value}
                        onValueChange={(e) => {
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
