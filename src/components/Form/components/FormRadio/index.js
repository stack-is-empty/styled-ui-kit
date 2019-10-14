import React from 'react';
import _noop from 'lodash/noop';
import _isUndefined from 'lodash/isUndefined';
import styled from 'styled-components';
import { FormField } from '../../';
import { checkedBgTheming } from '../../../../utils';

type Props = {
    label: string,
    meta: Object,
    input: Object,
    className: string,
    size: Number,
    labelClassName: string,
    groupClassName: string,
    onChangeRadio: Function,
    onCheck: Function,
    disabled: boolean,
    hideErrMsg: boolean
  }

class FormRadio extends React.Component<Props>{
    constructor(props){
        super(props);
        this.state ={
            isChecked: false
        };
    }
    static defaultProps = {
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

  
    onChange = e => {
        e.preventDefault();
        const { checked, onCheck, value } = this.props;
        if (_isUndefined(checked)) this.setState({ isChecked: !this.state.isChecked });
        else if (onCheck) onCheck(!checked ? value : '');
    }

    render() {
      const { input, label, onChangeRadio, size, name, value, groupClassName, labelClassName, meta: { touched, error }, className, checked, disabled, hideErrMsg, defaultBorderColor, bgColor, disabledBorderColor, disabledBgColor, noCheck } = this.props;
      const { isChecked } = this.state;

      return (
        <FormField
            label={label}
            noLabel={!label}
            type="radio"
            onCheck={e => !disabled && label && this.onChange(e)}
            labelClassName={labelClassName}
            groupClassName={groupClassName}
            containerClassName="check-container"
            touched={touched}
            error={error}
            hideErrMsg={hideErrMsg}>
                <Input
                    {...input}
                    name={name}
                    disabledBgColor={disabledBgColor}
                    disabledBorderColor={disabledBorderColor}
                    bgColor={bgColor}
                    value={value || input.value}
                    onChange={onChangeRadio}
                    checked={!disabled && (_isUndefined(checked) ? (isChecked || input.checked) : (checked || input.checked))}
                    disabled={disabled} />
                <StyledRadioCheckMark noCheck={noCheck} defaultBorderColor={defaultBorderColor} disabled={disabled} size={size} onClick={e => !disabled && this.onChange(e)} className={`${className} checkmark`}></StyledRadioCheckMark >
        </FormField>
      );
    }
  }


export default FormRadio;

const getRadioMarkPosition = props => {
  switch (props.size) {
    case 16:
      return `
      margin: 5px;
      width: 5px;
      height: 5px;`;

    case 12:
      return `
      margin: 4px;
      width: 4px;
      height: 4px;`;

    case 14:
      return `
      margin: 5px;
      width: 4px;
      height: 4px;`;

    default:
      return `
        margin: 5px;
        width: 4px;
        height: 4px;`;
  }
}

/* Create a custom radio button */
const StyledRadioCheckMark = styled.span`
position: absolute;
height: ${props => (props.size && `${props.size}px`) || "14px"};
width: ${props => (props.size && `${props.size}px`) || "14px"};
border: 1px solid ${props => props.defaultBorderColor ? props.defaultBorderColor : "#d2d2d2"};
background-color: #fff;
border-radius: 50%;

&:after {
  content: "";
  position: absolute;
  ${props => getRadioMarkPosition(props)};
	border-radius: 50%;
  background: white;
  
  ${props => props.noCheck && props.disabled && "background: transparent !important;"}
}
`;

const Input = styled.input.attrs({
    type: "radio",
    checked: props => props.checked,
    disabled: props => props.disabled,
    onChange: props => props.onChange
  })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:disabled ~ .checkmark {
    background-color: ${props => props.disabledBgColor ? props.disabledBgColor : "#d8d8d8"};
    pointer-events: none;
    cursor: not-allowed;
    border: 1px solid ${props => props.disabledBorderColor ? props.disabledBorderColor : "#d8d8d8"};
  }

  &:disabled ~ .checkmark:after {
    display: block;
  }

  &:checked ~ .checkmark {
    background-color: ${({ theme, bgColor }) => bgColor ? bgColor : checkedBgTheming(theme)};
    border: 1px solid ${({ theme, bgColor }) => bgColor ? bgColor: checkedBgTheming(theme)};
  }

  &:checked ~ .checkmark:after {
    display: block;
  }
  `;