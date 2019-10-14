var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    color: ', ';\n    font-size: 14px;\n    position: relative;\n    padding: 12px 20px;\n    width: auto;\n    min-width: 50px;\n    margin-bottom: 16px;\n    border: 1px solid ', ';\n    border-radius: 4px;\n    background-color: ', ';\n\n    &', '_primary {\n        color: #004085;\n        background-color: ', ';\n        border-color: #b8daff;\n    }\n\n    &', '_secondary {\n        color: #383d41;\n        background-color: ', ';\n        border-color: #d6d8db;\n    }\n\n    &', '_success {\n        color: #155724;\n        background-color: ', ';\n        border-color: #c3e6cb;\n    }\n\n    &', '_danger {\n        color: #721c24;\n        background-color: ', ';\n        border-color: #f5c6cb;\n    }\n\n    &', '_warning {\n        color: #856404;\n        background-color: ', ';\n        border-color: #ffeeba;\n    }\n\n    &', '_info {\n        color: #0c5460;\n        background-color: ', ';\n        border-color: #bee5eb;\n    }\n\n    &', '_light {\n        color: #818182;\n        background-color: ', ';\n        border-color: #fdfdfe;\n    }\n\n    &', '_dark {\n        color: #1b1e21;\n        background-color: ', ';\n        border-color: #c6c8ca;\n    }\n  '], ['\n    color: ', ';\n    font-size: 14px;\n    position: relative;\n    padding: 12px 20px;\n    width: auto;\n    min-width: 50px;\n    margin-bottom: 16px;\n    border: 1px solid ', ';\n    border-radius: 4px;\n    background-color: ', ';\n\n    &', '_primary {\n        color: #004085;\n        background-color: ', ';\n        border-color: #b8daff;\n    }\n\n    &', '_secondary {\n        color: #383d41;\n        background-color: ', ';\n        border-color: #d6d8db;\n    }\n\n    &', '_success {\n        color: #155724;\n        background-color: ', ';\n        border-color: #c3e6cb;\n    }\n\n    &', '_danger {\n        color: #721c24;\n        background-color: ', ';\n        border-color: #f5c6cb;\n    }\n\n    &', '_warning {\n        color: #856404;\n        background-color: ', ';\n        border-color: #ffeeba;\n    }\n\n    &', '_info {\n        color: #0c5460;\n        background-color: ', ';\n        border-color: #bee5eb;\n    }\n\n    &', '_light {\n        color: #818182;\n        background-color: ', ';\n        border-color: #fdfdfe;\n    }\n\n    &', '_dark {\n        color: #1b1e21;\n        background-color: ', ';\n        border-color: #c6c8ca;\n    }\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    float: right;\n    margin-left: 15px;\n    &:hover {\n      cursor: pointer;\n    }\n  '], ['\n    float: right;\n    margin-left: 15px;\n    &:hover {\n      cursor: pointer;\n    }\n  ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import _noop from 'lodash/noop';
import styled from 'styled-components';
import { applyModifiers, deleteByVal } from '../../utils';
import Icon from '../Icon';

var time = void 0;

var Alert = function (_React$Component) {
    _inherits(Alert, _React$Component);

    /* eslint-disable */
    function Alert(props) {
        _classCallCheck(this, Alert);

        var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props));

        _this.toggle = function () {
            _this.setState({ visible: false });
            _this.props.onClick();
        };

        if (!props.danger && !props.noTimeout) {
            time = setTimeout(function () {
                _this.refs.alert.style.display = 'none';
            }, props.timeout ? props.timeout : 2000);
        }
        _this.state = {
            visible: true
        };
        return _this;
    }

    _createClass(Alert, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearTimeout(time);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                color = _props.color,
                className = _props.className,
                custom = _props.custom,
                getTemplate = _props.getTemplate,
                primary = _props.primary,
                secondary = _props.secondary,
                closable = _props.closable,
                info = _props.info,
                success = _props.success,
                danger = _props.danger,
                warning = _props.warning,
                light = _props.light,
                dark = _props.dark;

            var variants = { _info: info, _primary: primary, _secondary: secondary,
                _warning: warning, _success: success, _danger: danger, _light: light, _dark: dark };
            var restProps = deleteByVal(variants, false);
            var colors = { _primary: '#004085', _secondary: '#383d41', _success: '#155724',
                _danger: '#721c24', _warning: '#856404', _info: '#0c5460', _light: '#818182', _dark: '#1b1e21' };
            var iconColor = Object.keys(restProps).length !== 0 ? colors[Object.keys(restProps)[0]] : color ? color : "#111315";

            return React.createElement(
                'div',
                { ref: 'alert' },
                this.state.visible && React.createElement(
                    StyledAlert,
                    Object.assign({
                        custom: custom,
                        className: className
                    }, restProps),
                    React.createElement(
                        'div',
                        { className: 'flex' },
                        React.createElement(
                            'div',
                            { className: 'flex-grow-10' },
                            getTemplate ? getTemplate : children
                        ),
                        React.createElement(
                            'div',
                            { className: 'flex flex-grow-1 justify-content-end' },
                            closable && React.createElement(
                                StyledAlertClose,
                                { onClick: this.toggle },
                                React.createElement(Icon, { name: 'close',
                                    color: iconColor,
                                    xmini: true })
                            )
                        )
                    )
                )
            );
        }
        /* eslint-enable */

    }]);

    return Alert;
}(React.Component);

Alert.defaultProps = {
    primary: false,
    secondary: false,
    warning: false,
    info: false,
    noTimeout: false,
    success: false,
    danger: false,
    light: false,
    dark: false,
    onClick: _noop,
    getTemplate: null
};


var StyledAlert = styled.div.attrs({
    className: function className(props) {
        return applyModifiers(props, StyledAlert);
    }
})(_templateObject, function (props) {
    return props.color ? props.color : "#111315";
}, function (props) {
    return props.custom ? "#DADFE3" : "transparent";
}, function (props) {
    return props.custom && props.custom;
}, function () {
    return StyledAlert;
}, function (props) {
    return typeof props._primary === 'string' ? props._primary : props._primary && (props.theme.brand ? props.theme.brand.primary : "#cce5ff");
}, function () {
    return StyledAlert;
}, function (props) {
    return typeof props._secondary === 'string' ? props._secondary : props._secondary && (props.theme.brand ? props.theme.brand.secondary : "#e2e3e5");
}, function () {
    return StyledAlert;
}, function (props) {
    return typeof props._success === 'string' ? props._success : props._success && (props.theme.brand ? props.theme.brand.success : "#d4edda");
}, function () {
    return StyledAlert;
}, function (props) {
    return typeof props._danger === 'string' ? props._danger : props._danger && (props.theme.brand ? props.theme.brand.danger : "#f8d7da");
}, function () {
    return StyledAlert;
}, function (props) {
    return typeof props._warning === 'string' ? props._warning : props._warning && (props.theme.brand ? props.theme.brand.warning : "#fff3cd");
}, function () {
    return StyledAlert;
}, function (props) {
    return typeof props._info === 'string' ? props._info : props._info && (props.theme.brand ? props.theme.brand.info : "#d1ecf1");
}, function () {
    return StyledAlert;
}, function (props) {
    return typeof props._light === 'string' ? props._light : props._light && (props.theme.brand ? props.theme.brand.light : "#fefefe");
}, function () {
    return StyledAlert;
}, function (props) {
    return typeof props._dark === 'string' ? props._dark : props._dark && (props.theme.brand ? props.theme.brand.dark : "#d6d8d9");
});

var StyledAlertClose = styled.span(_templateObject2);

export default Alert;