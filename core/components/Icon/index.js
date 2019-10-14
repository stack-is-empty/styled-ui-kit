var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  vertical-align: middle;\n\n    &', '_xmini {\n        height: 12px;\n        width: 12px;\n    }\n\n    &', '_mini {\n        height: 16px;\n        width: 16px;\n    }\n\n    &', '_small {\n        height: 32px;\n        width: 32px;\n    }\n\n    &', '_medium {\n        height: 64px;\n        width: 64px;\n    }\n\n    &', '_large {\n        height: 128px;\n        width: 128px;\n    }\n\n    &', '_xlarge {\n        height: 256px;\n        width: 256px;\n    }\n\n    &', '_xxlarge {\n        height: 512px;\n        width: 512px;\n    }\n\n    &', '_disabled {\n        cursor: not-allowed;\n        opacity: .3;\n    }\n  '], ['\n  display: inline-block;\n  vertical-align: middle;\n\n    &', '_xmini {\n        height: 12px;\n        width: 12px;\n    }\n\n    &', '_mini {\n        height: 16px;\n        width: 16px;\n    }\n\n    &', '_small {\n        height: 32px;\n        width: 32px;\n    }\n\n    &', '_medium {\n        height: 64px;\n        width: 64px;\n    }\n\n    &', '_large {\n        height: 128px;\n        width: 128px;\n    }\n\n    &', '_xlarge {\n        height: 256px;\n        width: 256px;\n    }\n\n    &', '_xxlarge {\n        height: 512px;\n        width: 512px;\n    }\n\n    &', '_disabled {\n        cursor: not-allowed;\n        opacity: .3;\n    }\n  ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import styled from 'styled-components';
import { applyModifiers, deleteByVal } from '../../utils';
import Icons from './Icons';

var Icon = function Icon(props) {
    var name = props.name,
        size = props.size,
        color = props.color,
        className = props.className,
        viewBox = props.viewBox,
        restProps = _objectWithoutProperties(props, ['name', 'size', 'color', 'className', 'viewBox']);

    var path = {
        fill: color
    };
    var getPath = function getPath(iconName) {
        if (iconName in Icons) {
            return Icons[iconName];
        }

        console.warn('icon ' + iconName + ' does not exist.');
        return '';
    };

    var width = size instanceof Array ? size[0] : size;
    var height = size instanceof Array ? size[1] : size;

    var variants = { _xmini: props.xmini, _mini: props.mini, _small: props.small,
        _medium: props.medium, _large: props.large,
        _xlarge: props.xlarge, _xxlarge: props.xxlarge, _disabled: props.disabled };
    var itemProps = deleteByVal(variants, false);

    return React.createElement(
        StyledSvg,
        Object.assign({
            width: width + 'px'
        }, itemProps, {
            height: height + 'px',
            viewBox: viewBox
        }, restProps),
        React.createElement('path', { style: path, d: getPath(name) })
    );
};

var StyledSvg = styled.svg.attrs({
    className: function className(props) {
        return applyModifiers(props, StyledSvg);
    }
})(_templateObject, function () {
    return StyledSvg;
}, function () {
    return StyledSvg;
}, function () {
    return StyledSvg;
}, function () {
    return StyledSvg;
}, function () {
    return StyledSvg;
}, function () {
    return StyledSvg;
}, function () {
    return StyledSvg;
}, function () {
    return StyledSvg;
});

Icon.defaultProps = {
    size: 12,
    viewBox: '0 0 1024 1024',
    xmini: false,
    mini: false,
    small: false,
    medium: false,
    large: false,
    xlarge: false,
    xxlarge: false,
    disabled: false
};

export default Icon;