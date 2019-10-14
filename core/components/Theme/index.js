var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '../../constants/application';

var Theme = function (_React$Component) {
  _inherits(Theme, _React$Component);

  function Theme() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Theme);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Theme.__proto__ || Object.getPrototypeOf(Theme)).call.apply(_ref, [this].concat(args))), _this), _this.checkDefaultTheme = function () {
      var theme = _this.props.theme;

      if (Object.keys(theme).length === 0 && theme.constructor === Object) return true;
      return false;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Theme, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          theme = _props.theme;

      var invertedValues = { invertedBg: themeDefault.button.primaryTextColor ? themeDefault.button.primaryTextColor : '',
        invertedTextColor: themeDefault.button.primaryBg ? themeDefault.button.primaryBg : '',
        borderInverted: themeDefault.button.primaryBg ? themeDefault.button.primaryBg : '' };
      var defaultTheme = Object.assign({}, themeDefault, { button: Object.assign({}, themeDefault.button, invertedValues) });

      return React.createElement(
        ThemeProvider,
        { theme: this.checkDefaultTheme() ? defaultTheme : theme },
        children
      );
    }
  }]);

  return Theme;
}(React.Component);

Theme.defaultProps = {
  theme: {}
};


export default Theme;