import { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import {Toast} from 'primereact/toast';
import {Button} from 'primereact/button';
import UserService from './UserService';
import { Password } from 'primereact/password';
export const LogIn = () => {
    const history = useHistory();
    const [credential, setCredential] = useState({email: '', password: ''});
    const toast = useRef();

      const onLogin = async (e) => {
        e.preventDefault();
            const params = {
                email: credential.email,
                password: credential.password
            }
            await UserService.logIn(params).then((res) =>{
                if (res.status === 200) {
                    toast.current.show({
                        severity: 'success',
                        summary: 'Thông báo thành công',
                        detail: 'Đăng nhập thành công',
                        life: 3000,
                    });
                    history.push('/');
                }
            }).catch ((error) =>{
            toast.current.show({
                severity: 'error',
                summary: 'Thông báo lỗi',
                detail: 'Mật khẩu hoặc email sai',
                life: 3000,
            });
        })
    };

    return(
        <div className="pages-body login-page p-d-flex p-flex-column">
            
            <div className="p-as-center p-mt-auto p-mb-auto">
                <div className="pages-panel card p-d-flex p-flex-column">
                    <div className="pages-header p-px-3 p-py-1">
                        <h2>Đăng nhập</h2>
                    </div>

                    <h4>Chào mừng</h4>

                    <div className="pages-detail p-mb-6 p-px-6">Nhập tài khoản và mật khẩu để đăng nhập</div>
                    
                    <form id="loginForm" onSubmit={onLogin}>
                        <div className="input-panel p-d-flex p-flex-column p-px-3">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                <i className="pi pi-envelope"></i>
                                </span>
                                <span className="p-float-label">
                                <InputText
                                    name="email"
                                    type="text"
                                    id="email"
                                    onChange={(e) => setCredential({...credential, email: e.target.value})}
                                    value={credential.username}/>
                                <label htmlFor="inputgroup1">Tài khoản</label>
                                </span>
                            </div>

                            <div className="p-inputgroup p-mt-3 p-mb-6">
                                <span className="p-inputgroup-addon">
                                <i className="pi pi-lock"></i>
                                </span>
                                <span className="p-float-label">
                                <Password
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="off"
                                    onChange={(e) => setCredential({...credential, password: e.target.value})}
                                    value={credential.password}
                                    feedback={false}
                                    toggleMask 
                                />
                                <label htmlFor="inputgroup2">Mật khẩu</label>
                                </span>
                            </div>
                        </div>
                    </form>
                    <Toast ref={toast} />
                    <Button className="login-button p-mb-6 p-px-3" label="Đăng nhập" type="submit" form="loginForm"></Button>
                    <div className="m-t-20 m-b-20 ">
                        Bạn chưa đã có tài khoản ?
                        <Link className="nav-link" to='/signup'>&nbsp;Đăng ký</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}