import React, { useContext} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputTextController } from "../components/common/InputTextController";
import { PasswordController } from "../components/common/PasswordController"
import { CalendarController } from '../components/common/CalendarController';
import { Button } from 'primereact/button';
import { Link, useHistory } from 'react-router-dom';
import UserService from '../components/LogIn/UserService';
import { ToastContext } from '../App';

export const Signup = () => {
    const msgError = 'Trường bắt buộc';
    const toast = useContext(ToastContext);
    const history = useHistory();

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name]?.message}</small>
    };

    const defaultValues = {
        full_name: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        birthday: null,
        phone: ''
    };

    const schema = yup.object().shape({
        full_name: yup.string().required(msgError),
        email: yup.string().required(msgError),
        password: yup.string().required(msgError),
        confirmPassword: yup.string().required(msgError),
        address: yup.string().nullable(msgError),
        birthday: yup.date().nullable(),
    });
    const { control, formState: { errors, isSubmitting }, handleSubmit} = useForm({ defaultValues, resolver: yupResolver(schema) });

    const onSignUp = async (data) => {
        try {
            const result = await UserService.signUp(data);
            if (result.status === 200) {
                toast.current?.show({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'Đăng ký thành công',
                    life: 3000,
                });
                history.push('/login')
            }
        } catch (error) {
            if (error.response) {
                toast.current?.show({
                    severity: 'error',
                    summary: 'Thông báo lỗi',
                    detail: error.response.data,
                    life: 3000,
                });
            } else {
                toast.current?.show({
                    severity: 'error',
                    summary: 'Thông báo lỗi',
                    detail: 'Đăng ký thất bại, thử lại',
                    life: 3000,
                });
            }
        }
      };
    return(
        <>
            <form>
                <div className="p-fluid">
                    <div className="p-grid">
                        <div className="p-col-12 p-md-6">
                            <InputTextController id='email' label='Email'
                                checkErr getFormErrorMessage={getFormErrorMessage}
                                control={control} 
                            />
                            <PasswordController id='password' label='Mật khẩu' checkErr type="password"
                                control={control} getFormErrorMessage={getFormErrorMessage} feedback={false}
                            />
                            <PasswordController id='confirmPassword' label='Nhập lại mật khẩu' checkErr type="password"
                                control={control} getFormErrorMessage={getFormErrorMessage} feedback={false}
                            />
                            
                        </div>
                        <div className="p-col-12 p-md-6">
                            <InputTextController id='full_name' label='Họ và tên'
                                checkErr getFormErrorMessage={getFormErrorMessage}
                                control={control} 
                            />
                            <InputTextController id='phone' label='Số điện thoại'
                                control={control} 
                            />
                            <CalendarController 
                                id='birthday' label='Ngày sinh'
                                checkErr getFormErrorMessage={getFormErrorMessage}
                                showIcon control={control} monthNavigator 
                                yearNavigator yearRange="1940:2022"
                            />
                            <InputTextController id='address' label='Địa chỉ'
                                control={control} 
                            />
                        </div>
                    </div>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-5"></div>
                        <div className="p-col-12 p-md-2">
                            <Button label="Lưu" icon="pi pi-check" disabled={isSubmitting}
                                onClick={handleSubmit(onSignUp)}
                            />
                        </div>
                        <div className="p-col-12 p-md-5"></div>
                    </div>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-5"></div>
                        <div className="p-col-12 p-md-3">
                            <div className="p-grid" style={{alignItems: 'center'}}>
                                Bạn chưa đã có tài khoản ?
                                <Link className="nav-link" to='/login'>&nbsp;Đăng nhập</Link>
                            </div>
                            
                        </div>
                        <div className="p-col-12 p-md-4"></div>
                    </div>
                </div>
            </form>
        </>
    )
}
