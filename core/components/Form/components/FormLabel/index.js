var _templateObject = _taggedTemplateLiteral(['\n    color: #313741;\n    display: inline-block;\n\n    ', '\n'], ['\n    color: #313741;\n    display: inline-block;\n\n    ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    float: left;\n    width: 100%;\n'], ['\n    float: left;\n    width: 100%;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\nbackground-color: #C5CFDE;\nborder-radius: 50px;\ncursor: pointer;\nfloat: right;\nheight: 18px;\nmargin-left: 5px;\nmargin-top: -20px;\n\n.hint-icon {\n    padding: 5px;\n}\n'], ['\nbackground-color: #C5CFDE;\nborder-radius: 50px;\ncursor: pointer;\nfloat: right;\nheight: 18px;\nmargin-left: 5px;\nmargin-top: -20px;\n\n.hint-icon {\n    padding: 5px;\n}\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled from 'styled-components';
import Icon from '../../../Icon';

var FormLabel = function FormLabel(_ref) {
    var children = _ref.children,
        className = _ref.className,
        onCheck = _ref.onCheck,
        htmlFor = _ref.htmlFor,
        showHint = _ref.showHint,
        hintMessage = _ref.hintMessage,
        containerClassName = _ref.containerClassName;

    return React.createElement(
        StyledLabel,
        {
            className: className,
            onClick: onCheck,
            containerClassName: containerClassName,
            htmlFor: htmlFor },
        showHint ? React.createElement(
            StyledLabelPosition,
            null,
            children
        ) : children,
        showHint && React.createElement(
            StyledLabelHint,
            null,
            React.createElement(Icon, { name: 'info',
                color: '#FFFFFF',
                size: 8,
                title: hintMessage,
                className: 'hint-icon'
            })
        )
    );
};

var StyledLabel = styled.label(_templateObject, function (props) {
    return props.containerClassName === 'check-container' && '\n        position: relative;\n        padding-left: 24px;\n        margin-bottom: 12px;\n        cursor: pointer;\n        font-size: 20px;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;';
});

var StyledLabelPosition = styled.div(_templateObject2);

var StyledLabelHint = styled.div(_templateObject3);

export default FormLabel;