var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    flex: none;\n    align-self: center;\n    align-items: center;\n    justify-content: center;\n    word-break: keep-all;\n    cursor: pointer;\n    position: relative;\n    outline: none;\n    margin: 1.1em;\n    padding: 0px 10px;\n    text-decoration: none;\n    line-height:30px;\n    text-align: center;\n    cursor: ', ';\n    opacity: ', ';\n    background : ', '; \n    background-color : ', '                            \n    border-left: ', ';\n\n    font-size: ', ';\n\n    border: 1px solid ', ';\n\n    border-radius: ', ';\n\n    color:', ';\n    svg {\n        vertical-align: sub;\n    }\n'], ['\n    display: flex;\n    flex: none;\n    align-self: center;\n    align-items: center;\n    justify-content: center;\n    word-break: keep-all;\n    cursor: pointer;\n    position: relative;\n    outline: none;\n    margin: 1.1em;\n    padding: 0px 10px;\n    text-decoration: none;\n    line-height:30px;\n    text-align: center;\n    cursor: ', ';\n    opacity: ', ';\n    background : ', '; \n    background-color : ', '                            \n    border-left: ', ';\n\n    font-size: ', ';\n\n    border: 1px solid ', ';\n\n    border-radius: ', ';\n\n    color:', ';\n    svg {\n        vertical-align: sub;\n    }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled from 'styled-components';

var hexa = function hexa(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha >= 0) {
        return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    } else {
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
};

export var BasicButton = styled.button(_templateObject, function (props) {
    return props.disabled && "not-allowed" || "pointer";
}, function (props) {
    return props.disabled && 0.3 || 1;
}, function (props) {
    return props.primary ? props.theme.button.primaryBg : props.theme.button.background ? props.theme.button.background : props.theme.button.defaultBg;
}, function (props) {
    return props.disabled && props.theme.button.disabledBg;
}, function (props) {
    return props.theme.button.borderLeft;
}, function (_ref) {
    var theme = _ref.theme;
    return theme.button.smallFontSize;
}, function (props) {
    return props.primary ? props.theme.button.borderPrimary : props.theme.button.borderDefault;
}, function (props) {
    return props.borderRadius || '2px';
}, function (props) {
    return props.disabled ? props.theme.button.disabledTextColor : props.primary ? props.theme.button.primaryTextColor : props.theme.textColor;
});