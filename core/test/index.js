var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Theme, configTheme, themeDefault, Button, FormRadio, FormCheckbox, FormInput, FormNumber, Form, Tooltip } from '../';

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.onChange = function (value) {
            _this.setState({ isChecked: !_this.state.isChecked });
        };

        _this.state = {
            isChecked: false
        };
        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var customTheme = {
                background: 'red',
                button: Object.assign({}, themeDefault.button, { primaryBg: '#7d61dc' })
            };
            var theme = configTheme(customTheme);

            return React.createElement(
                Theme,
                { theme: theme },
                React.createElement(
                    'div',
                    { className: 'wrapper' },
                    React.createElement(
                        'div',
                        { className: 'flex', style: { marginLeft: '50px' } },
                        React.createElement(
                            Button,
                            { primary: true },
                            'Sample button'
                        ),
                        React.createElement(
                            Form,
                            null,
                            React.createElement(
                                'div',
                                null,
                                React.createElement(FormCheckbox, { name: 'radio', checked: this.state.isChecked, value: 'shared', onCheck: this.onChange })
                            )
                        ),
                        React.createElement(
                            Button,
                            { primary: true, disabled: true },
                            'Sample Primary button'
                        ),
                        React.createElement(
                            Button,
                            { disabled: true },
                            'Template'
                        ),
                        React.createElement(
                            'h1',
                            null,
                            'Custom Radio Buttons'
                        )
                    ),
                    React.createElement(
                        'div',
                        null,
                        React.createElement(
                            Form,
                            null,
                            React.createElement(
                                'div',
                                null,
                                React.createElement(FormInput, { label: 'name', name: 'name', disabled: true }),
                                React.createElement(FormNumber, { label: 'value', name: 'name' })
                            )
                        ),
                        React.createElement(
                            Tooltip,
                            { textClassName: 'schedule-tooltip', title: 'sample' },
                            'Sample'
                        )
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

export default App;