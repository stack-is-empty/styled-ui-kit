var _templateObject = _taggedTemplateLiteral(['\nposition: relative;\ndisplay: inline-block;\n\n&:hover .tooltiptext {\n    visibility: visible;\n}\n'], ['\nposition: relative;\ndisplay: inline-block;\n\n&:hover .tooltiptext {\n    visibility: visible;\n}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\nvisibility: hidden;\nwidth: 100px;\nbackground-color: #1d1d1d;\ncolor: #fff;\ntext-align: center;\nborder-radius: 2px;\npadding: 5px 0;\nposition: absolute;\nz-index: 1;\nletter-spacing: 0.1px;\nfont-size: 11px;\n', ';\n\n&::after {\n    content: "";\n    position: absolute;\n    border-width: 5px;\n    border-style: solid;\n    ', ';\n}\n'], ['\nvisibility: hidden;\nwidth: 100px;\nbackground-color: #1d1d1d;\ncolor: #fff;\ntext-align: center;\nborder-radius: 2px;\npadding: 5px 0;\nposition: absolute;\nz-index: 1;\nletter-spacing: 0.1px;\nfont-size: 11px;\n', ';\n\n&::after {\n    content: "";\n    position: absolute;\n    border-width: 5px;\n    border-style: solid;\n    ', ';\n}\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled from 'styled-components';

var Tooltip = function Tooltip(_ref) {
    var onClick = _ref.onClick,
        children = _ref.children,
        title = _ref.title,
        className = _ref.className,
        textClassName = _ref.textClassName,
        textStyle = _ref.textStyle,
        style = _ref.style,
        position = _ref.position;
    return React.createElement(
        StyledTooltip,
        { style: style, className: className, onClick: onClick },
        children,
        title && React.createElement(
            StyledTooltipText,
            {
                position: position,
                style: textStyle,
                className: textClassName + ' tooltiptext' },
            title
        )
    );
};

Tooltip.defaultProps = {
    className: '',
    style: null,
    textStyle: null,
    textClassName: '',
    position: 'bottom',
    title: '',
    children: null
};

export default Tooltip;

var chooseTooltipPosition = function chooseTooltipPosition(props) {
    switch (props.position) {
        case 'top':
            return '\n            bottom: 150%;\n            left: 50%;\n            margin-left: -50px;';

        case 'bottom':
            return '\n            top: 150%;\n            padding-top: 2px;\n            left: 50%;\n            margin-left: -50px;';

        case 'left':
            return '  \n            top: -5px;\n            right: 150%;\n        ';

        case 'right':
            return '\n            top: -5px;\n            left: 150%;\n        ';

        default:
            return '\n            top: 150%;\n            padding-top: 2px;\n            left: 50%;\n            margin-left: -50px;';

    }
};

var chooseTextPosition = function chooseTextPosition(props) {
    switch (props.position) {
        case 'top':
            return '\n            top: 100%;\n            left: 50px;\n            margin-left: -5px;\n            border-color: black transparent transparent transparent;';

        case 'bottom':
            return '\n            bottom: 100%;\n            left: 50px;\n            margin-left: -5px;\n            border-color: transparent transparent black transparent;';

        case 'left':
            return '\n            top: 50%;\n            left: 100%;\n            margin-top: -5px;\n            border-color: transparent transparent transparent black;\n            \n          ';

        case 'right':
            return '\n            top: 50%;\n            right: 100%;\n            margin-top: -5px;\n            border-color: transparent black transparent transparent;\n          ';

        default:
            return '\n            bottom: 100%;\n            left: 50%;\n            margin-left: -5px;\n            border-color: transparent transparent black transparent;';

    }
};

var StyledTooltip = styled.a(_templateObject);

var StyledTooltipText = styled.span(_templateObject2, function (props) {
    return chooseTooltipPosition(props);
}, function (props) {
    return chooseTextPosition(props);
});