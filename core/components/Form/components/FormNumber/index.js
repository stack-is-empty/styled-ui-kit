var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    background-color: #FFFFFF;\n    background-image: none;\n    border: 1px solid #dadfe3;\n    border-radius: ', ' !important;\n    color: #333333;\n    display: block;\n    font-size: 14px;\n    min-height: 32px;\n    padding-left: 10px;\n    width: 100%;\n\n    &:focus {\n        outline: none;\n    }\n\n    &:disabled {\n        background-color: #f9fafb;\n        color: #545454;\n        pointer-events: none;\n        cursor: not-allowed;\n        border: 1px solid #dadfe3;\n    }\n'], ['\n    background-color: #FFFFFF;\n    background-image: none;\n    border: 1px solid #dadfe3;\n    border-radius: ', ' !important;\n    color: #333333;\n    display: block;\n    font-size: 14px;\n    min-height: 32px;\n    padding-left: 10px;\n    width: 100%;\n\n    &:focus {\n        outline: none;\n    }\n\n    &:disabled {\n        background-color: #f9fafb;\n        color: #545454;\n        pointer-events: none;\n        cursor: not-allowed;\n        border: 1px solid #dadfe3;\n    }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import styled from 'styled-components';

import { FormField } from '../../';

var FormNumber = function (_React$Component) {
    _inherits(FormNumber, _React$Component);

    function FormNumber() {
        _classCallCheck(this, FormNumber);

        return _possibleConstructorReturn(this, (FormNumber.__proto__ || Object.getPrototypeOf(FormNumber)).apply(this, arguments));
    }

    _createClass(FormNumber, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                input = _props.input,
                label = _props.label,
                type = _props.type,
                value = _props.value,
                placeholder = _props.placeholder,
                labelClassName = _props.labelClassName,
                groupClassName = _props.groupClassName,
                name = _props.name,
                id = _props.id,
                ref = _props.ref,
                showHint = _props.showHint,
                onChange = _props.onChange,
                noPlaceholder = _props.noPlaceholder,
                hintMessage = _props.hintMessage,
                _props$meta = _props.meta,
                touched = _props$meta.touched,
                error = _props$meta.error,
                className = _props.className,
                disabled = _props.disabled,
                min = _props.min,
                max = _props.max,
                inlineForm = _props.inlineForm;


            return React.createElement(
                FormField,
                {
                    label: label,
                    type: type,
                    showHint: showHint,
                    hintMessage: hintMessage,
                    labelClassName: labelClassName,
                    groupClassName: groupClassName,
                    inlineForm: inlineForm,
                    touched: touched,
                    error: error },
                React.createElement(Input, Object.assign({
                    type: type,
                    min: min,
                    max: max
                }, input, {
                    onChange: onChange,
                    name: name,
                    id: id,
                    ref: ref,
                    value: value || input.value,
                    placeholder: !noPlaceholder ? placeholder || label : '',
                    className: className,
                    disabled: disabled }, this.props))
            );
        }
    }]);

    return FormNumber;
}(React.Component);

FormNumber.defaultProps = {
    disabled: false,
    type: 'number',
    label: '',
    meta: { touched: false, error: '' },
    input: { value: '' },
    placeholder: '',
    className: '',
    min: null,
    max: null,
    showHint: false,
    noPlaceholder: false,
    hintMessage: '',
    inlineForm: false
};


var Input = styled.input(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.input && theme.input.baseRadius ? theme.input.baseRadius : "2px";
});

export default FormNumber;