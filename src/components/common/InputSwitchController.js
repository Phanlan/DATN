import React from 'react';
import { Controller } from 'react-hook-form';
import {InputSwitch} from 'primereact/inputswitch';

export const InputSwitchController = (props) => {
    const { id, label, control, callback, ...rest } = props;

    return (
        <div className="p-field p-grid">
            <label htmlFor={id} className="p-col-12 p-mb-2 p-md-4 p-mb-md-0">
                {label}
            </label>
            <div className="p-col-12 p-md-8">
                <Controller name={id} control={control} render={({ field }) => (
                    <InputSwitch
                        id={field.name}
                        name={field.name}
                        checked={field.value}
                        onChange={(e) => {
                            field.onChange(e.value);
                            callback && callback(e);
                        }}
                        {...rest}
                    />
                )} />
            </div>
        </div>
    );
};
