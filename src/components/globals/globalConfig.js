//@flow
import React from 'react';
import { injectGlobal } from 'styled-components';

export const globalConfig = () => injectGlobal`
body {
  margin: 0;
  color: #111315 !important;
  height: 100%;
}
 html {
  margin: 0;
  height: 100%;
}
`;