function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

var Form = function Form(_ref) {
    var onSubmit = _ref.onSubmit,
        children = _ref.children,
        className = _ref.className,
        restProps = _objectWithoutProperties(_ref, ['onSubmit', 'children', 'className']);

    return React.createElement(
        'form',
        Object.assign({
            onSubmit: onSubmit,
            noValidate: true
        }, restProps),
        children
    );
};

export default Form;

export { default as FormError } from './components/FormError';
export { default as FormField } from './components/FormField';
export { default as FormGroup } from './components/FormGroup';
export { default as FormLabel } from './components/FormLabel';
export { default as FormCheckbox } from './components/FormCheckbox';
export { default as FormRadio } from './components/FormRadio';
export { default as FormInput } from './components/FormInput';
export { default as FormNumber } from './components/FormNumber';