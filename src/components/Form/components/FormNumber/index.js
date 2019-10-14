import React from 'react';
import styled from 'styled-components';

import { FormField } from '../../';

type Props = {
    label: string,
    type: string,
    meta: Object,
    input: Object,
    placeholder: string,
    className: string,
    disabled: boolean,
    min: number,
    max: number,
    showHint: boolean,
    hintMessage: string,
    inlineForm: boolean,
    noPlaceholder: boolean,
    labelClassName: string,
    groupClassName: string,
    onChange: Function
  }

  class FormNumber extends React.Component<Props>{

    static defaultProps = {
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
        inlineForm: false,
    };
    
    render() {
    const { input, label, type, value, placeholder, 
        labelClassName,
        groupClassName,
        name,
        id,
        ref,
        showHint,
        onChange,
        noPlaceholder,
        hintMessage,
        meta: { touched, error }, className, disabled, min, max, inlineForm } = this.props;

    return (
        <FormField
            label={label}
            type={type}
            showHint={showHint}
            hintMessage={hintMessage}
            labelClassName={labelClassName}
            groupClassName={groupClassName}
            inlineForm={inlineForm}
            touched={touched}
            error={error}>
            <Input
                type={type}
                min={min}
                max={max}
                {...input}
                onChange={onChange}
                name={name}
                id={id}
                ref={ref}
                value={value || input.value}
                placeholder={!noPlaceholder ? placeholder || label : ''}
                className={className}
                disabled={disabled} {...this.props}/>
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

export default FormNumber;
