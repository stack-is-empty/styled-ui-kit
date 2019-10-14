// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './test';
// import { globalConfig } from './components/globals/globalConfig';
import './style.css';
// globalConfig();

// ReactDOM.render(<App/>, document.getElementById('root'));

export { configTheme } from './components/Theme/utils';
export { withTheme } from 'styled-components';
export { default as Theme } from './components/Theme';
export { default as Tooltip } from './components/Tooltip';
export { FormRadio, FormCheckbox, FormInput, FormNumber } from './components/Form';
export { default as Form } from './components/Form';
export { default as Alert } from './components/Alert';
export { globalConfig } from './components/globals/globalConfig';
export { Button } from './components/Buttons';
export { themeDefault } from './constants/application';