import React from 'react';
import styled from 'styled-components';

type Props = {
    className: string,
    children: any
}

const FormError = ({ children, className }: Props) => (
    <StyledError>
        {children}
    </StyledError>
);

const StyledError = styled.div`
    color: ${({theme}) => theme.input && theme.input.error ? theme.input.error.borderColor : "#f65050"} !important;
    font-size: .9rem;
    margin-top: 5px;
`;

export default FormError;
