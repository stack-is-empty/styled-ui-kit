var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    background-color: #FFFFFF;\n    background-image: none;\n    border: 1px solid #dadfe3;\n    border-radius: ', ' !important;\n    color: #333333;\n    display: block;\n    font-size: 14px;\n    min-height: 32px;\n    padding-left: 10px;\n    width: 100%;\n\n    &:focus {\n        outline: none;\n    }\n\n    &:disabled {\n        background-color: #f9fafb;\n        color: #545454;\n        pointer-events: none;\n        cursor: not-allowed;\n        border: 1px solid #dadfe3;\n    }\n'], ['\n    background-color: #FFFFFF;\n    background-image: none;\n    border: 1px solid #dadfe3;\n    border-radius: ', ' !important;\n    color: #333333;\n    display: block;\n    font-size: 14px;\n    min-height: 32px;\n    padding-left: 10px;\n    width: 100%;\n\n    &:focus {\n        outline: none;\n    }\n\n    &:disabled {\n        background-color: #f9fafb;\n        color: #545454;\n        pointer-events: none;\n        cursor: not-allowed;\n        border: 1px solid #dadfe3;\n    }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import styled from 'styled-components';
import _omit from 'lodash/omit';

import { FormField } from '../../';

var FormInput = function (_React$Component) {
    _inherits(FormInput, _React$Component);

    function FormInput() {
        _classCallCheck(this, FormInput);

        return _possibleConstructorReturn(this, (FormInput.__proto__ || Object.getPrototypeOf(FormInput)).apply(this, arguments));
    }

    _createClass(FormInput, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                input = _props.input,
                label = _props.label,
                name = _props.name,
                id = _props.id,
                type = _props.type,
                value = _props.value,
                ref = _props.ref,
                placeholder = _props.placeholder,
                _props$meta = _props.meta,
                touched = _props$meta.touched,
                error = _props$meta.error,
                inlineForm = _props.inlineForm,
                className = _props.className,
                disabled = _props.disabled,
                onChange = _props.onChange,
                noPlaceholder = _props.noPlaceholder,
                needValue = _props.needValue,
                autoComplete = _props.autoComplete,
                autoFocus = _props.autoFocus,
                spellCheck = _props.spellCheck,
                labelClassName = _props.labelClassName,
                groupClassName = _props.groupClassName,
                showHint = _props.showHint,
                hintMessage = _props.hintMessage;

            var inputs = void 0;
            if (!needValue) {
                inputs = type === 'password' ? _omit(input, 'value') : input;
            } else {
                inputs = input;
            }

            return React.createElement(
                FormField,
                {
                    label: label,
                    inlineForm: inlineForm,
                    type: type,
                    labelClassName: labelClassName,
                    groupClassName: groupClassName,
                    touched: touched,
                    showHint: showHint,
                    hintMessage: hintMessage,
                    error: error },
                React.createElement(Input, Object.assign({
                    type: type
                }, inputs, {
                    value: value || input.value,
                    name: name,
                    id: id,
                    ref: ref,
                    onChange: onChange,
                    placeholder: !noPlaceholder ? placeholder || label : '',
                    className: className,
                    disabled: disabled,
                    spellCheck: spellCheck,
                    autoFocus: autoFocus,
                    autoComplete: autoComplete }, this.props))
            );
        }
    }]);

    return FormInput;
}(React.Component);

FormInput.defaultProps = {
    disabled: false,
    inlineForm: false,
    noPlaceholder: false,
    type: 'text',
    label: '',
    labelClassName: '',
    groupClassName: '',
    meta: { touched: false, error: '' },
    input: { value: '' },
    placeholder: '',
    className: '',
    autoComplete: 'off',
    autoFocus: false,
    spellCheck: 'false',
    needValue: false,
    showHint: false,
    hintMessage: ''
};


var Input = styled.input(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.input && theme.input.baseRadius ? theme.input.baseRadius : "2px";
});

export default FormInput;