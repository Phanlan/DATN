import React from 'react';
import { Controller } from 'react-hook-form';
import { Button } from 'primereact/button';
import { AutoComplete } from 'primereact/autocomplete';
import { classNames } from 'primereact/utils';

export const AutoCompleteButtonAddController = (props) => {
    const { id, label, checkErr, isRequired, control, getFormErrorMessage, callback, onlyCode, handleClickButton } = props;

    return (
        <div className="p-field p-grid">
            <label htmlFor={id} className={classNames("p-col-12 p-mb-2 p-md-4 p-mb-md-0", {"required": isRequired})}>
                {label}
            </label>
            <div className="p-col-12 p-md-8">
                <div className="p-field p-grid">
                    <div className="p-col-12 p-md-10">
                        <Controller name={id} control={control} render={({ field, fieldState }) => (
                            <AutoComplete
                                className={(checkErr || isRequired) && classNames({ 'p-invalid': fieldState.invalid })}
                                id={field.name}
                                name={field.name}
                                value={field.value}
                                onChange={(e) => {
                                    !onlyCode && field.onChange(e.value); 
                                    onlyCode && field.onChange(e.value.code); 
                                    if(callback) callback(e);
                                }}
                                {...props}
                            />
                        )} />
                        {(checkErr || isRequired) && getFormErrorMessage(id)}
                    </div>
                    <div className="p-col-12 p-md-2 p-mr-0">
                        <Button 
                            icon="pi pi-plus" 
                            className="p-button-outlined"
                            onClick={() => {handleClickButton && handleClickButton()}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
