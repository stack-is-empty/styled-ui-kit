var _templateObject = _taggedTemplateLiteral(['\nbody {\n  margin: 0;\n  color: #111315 !important;\n  height: 100%;\n}\n html {\n  margin: 0;\n  height: 100%;\n}\n'], ['\nbody {\n  margin: 0;\n  color: #111315 !important;\n  height: 100%;\n}\n html {\n  margin: 0;\n  height: 100%;\n}\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import { injectGlobal } from 'styled-components';

export var globalConfig = function globalConfig() {
  return injectGlobal(_templateObject);
};