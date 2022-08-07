import React, {useContext, useRef, useState} from 'react';
import classNames from 'classnames';
import {useHistory} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import {getTokenCookie} from './TokenCookie';
import {Toast} from 'primereact/toast';
import MenuBreadcrumb from './components/MenuBreadcrumb';
import {UserProfileContext} from './App';
import {useTranslation} from 'react-i18next';
import {ShortcutHelp} from './components/ShortcutHelp';
import {Const, ServiceHandle} from './utilities';
import authService from './service/authService';

const AppTopbar = (props) => {
  const {t} = useTranslation('common');
  const history = useHistory();
  const toast = useRef();
  const userProfile = useContext(UserProfileContext);
  const [dialogHelp, setDialogHelp] = useState(false);

  const handleLogout = async (e) => {
    e.preventDefault();
    ServiceHandle.post(Const.API.Logout, {}, {headers: {moquiSessionToken: getTokenCookie()}})
      .then((res) => {
        authService.clearApiKeyLocalStorage();
        history.push('/login');
      })
      .catch((err) => {
        toast.current.show({severity: 'error', summary: 'Error Message', detail: 'logout error', life: 3000});
      });
  };

  const getModuleFeatures = () => {
    return props.menuModel[props.activeModuleIndex].items.map((feature) => {
      return {
        name: feature.label,
        label: feature.label,
        icon: feature.icon,
        url: `/`,
        level: feature.level,
      };
    });
  };

  return (
    <div className="layout-topbar p-shadow-4">
      <Toast ref={toast} />
      <div className="layout-topbar-left">
        <button
          type="button"
          style={{cursor: 'pointer'}}
          className="layout-topbar-logo p-link"
          onClick={() => history.push('/')}
        >
          <img
            id="app-logo"
            src="assets/layout/images/logo-light.svg"
            alt="ultima-layout"
            style={{height: '2.25rem'}}
          />
        </button>
        <button type="button" className="layout-menu-button p-shadow-6 p-link" onClick={props.onMenuButtonClick}>
          <i className="pi pi-chevron-right"></i>
        </button>
        <button type="button" className="layout-topbar-mobile-button p-link">
          <i className="pi pi-ellipsis-v fs-large" onClick={props.onMobileTopbarButtonClick}></i>
        </button>
      </div>

      <div className={classNames('layout-topbar-right', {'layout-topbar-mobile-active': props.mobileTopbarActive})}>
        <div className="layout-topbar-actions-left">
          <div className="p-d-flex">
            <div className="p-mr-2">
              <MenuBreadcrumb
                key="moduleMenu"
                model={props.moduleItems}
                setActiveIndex={props.setActiveModuleIndex}
                activeIndex={props.activeModuleIndex}
              />
            </div>
            <div className="p-mr-2">
              <MenuBreadcrumb
                key="featureMenu"
                model={getModuleFeatures()}
                setActiveIndex={props.setActiveModuleFeatureIndex}
                activeIndex={props.activeModuleFeatureIndex}
              />
            </div>
            {typeof props.menuModel[props.activeModuleIndex].items[props.activeModuleFeatureIndex] != 'undefined' &&
              typeof props.menuModel[props.activeModuleIndex].items[props.activeModuleFeatureIndex].items !=
                'undefined' && (
                <div className="p-mr-2">
                  <MenuBreadcrumb
                    key="featureMenu"
                    model={props.menuModel[props.activeModuleIndex].items[props.activeModuleFeatureIndex].items}
                    setActiveIndex={props.setActiveSubModuleFeatureIndex}
                    activeIndex={props.activeSubModuleFeatureIndex}
                  />
                </div>
              )}
          </div>
        </div>
        <div className="layout-topbar-actions-right">
          <ul className="layout-topbar-items">
            {props.menuModel[props.activeModuleIndex].label === 'POS' && (
              <li className="layout-topbar-item">
                <button className="layout-topbar-action rounded-circle p-link" onClick={() => setDialogHelp(true)}>
                  <span className="p-overlay-badge">
                    <i className="pi pi-question fs-large"></i>
                  </span>
                </button>
              </li>
            )}
            <li className="layout-topbar-item">{userProfile !== undefined && <div>{userProfile.info.username}</div>}</li>
            <li className="layout-topbar-item notifications">
              <button
                className="layout-topbar-action rounded-circle p-link"
                onClick={(event) => props.onTopbarItemClick({originalEvent: event, item: 'notifications'})}
              >
                <span className="p-overlay-badge">
                  <i className="pi pi-bell fs-large"></i>
                  <span className="p-badge p-badge-warning p-badge-dot"></span>
                </span>
              </button>

              <CSSTransition
                classNames="p-toggleable"
                timeout={{enter: 1000, exit: 450}}
                in={props.activeTopbarItem === 'notifications'}
                unmountOnExit
              >
                <ul className="layout-topbar-action-panel p-shadow-6 fadeInDown">
                  <li className="p-mb-3">
                    <span className="p-px-3 fs-small">
                      {t('topBar.youHave')} <b>4</b> {t('topBar.newNotifications')}
                    </span>
                  </li>
                  <li className="layout-topbar-action-item">
                    <div className="p-d-flex p-flex-row p-ai-center">
                      <img src="avatar-5.png" alt="" />
                      <div
                        className={classNames('p-d-flex p-flex-column', {'p-ml-3': !false, 'p-mr-3': false})}
                        style={{flexGrow: '1'}}
                      >
                        <div className="p-d-flex p-ai-center p-jc-between p-mb-1">
                          <span className="fs-small p-text-bold">Kế toán trưởng</span>
                          <small>42 {t('topBar.minutesAgo')}</small>
                        </div>
                        <span className="fs-small">Tạo mới hóa đơn xuất bán</span>
                      </div>
                    </div>
                  </li>
                  <li className="layout-topbar-action-item">
                    <div className="p-d-flex p-flex-row p-ai-center">
                      <img src="avatar-5.png" alt="" />
                      <div
                        className={classNames('p-d-flex p-flex-column', {'p-ml-3': !false, 'p-mr-3': false})}
                        style={{flexGrow: '1'}}
                      >
                        <div className="p-d-flex p-ai-center p-jc-between p-mb-1">
                          <span className="fs-small p-text-bold">Quản lý bán hàng</span>
                          <small>48 {t('topBar.minutesAgo')}</small>
                        </div>
                        <span className="fs-small">Tạo mới đơn hàng bán</span>
                      </div>
                    </div>
                  </li>
                  <li className="layout-topbar-action-item">
                    <div className="p-d-flex p-flex-row p-ai-center">
                      <img src="avatar-5.png" alt="" />
                      <div
                        className={classNames('p-d-flex p-flex-column', {'p-ml-3': !false, 'p-mr-3': false})}
                        style={{flexGrow: '1'}}
                      >
                        <div className="p-d-flex p-ai-center p-jc-between p-mb-1">
                          <span className="fs-small p-text-bold">Trưởng phòng Logistics</span>
                          <small>1 {t('topBar.hoursAgo')}</small>
                        </div>
                        <span className="fs-small">Tạo phiếu xuất kho</span>
                      </div>
                    </div>
                  </li>
                  <li className="layout-topbar-action-item">
                    <div className="p-d-flex p-flex-row p-ai-center">
                      <img src="avatar-5.png" alt="" />
                      <div
                        className={classNames('p-d-flex p-flex-column', {'p-ml-3': !false, 'p-mr-3': false})}
                        style={{flexGrow: '1'}}
                      >
                        <div className="p-d-flex p-ai-center p-jc-between p-mb-1">
                          <span className="fs-small p-text-bold">Kế toán thanh toán</span>
                          <small>4 {t('topBar.daysAgo')}</small>
                        </div>
                        <span className="fs-small">Lập phiếu thu tiền mặt</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </CSSTransition>
            </li>
            <li className="layout-topbar-item">
              <button className="layout-topbar-action rounded-circle p-link" onClick={handleLogout}>
                <span className="p-overlay-badge">
                  <i className="pi pi-power-off fs-large"></i>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <ShortcutHelp visible={dialogHelp} onHide={() => setDialogHelp(false)} />
    </div>
  );
};

export default AppTopbar;
