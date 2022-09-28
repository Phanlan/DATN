import React from 'react';
import { Controller } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Dropdown } from 'primereact/dropdown';

export const DropdownAddButtonController = (props) => {
    const { id, isRequired, label, checkErr, control, getFormErrorMessage, callback, handleClickButton } = props;

    return (
        <div className="p-field p-grid">
            <label htmlFor={id} className={classNames("p-col-12 p-mb-2 p-md-4 p-mb-md-0", {"required": isRequired})}>
                {label}
            </label>
            <div className="p-col-12 p-md-8">
                <div className="p-field p-grid" style={{width: '100%'}}>
                    <div className="p-col-12 p-md-11">
                        <Controller name={id} control={control} render={({ field, fieldState }) => (
                            <Dropdown
                                className={(checkErr || isRequired) && classNames({ 'p-invalid': fieldState.invalid })}
                                id={field.name}
                                name={field.name}
                                value={field.value}
                                onChange={(e) => {
                                    field.onChange(e.value);
                                    callback && callback(e);
                                }}
                                optionLabel="name"
                                {...props}
                            />
                        )} />
                        {(checkErr || isRequired) && getFormErrorMessage(id)}
                    </div>
                    <div className="p-col-12 p-md-1 p-mr-0">
                        <Button 
                            icon="pi pi-plus" 
                            className="p-button-outlined"
                            onClick={() => {handleClickButton && handleClickButton()}}
                            style={{height: '100%'}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
