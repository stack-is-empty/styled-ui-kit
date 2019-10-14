import React from 'react';

type Props = {
    className: string,
    onSubmit: Function,
    children: any,
  }

const Form = ({ onSubmit, children, className, ...restProps }: Props) => (
    <form
        onSubmit={onSubmit}
        noValidate
        {...restProps}>
        {children}
    </form>
);

export default Form;

export { default as FormError } from './components/FormError';
export { default as FormField } from './components/FormField';
export { default as FormGroup } from './components/FormGroup';
export { default as FormLabel } from './components/FormLabel';
export { default as FormCheckbox } from './components/FormCheckbox';
export { default as FormRadio } from './components/FormRadio';
export { default as FormInput } from './components/FormInput';
export { default as FormNumber } from './components/FormNumber';
