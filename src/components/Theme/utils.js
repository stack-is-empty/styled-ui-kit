import React from 'react';
import { themeDefault } from '../../constants/application';
  
  export const configTheme = (theme: Object) => {
    let themeConfigured = {...themeDefault, ...theme};
    return themeConfigured;
  }
  
  