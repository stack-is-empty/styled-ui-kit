var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\nposition: absolute;\nheight: ', ';\nwidth: ', ';\nborder: 1px solid ', ';\nbackground-color: #fff;\nborder-radius: 2px;\n\n&:after {\n    content: "";\n    position: absolute;\n    ', ';\n    border: solid white;\n    border-width: 0 1.4px 1.4px 0;\n    -webkit-transform: rotate(35deg);\n    -ms-transform: rotate(35deg);\n    transform: rotate(35deg);\n\n    ', '\n}\n'], ['\nposition: absolute;\nheight: ', ';\nwidth: ', ';\nborder: 1px solid ', ';\nbackground-color: #fff;\nborder-radius: 2px;\n\n&:after {\n    content: "";\n    position: absolute;\n    ', ';\n    border: solid white;\n    border-width: 0 1.4px 1.4px 0;\n    -webkit-transform: rotate(35deg);\n    -ms-transform: rotate(35deg);\n    transform: rotate(35deg);\n\n    ', '\n}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n\n  &:disabled ~ .checkmark {\n    background-color: ', ';\n    pointer-events: none;\n    cursor: not-allowed;\n    border: 1px solid ', ';\n  }\n\n  &:disabled ~ .checkmark:after {\n    display: block;\n  }\n\n  &:checked ~ .checkmark {\n    background-color: ', ';\n    border: 1px solid ', ';\n  } \n\n  &:checked ~ .checkmark:after {\n    display: block;\n  }\n  '], ['\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n\n  &:disabled ~ .checkmark {\n    background-color: ', ';\n    pointer-events: none;\n    cursor: not-allowed;\n    border: 1px solid ', ';\n  }\n\n  &:disabled ~ .checkmark:after {\n    display: block;\n  }\n\n  &:checked ~ .checkmark {\n    background-color: ', ';\n    border: 1px solid ', ';\n  } \n\n  &:checked ~ .checkmark:after {\n    display: block;\n  }\n  ']);

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

var FormCheckbox = function (_React$Component) {
  _inherits(FormCheckbox, _React$Component);

  function FormCheckbox(props) {
    _classCallCheck(this, FormCheckbox);

    var _this = _possibleConstructorReturn(this, (FormCheckbox.__proto__ || Object.getPrototypeOf(FormCheckbox)).call(this, props));

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

  _createClass(FormCheckbox, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          input = _props.input,
          label = _props.label,
          onChangeCheckbox = _props.onChangeCheckbox,
          name = _props.name,
          size = _props.size,
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
          noTick = _props.noTick,
          defaultBorderColor = _props.defaultBorderColor,
          bgColor = _props.bgColor,
          disabledBorderColor = _props.disabledBorderColor,
          disabledBgColor = _props.disabledBgColor;
      var isChecked = this.state.isChecked;


      return React.createElement(
        FormField,
        {
          label: label,
          noLabel: !label,
          type: 'checkbox',
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
          value: value || input.value,
          disabledBgColor: disabledBgColor,
          bgColor: bgColor,
          disabledBorderColor: disabledBorderColor,
          onChange: onChangeCheckbox,
          checked: !disabled && (_isUndefined(checked) ? isChecked || input.checked : checked || input.checked),
          disabled: disabled })),
        React.createElement(StyledCheckboxCheckMark, { noTick: noTick, defaultBorderColor: defaultBorderColor, disabled: disabled, size: size, onClick: function onClick(e) {
            return !disabled && _this2.onChange(e);
          }, className: className + ' checkmark' })
      );
    }
  }]);

  return FormCheckbox;
}(React.Component);

FormCheckbox.defaultProps = {
  meta: {
    touched: false,
    error: ""
  },
  className: "",
  labelClassName: "",
  groupClassName: "",
  hideErrMsg: false,
  size: 14,
  onCheck: _noop,
  onChangeCheckbox: _noop,
  input: { value: '', name: '', checked: false },
  disabled: false
};


export default FormCheckbox;

var getCheckMarkPosition = function getCheckMarkPosition(props) {
  switch (props.size) {
    case 16:
      return '\n      left: 6px;\n      top: 2px;\n      width: 3px;\n      height: 8px;';

    case 12:
      return '\n      left: 5px;\n      top: 2px;\n      width: 2px;\n      height: 6px;';

    case 14:
      return '\n      left: 5px;\n      top: 2px;\n      width: 3px;\n      height: 7px;';

    default:
      return '\n      left: 5px;\n      top: 2px;\n      width: 3px;\n      height: 7px;';
  }
};

/* Create a custom checkbox button */
var StyledCheckboxCheckMark = styled.span(_templateObject, function (props) {
  return props.size && props.size + 'px' || "14px";
}, function (props) {
  return props.size && props.size + 'px' || "14px";
}, function (props) {
  return props.defaultBorderColor ? props.defaultBorderColor : "#d2d2d2";
}, function (props) {
  return getCheckMarkPosition(props);
}, function (props) {
  return props.noTick && props.disabled && "border: solid transparent !important;";
});

var Input = styled.input.attrs({
  type: "checkbox",
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