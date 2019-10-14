var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\nposition: absolute;\nheight: ', ';\nwidth: ', ';\nborder: 1px solid ', ';\nbackground-color: #fff;\nborder-radius: 50%;\n\n&:after {\n  content: "";\n  position: absolute;\n  ', ';\n\tborder-radius: 50%;\n  background: white;\n  \n  ', '\n}\n'], ['\nposition: absolute;\nheight: ', ';\nwidth: ', ';\nborder: 1px solid ', ';\nbackground-color: #fff;\nborder-radius: 50%;\n\n&:after {\n  content: "";\n  position: absolute;\n  ', ';\n\tborder-radius: 50%;\n  background: white;\n  \n  ', '\n}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n\n  &:disabled ~ .checkmark {\n    background-color: ', ';\n    pointer-events: none;\n    cursor: not-allowed;\n    border: 1px solid ', ';\n  }\n\n  &:disabled ~ .checkmark:after {\n    display: block;\n  }\n\n  &:checked ~ .checkmark {\n    background-color: ', ';\n    border: 1px solid ', ';\n  }\n\n  &:checked ~ .checkmark:after {\n    display: block;\n  }\n  '], ['\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n\n  &:disabled ~ .checkmark {\n    background-color: ', ';\n    pointer-events: none;\n    cursor: not-allowed;\n    border: 1px solid ', ';\n  }\n\n  &:disabled ~ .checkmark:after {\n    display: block;\n  }\n\n  &:checked ~ .checkmark {\n    background-color: ', ';\n    border: 1px solid ', ';\n  }\n\n  &:checked ~ .checkmark:after {\n    display: block;\n  }\n  ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import _noop from 'lodash/noop';
import _isUndefined from 'lodash/isUndefined';
import styled from 'styled-components';
import { FormField } from '../../';
import { checkedBgTheming } from '../../../../utils';

var FormRadio = function (_React$Component) {
  _inherits(FormRadio, _React$Component);

  function FormRadio(props) {
    _classCallCheck(this, FormRadio);

    var _this = _possibleConstructorReturn(this, (FormRadio.__proto__ || Object.getPrototypeOf(FormRadio)).call(this, props));

    _this.onChange = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          checked = _this$props.checked,
          onCheck = _this$props.onCheck,
          value = _this$props.value;

      if (_isUndefined(checked)) _this.setState({ isChecked: !_this.state.isChecked });else if (onCheck) onCheck(!checked ? value : '');
    };

    _this.state = {
      isChecked: false
    };
    return _this;
  }

  _createClass(FormRadio, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          input = _props.input,
          label = _props.label,
          onChangeRadio = _props.onChangeRadio,
          size = _props.size,
          name = _props.name,
          value = _props.value,
          groupClassName = _props.groupClassName,
          labelClassName = _props.labelClassName,
          _props$meta = _props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error,
          className = _props.className,
          checked = _props.checked,
          disabled = _props.disabled,
          hideErrMsg = _props.hideErrMsg,
          defaultBorderColor = _props.defaultBorderColor,
          bgColor = _props.bgColor,
          disabledBorderColor = _props.disabledBorderColor,
          disabledBgColor = _props.disabledBgColor,
          noCheck = _props.noCheck;
      var isChecked = this.state.isChecked;


      return React.createElement(
        FormField,
        {
          label: label,
          noLabel: !label,
          type: 'radio',
          onCheck: function onCheck(e) {
            return !disabled && label && _this2.onChange(e);
          },
          labelClassName: labelClassName,
          groupClassName: groupClassName,
          containerClassName: 'check-container',
          touched: touched,
          error: error,
          hideErrMsg: hideErrMsg },
        React.createElement(Input, Object.assign({}, input, {
          name: name,
          disabledBgColor: disabledBgColor,
          disabledBorderColor: disabledBorderColor,
          bgColor: bgColor,
          value: value || input.value,
          onChange: onChangeRadio,
          checked: !disabled && (_isUndefined(checked) ? isChecked || input.checked : checked || input.checked),
          disabled: disabled })),
        React.createElement(StyledRadioCheckMark, { noCheck: noCheck, defaultBorderColor: defaultBorderColor, disabled: disabled, size: size, onClick: function onClick(e) {
            return !disabled && _this2.onChange(e);
          }, className: className + ' checkmark' })
      );
    }
  }]);

  return FormRadio;
}(React.Component);

FormRadio.defaultProps = {
  meta: {
    touched: false,
    error: ""
  },
  className: "",
  labelClassName: "",
  groupClassName: "",
  hideErrMsg: false,
  onCheck: _noop,
  onChangeRadio: _noop,
  size: 14,
  input: { value: '', name: '', checked: false },
  disabled: false
};


export default FormRadio;

var getRadioMarkPosition = function getRadioMarkPosition(props) {
  switch (props.size) {
    case 16:
      return '\n      margin: 5px;\n      width: 5px;\n      height: 5px;';

    case 12:
      return '\n      margin: 4px;\n      width: 4px;\n      height: 4px;';

    case 14:
      return '\n      margin: 5px;\n      width: 4px;\n      height: 4px;';

    default:
      return '\n        margin: 5px;\n        width: 4px;\n        height: 4px;';
  }
};

/* Create a custom radio button */
var StyledRadioCheckMark = styled.span(_templateObject, function (props) {
  return props.size && props.size + 'px' || "14px";
}, function (props) {
  return props.size && props.size + 'px' || "14px";
}, function (props) {
  return props.defaultBorderColor ? props.defaultBorderColor : "#d2d2d2";
}, function (props) {
  return getRadioMarkPosition(props);
}, function (props) {
  return props.noCheck && props.disabled && "background: transparent !important;";
});

var Input = styled.input.attrs({
  type: "radio",
  checked: function checked(props) {
    return props.checked;
  },
  disabled: function disabled(props) {
    return props.disabled;
  },
  onChange: function onChange(props) {
    return props.onChange;
  }
})(_templateObject2, function (props) {
  return props.disabledBgColor ? props.disabledBgColor : "#d8d8d8";
}, function (props) {
  return props.disabledBorderColor ? props.disabledBorderColor : "#d8d8d8";
}, function (_ref) {
  var theme = _ref.theme,
      bgColor = _ref.bgColor;
  return bgColor ? bgColor : checkedBgTheming(theme);
}, function (_ref2) {
  var theme = _ref2.theme,
      bgColor = _ref2.bgColor;
  return bgColor ? bgColor : checkedBgTheming(theme);
});