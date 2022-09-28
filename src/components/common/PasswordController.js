import React from 'react';
import { Controller } from 'react-hook-form';
// import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { Password } from 'primereact/password';
import {Divider} from 'primereact/divider';
import { useTranslation } from 'react-i18next';

export const PasswordController = (props) => {

    const { id, label, checkErr, control, getFormErrorMessage, callback , feedback  } = props;
    const {t} = useTranslation('common')
    const passwordHeader = <h6>{t('userAccount.pickAPassword')}</h6>;
    const passwordFooter = (
      <React.Fragment>
        <Divider />
        {/* <p className="p-mt-2">{t('userAccount.suggestions')}</p>
        <ul className="p-pl-2 p-ml-2 p-mt-0" style={{lineHeight: '1.5'}}>
          <li>{t('userAccount.atleastOneLowercase')}</li>
          <li>{t('userAccount.atLeastOneUppercase')}</li>
          <li>{t('userAccount.atLeastOneNumeric')}</li>
          <li>{t('userAccount.minimum8Characters')}</li>
          <li>{t('Mật khẩu ko được trùng với mật khẩu cũ')}</li>
        </ul> */}
      </React.Fragment>
    );

    return (
        <div className="p-field p-grid">
            <label htmlFor={id} className="p-col-12 p-mb-2 p-md-4 p-mb-md-0">
                {label}{checkErr && <span style={{ color: "red" }} >&nbsp;*</span>}
            </label>
            <div className="p-col-12 p-md-8">
                <Controller name={id} control={control} render={({ field, fieldState }) => (
                    <Password 
                    //    feedback={onFeedback}
                       feedback={feedback}
                       header={passwordHeader}
                       footer={passwordFooter}
                       toggleMask
                       className={checkErr && classNames({ 'p-invalid': fieldState.invalid })}
                        id={field.name}
                        name={field.name}
                        value={field.value}
                        onChange={(e) => {
                            field.onChange(e.target.value)
                            callback && callback(e);
                        }}
                        onInput={(e) => {
                            field.onChange(e.target.value)
                            callback && callback(e);
                        }}
                    />
                )} />
                {checkErr && getFormErrorMessage(id)}
            </div>
        </div>
    );
};
// export const PasswordController = (props) => {
//     const { id, label, checkErr, control, getFormErrorMessage, callback } = props;

//     return (
//         <div className="p-field p-grid">
//             <label htmlFor={id} className="p-col-12 p-mb-2 p-md-4 p-mb-md-0">
//                 {label}{checkErr && <span style={{ color: "red" }} >&nbsp;*</span>}
//             </label>
//             <div className="p-col-12 p-md-8">
//                 <Controller name={id} control={control} render={({ field, fieldState }) => (
//                     <InputText
//                         type="password"
//                         className={checkErr && classNames({ 'p-invalid': fieldState.invalid })}
//                         id={field.name}
//                         name={field.name}
//                         value={field.value}
//                         onChange={(e) => {
//                             field.onChange(e.target.value)
//                             callback && callback(e);
//                         }}
//                     />
//                 )} />
//                 {checkErr && getFormErrorMessage(id)}
//             </div>
//         </div>
//     );
// };
