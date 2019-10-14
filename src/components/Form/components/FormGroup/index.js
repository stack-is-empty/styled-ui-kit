import React from 'react';
import styled from 'styled-components';
import { applyModifiers, deleteByVal } from '../../../../utils';

type Props = {
    className: string,
    children: any,
    error: boolean,
    success: boolean,
    hideErrLabelColor: boolean
}

const StyledFormGroup = styled.div.attrs({
  className: props => applyModifiers(props, StyledFormGroup)
})`
&${() => StyledFormGroup}_error {
input[type="text"], input[type="number"] {
    border: 1px solid ${({theme}) => theme.input && theme.input.error ? theme.input.error.borderColor : "#f65050"} !important;
}
}
`;

const FormGroup = ({ children, groupClassName, error, success, hideErrLabelColor }: Props) => {
    if (hideErrLabelColor) {
        const variant = { _success: success };
        const itemProps = deleteByVal(variant, false);

        return (
            <StyledFormGroup className={groupClassName} {...itemProps}>{children}</StyledFormGroup>
        );
    }

    const variants = { _error: error, _success: success };
    const restProps = deleteByVal(variants, false);
    return (
        <StyledFormGroup className={groupClassName} {...restProps}>{children}</StyledFormGroup>
    );
};

export default FormGroup;