import React, { useState } from 'react';

import classNames from 'classnames';
import { RadioButton } from 'primereact/radiobutton';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import {useTranslation} from "react-i18next";

const AppConfig = (props) => {
    const [active, setActive] = useState(false);

    const themes = [
        { name: 'indigo', color: '#2f8ee5' },
        { name: 'pink', color: '#E91E63' },
        { name: 'purple', color: '#9C27B0' },
        { name: 'deeppurple', color: '#673AB7' },
        { name: 'blue', color: '#2196F3' },
        { name: 'lightblue', color: '#03A9F4' },
        { name: 'cyan', color: '#00BCD4' },
        { name: 'teal', color: '#009688' },
        { name: 'green', color: '#4CAF50' },
        { name: 'lightgreen', color: '#8BC34A' },
        { name: 'lime', color: '#CDDC39' },
        { name: 'yellow', color: '#FFEB3B' },
        { name: 'amber', color: '#FFC107' },
        { name: 'orange', color: '#FF9800' },
        { name: 'deeporange', color: '#FF5722' },
        { name: 'brown', color: '#795548' },
        { name: 'bluegrey', color: '#607D8B' }
    ];

    const menuThemes = [
        { name: 'light', color: '#FDFEFF' },
        { name: 'dark', color: '#434B54' },
        { name: 'indigo', color: '#1A237E' },
        { name: 'bluegrey', color: '#37474F' },
        { name: 'brown', color: '#4E342E' },
        { name: 'cyan', color: '#006064' },
        { name: 'green', color: '#2E7D32' },
        { name: 'deeppurple', color: '#4527A0' },
        { name: 'deeporange', color: '#BF360C' },
        { name: 'pink', color: '#880E4F' },
        { name: 'purple', color: '#6A1B9A' },
        { name: 'teal', color: '#00695C' }
    ];

    const topbarThemes = [
        { name: 'lightblue', color: '#2E88FF' },
        { name: 'dark', color: '#363636' },
        { name: 'white', color: '#FDFEFF' },
        { name: 'blue', color: '#1565C0' },
        { name: 'deeppurple', color: '#4527A0' },
        { name: 'purple', color: '#6A1B9A' },
        { name: 'pink', color: '#AD1457' },
        { name: 'cyan', color: '#0097A7' },
        { name: 'teal', color: '#00796B' },
        { name: 'green', color: '#43A047' },
        { name: 'lightgreen', color: '#689F38' },
        { name: 'lime', color: '#AFB42B' },
        { name: 'yellow', color: '#FBC02D' },
        { name: 'amber', color: '#FFA000' },
        { name: 'orange', color: '#FB8C00' },
        { name: 'deeporange', color: '#D84315' },
        { name: 'brown', color: '#5D4037' },
        { name: 'grey', color: '#616161' },
        { name: 'bluegrey', color: '#546E7A' },
        { name: 'indigo', color: '#3F51B5' }
    ];
    const { t } = useTranslation('common');

    return (
        <>
            <Sidebar visible={active} onHide={() => setActive(false)} position={'right'} blockScroll={true} showCloseIcon={false} baseZIndex={1000} className="layout-config p-sidebar-sm fs-small p-p-0">

                <div className="layout-config-panel p-d-flex p-flex-column">
                    <div className="p-px-3 p-pt-3">
                        <h5>{t('theme.ThemeCustomization')}</h5>
                    </div>

                    <hr className="p-mb-0" />

                    <div className="layout-config-options p-p-3">

                        <h6>{t('theme.LayoutMode')}</h6>
                        <div className="p-d-flex">
                            <div className="p-d-flex p-ai-center">
                                <RadioButton id="light" name="darkMenu" value="light" checked={props.colorMode === 'light'} onChange={(e) => props.onColorModeChange(e.value)} />
                                <label htmlFor="light" className={classNames({ 'p-ml-2': !false, 'p-mr-2': false })}>{t('theme.Light')}</label>
                            </div>
                            <div className={classNames('p-d-flex p-ai-center', { 'p-ml-4': !false, 'p-mr-4': false })}>
                                <RadioButton id="dark" name="darkMenu" value="dark" checked={props.colorMode === 'dark'} onChange={(e) => props.onColorModeChange(e.value)}  />
                                <label htmlFor="dark" className={classNames({ 'p-ml-2': !false, 'p-mr-2': false })}>{t('theme.Dark')}</label>
                            </div>
                        </div>

                        <h6>{t('theme.MenuThemes')}</h6>
                        {props.colorMode !== 'dark' && <div className="p-grid">
                            {
                                menuThemes.map((t, i) => {
                                    return <div key={i} className="p-col p-col-fixed">
                                        <button type="button" style={{ cursor: 'pointer' }} onClick={() => props.onMenuThemeChange(t.name)} className="layout-config-color-option p-link" title={t.name} >
                                            <span className="color" style={{ backgroundColor: t.color }}></span>
                                            {props.menuTheme === t.name && <span className="check p-d-flex p-ai-center p-jc-center">
                                                <i className="pi pi-check" style={{ color: 'var(--menu-text-color)' }}></i>
                                            </span>}
                                        </button>
                                    </div>
                                })
                            }
                        </div>}
                        {props.colorMode === 'dark' && <p>{t('theme.Note')}</p>}

                        <h6>{t('theme.TopbarThemes')}</h6>
                        <div className="p-grid">
                            {
                                topbarThemes.map((t, i) => {
                                    return <div key={i} className="p-col p-col-fixed">
                                        <button type="button" style={{ cursor: 'pointer' }} onClick={() => props.onTopbarThemeChange(t.name)} className="layout-config-color-option p-link" title={t.name} >
                                            <span className="color" style={{ backgroundColor: t.color }}></span>
                                            {props.topbarTheme === t.name && <span className="check p-d-flex p-ai-center p-jc-center">
                                                <i className="pi pi-check" style={{ color: 'var(--topbar-text-color)' }} ></i>
                                            </span>}
                                        </button>
                                    </div>
                                })
                            }
                        </div>

                        <h6>{t('theme.ComponentThemes')}</h6>
                        <div className="p-grid">
                            {
                                themes.map((t, i) => {
                                    return <div key={i} className="p-col p-col-fixed">
                                        <button type="button" style={{ cursor: 'pointer' }} onClick={() => props.onThemeChange(t.name)} className="layout-config-color-option p-link" title={t.name} >
                                            <span className="color" style={{ backgroundColor: t.color }}></span>
                                            {props.theme === t.name && <span className="check p-d-flex p-ai-center p-jc-center">
                                                <i className="pi pi-check" style={{ color: 'var(--primary-color-text)' }}></i>
                                            </span>}
                                        </button>
                                    </div>
                                })
                            }
                        </div>

                    </div>
                </div>
            </Sidebar>
            {!active && <Button className="layout-config-button" icon="pi pi-cog p-button-icon" type="button" onClick={() => setActive(true)}></Button>}
        </>
    );

}

export default AppConfig;