import React from 'react';
import { themeDefault } from '../../constants/application';

export var configTheme = function configTheme(theme) {
  var themeConfigured = Object.assign({}, themeDefault, theme);
  return themeConfigured;
};