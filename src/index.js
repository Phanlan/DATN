import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './AppWrapper';
import {HashRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'prismjs/themes/prism-coy.css';
import './i18n';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import {Provider} from 'react-redux';
import configureStore from './config/store/configureStore';

i18next.init({
  interpolation: {escapeValue: false}, // React already does escaping
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <Provider store={configureStore}>
      <HashRouter>
        <AppWrapper/>
      </HashRouter>
    </Provider>
  </I18nextProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
