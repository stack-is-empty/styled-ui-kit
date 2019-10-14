var _templateObject = _taggedTemplateLiteral(['\n&', '_error {\ninput[type="text"], input[type="number"] {\n    border: 1px solid ', ' !important;\n}\n}\n'], ['\n&', '_error {\ninput[type="text"], input[type="number"] {\n    border: 1px solid ', ' !important;\n}\n}\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled from 'styled-components';
import { applyModifiers, deleteByVal } from '../../../../utils';

var StyledFormGroup = styled.div.attrs({
    className: function className(props) {
        return applyModifiers(props, StyledFormGroup);
    }
})(_templateObject, function () {
    return StyledFormGroup;
}, function (_ref) {
    var theme = _ref.theme;
    return theme.input && theme.input.error ? theme.input.error.borderColor : "#f65050";
});

var FormGroup = function FormGroup(_ref2) {
    var children = _ref2.children,
        groupClassName = _ref2.groupClassName,
        error = _ref2.error,
        success = _ref2.success,
        hideErrLabelColor = _ref2.hideErrLabelColor;

    if (hideErrLabelColor) {
        var variant = { _success: success };
        var itemProps = deleteByVal(variant, false);

        return React.createElement(
            StyledFormGroup,
            Object.assign({ className: groupClassName }, itemProps),
            children
        );
    }

    var variants = { _error: error, _success: success };
    var restProps = deleteByVal(variants, false);
    return React.createElement(
        StyledFormGroup,
        Object.assign({ className: groupClassName }, restProps),
        children
    );
};

export default FormGroup;