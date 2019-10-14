var _templateObject = _taggedTemplateLiteral(['\n    color: ', ' !important;\n    font-size: .9rem;\n    margin-top: 5px;\n'], ['\n    color: ', ' !important;\n    font-size: .9rem;\n    margin-top: 5px;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled from 'styled-components';

var FormError = function FormError(_ref) {
    var children = _ref.children,
        className = _ref.className;
    return React.createElement(
        StyledError,
        null,
        children
    );
};

var StyledError = styled.div(_templateObject, function (_ref2) {
    var theme = _ref2.theme;
    return theme.input && theme.input.error ? theme.input.error.borderColor : "#f65050";
});

export default FormError;