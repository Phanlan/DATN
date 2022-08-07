import {React, useState, useRef} from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {useHistory} from 'react-router-dom';

import {Toast} from 'primereact/toast';
import {Const, ServiceHandle} from '../utilities';

import authService from '../service/authService';

const Login = () => {
  const history = useHistory();
  const [credential, setCredential] = useState({username: '', password: ''});
  const toast = useRef();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    //const token = Buffer.from(`${credential.username}:${credential.password}`, 'utf8').toString('base64');

    ServiceHandle.post(Const.API.Login, {
      username: credential.username,
      password: credential.password,
    })
      .then((res) => {
        const apiKey = res.data.apiKey;
        if (apiKey) {
          // setHeader(apiKey);
          // dispatch(AuthenOverallRedux.Actions.setApiKey(apiKey));
          authService.saveApiKeyLocalStorage(apiKey);
          history.push('/');
        }
      })
      .catch((err) => {
        toast.current.show({
          severity: 'error',
          summary: 'Error Message',
          detail: err.response.data.errors,
          life: 3000,
        });
      });
  };

  return (
    <div className="pages-body login-page p-d-flex p-flex-column">
      <div className="topbar p-p-3 p-d-flex p-jc-between p-flex-row p-ai-center">
        <div className="topbar-left p-ml-3 p-d-flex">
          <div className="logo">
            <img src="images/logo_horizontal_transparent.png" alt="" />
          </div>
        </div>
      </div>

      <div className="p-as-center p-mt-auto p-mb-auto">
        <div className="pages-panel card p-d-flex p-flex-column">
          <div className="pages-header p-px-3 p-py-1">
            <h2>LOGIN</h2>
          </div>

          <h4>Welcome</h4>

          <div className="pages-detail p-mb-6 p-px-6">Please use the form to sign-in</div>
          <form onSubmit={handleLoginSubmit} id="loginForm">
            <div className="input-panel p-d-flex p-flex-column p-px-3">
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-envelope"></i>
                </span>
                <span className="p-float-label">
                  <InputText
                    name="username"
                    type="text"
                    id="username"
                    onChange={(e) => setCredential({...credential, username: e.target.value})}
                    value={credential.username}
                  />
                  <label htmlFor="inputgroup1">Username</label>
                </span>
              </div>

              <div className="p-inputgroup p-mt-3 p-mb-6">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-lock"></i>
                </span>
                <span className="p-float-label">
                  <InputText
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="off"
                    onChange={(e) => setCredential({...credential, password: e.target.value})}
                    value={credential.password}
                  />
                  <label htmlFor="inputgroup2">Password</label>
                </span>
              </div>
            </div>
          </form>
          <Toast ref={toast} />
          <Button className="login-button p-mb-6 p-px-3" label="LOGIN" type="submit" form="loginForm"></Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
