import React from 'react';
import styled from 'styled-components';
import Icon from '../../../Icon';

type Props = {
    className: string,
    containerClassName: string,
    children: any,
    htmlFor: string,
    showHint: boolean,
    hintMessage: string
}

const FormLabel = ({ children, className, onCheck, htmlFor, showHint, hintMessage, containerClassName }: Props) => {
    return (
        <StyledLabel
            className={className}
            onClick={onCheck}
            containerClassName={containerClassName}
            htmlFor={htmlFor}>
            { showHint ? <StyledLabelPosition>{children}</StyledLabelPosition> : children }
            {
                showHint &&
                <StyledLabelHint>
                    <Icon name="info"
                          color="#FFFFFF"
                          size={8}
                          title={hintMessage}
                          className="hint-icon"
                        />
                </StyledLabelHint>
            }
        </StyledLabel>
    );
};

const StyledLabel = styled.label`
    color: #313741;
    display: inline-block;

    ${props => props.containerClassName === 'check-container' && `
        position: relative;
        padding-left: 24px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 20px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;`
    }
`;

const StyledLabelPosition = styled.div`
    float: left;
    width: 100%;
`;

const StyledLabelHint = styled.div`
background-color: #C5CFDE;
border-radius: 50px;
cursor: pointer;
float: right;
height: 18px;
margin-left: 5px;
margin-top: -20px;

.hint-icon {
    padding: 5px;
}
`;

export default FormLabel;
