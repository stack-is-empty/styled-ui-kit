import React from 'react';
import styled from 'styled-components';
import _omit from 'lodash/omit';

import { FormField } from '../../';

type Props = {
    label: string,
    type: string,
    meta: Object,
    input: Object,
    placeholder: string,
    className: string,
    disabled: boolean,
    inlineForm: boolean,
    autoComplete: string,
    autoFocus: boolean,
    spellCheck: string,
    needValue: boolean,
    showHint: boolean,
    hintMessage: string,
    labelClassName: string,
    groupClassName: string,
    noPlaceholder: boolean,
    onChange: Function
  }

  class FormInput extends React.Component<Props>{

     static defaultProps = {
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
        hintMessage: '',
    };

    render() {
    const {  input,
        label,
        name,
        id,
        type,
        value,
        ref,
        placeholder,
        meta: { touched, error },
        inlineForm,
        className,
        disabled,
        onChange,
        noPlaceholder,
        needValue,
        autoComplete,
        autoFocus,
        spellCheck,
        labelClassName,
        groupClassName,
        showHint,
        hintMessage } = this.props;
    let inputs;
    if (!needValue) {
        inputs = type === 'password' ? _omit(input, 'value') : input;
    } else {
        inputs = input;
    }

    return (
        <FormField
            label={label}
            inlineForm={inlineForm}
            type={type}
            labelClassName={labelClassName}
            groupClassName={groupClassName}
            touched={touched}
            showHint={showHint}
            hintMessage={hintMessage}
            error={error}>
            <Input
                type={type}
                {...inputs}
                value={value || input.value}
                name={name}
                id={id}
                ref={ref}
                onChange={onChange}
                placeholder={!noPlaceholder ? placeholder || label : ''}
                className={className}
                disabled={disabled}
                spellCheck={spellCheck}
                autoFocus={autoFocus}
                autoComplete={autoComplete} {...this.props}/>
        </FormField>
    );
    }
  }

const Input = styled.input`
    background-color: #FFFFFF;
    background-image: none;
    border: 1px solid #dadfe3;
    border-radius: ${({theme}) => theme.input && theme.input.baseRadius ? theme.input.baseRadius : "2px"} !important;
    color: #333333;
    display: block;
    font-size: 14px;
    min-height: 32px;
    padding-left: 10px;
    width: 100%;

    &:focus {
        outline: none;
    }

    &:disabled {
        background-color: #f9fafb;
        color: #545454;
        pointer-events: none;
        cursor: not-allowed;
        border: 1px solid #dadfe3;
    }
`;

export default FormInput;
