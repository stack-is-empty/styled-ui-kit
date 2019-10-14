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
    labelClassName: string,
    groupClassName: string,
    size: Number,
    onChangeCheckbox: Function,
    onCheck: Function,
    disabled: boolean,
    hideErrMsg: boolean
  }

  class FormCheckbox extends React.Component<Props>{
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
        size: 14,
        onCheck: _noop,
        onChangeCheckbox: _noop,
        input: { value: '', name: '', checked: false },
        disabled: false
    };

  
    onChange = e => {
        e.preventDefault();
        const { checked, onCheck, value } = this.props;
        if (_isUndefined(checked)) this.setState({ isChecked: !this.state.isChecked });
        else if (onCheck) onCheck(!checked ? value : '');
    }

    render(){
      const { input, label, onChangeCheckbox, name, size, value, groupClassName, labelClassName, meta: { touched, error }, className, checked, disabled, hideErrMsg, noTick, defaultBorderColor, bgColor, disabledBorderColor, disabledBgColor } = this.props;
      const { isChecked } = this.state;

      return (
        <FormField
            label={label}
            noLabel={!label}
            type="checkbox"
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
                    value={value || input.value}
                    disabledBgColor={disabledBgColor}
                    bgColor={bgColor}
                    disabledBorderColor={disabledBorderColor}
                    onChange={onChangeCheckbox}
                    checked={!disabled && (_isUndefined(checked) ? (isChecked || input.checked) : (checked || input.checked))}
                    disabled={disabled} />
                <StyledCheckboxCheckMark noTick={noTick} defaultBorderColor={defaultBorderColor} disabled={disabled} size={size} onClick={e => !disabled && this.onChange(e)} className={`${className} checkmark`}></StyledCheckboxCheckMark >
        </FormField>
      )
    }
  }

export default FormCheckbox;

const getCheckMarkPosition = props => {
  switch (props.size) {
    case 16:
      return `
      left: 6px;
      top: 2px;
      width: 3px;
      height: 8px;`;

    case 12:
      return `
      left: 5px;
      top: 2px;
      width: 2px;
      height: 6px;`;

    case 14:
      return `
      left: 5px;
      top: 2px;
      width: 3px;
      height: 7px;`;

    default:
      return `
      left: 5px;
      top: 2px;
      width: 3px;
      height: 7px;`;
  }
}

/* Create a custom checkbox button */
const StyledCheckboxCheckMark = styled.span`
position: absolute;
height: ${props => (props.size && `${props.size}px`) || "14px"};
width: ${props => (props.size && `${props.size}px`) || "14px"};
border: 1px solid ${props => props.defaultBorderColor ? props.defaultBorderColor : "#d2d2d2"};
background-color: #fff;
border-radius: 2px;

&:after {
    content: "";
    position: absolute;
    ${props => getCheckMarkPosition(props)};
    border: solid white;
    border-width: 0 1.4px 1.4px 0;
    -webkit-transform: rotate(35deg);
    -ms-transform: rotate(35deg);
    transform: rotate(35deg);

    ${props => props.noTick && props.disabled && "border: solid transparent !important;"}
}
`;

const Input = styled.input.attrs({
    type: "checkbox",
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
    border: 1px solid ${({ theme, bgColor }) => bgColor ? bgColor : checkedBgTheming(theme)};
  } 

  &:checked ~ .checkmark:after {
    display: block;
  }
  `;