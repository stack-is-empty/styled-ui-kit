import React from 'react';
import styled from 'styled-components';

type Props = {
    onClick: Function,
    className: string,
    position: string,
    textClassName: string,
    title: string,
    children: any
}

const Tooltip = ({ onClick, children, title, className, textClassName, textStyle, style, position }) => (
    <StyledTooltip style={style} className={className} onClick={onClick}>
        {children}
        { title && <StyledTooltipText 
            position={position} 
            style={textStyle}
            className={`${textClassName} tooltiptext`}>
            {title}
        </StyledTooltipText>}
    </StyledTooltip>
);

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

const chooseTooltipPosition = props => {
    switch (props.position) {
      case 'top':
        return `
            bottom: 150%;
            left: 50%;
            margin-left: -50px;`;

      case 'bottom':
        return `
            top: 150%;
            padding-top: 2px;
            left: 50%;
            margin-left: -50px;`;

      case 'left':
        return `  
            top: -5px;
            right: 150%;
        `;

      case 'right':
        return `
            top: -5px;
            left: 150%;
        `;

      default:
        return `
            top: 150%;
            padding-top: 2px;
            left: 50%;
            margin-left: -50px;`;

    }
}

const chooseTextPosition = props => {
      switch (props.position) {
        case 'top':
          return `
            top: 100%;
            left: 50px;
            margin-left: -5px;
            border-color: black transparent transparent transparent;`;

        case 'bottom':
          return `
            bottom: 100%;
            left: 50px;
            margin-left: -5px;
            border-color: transparent transparent black transparent;`;
  
        case 'left':
          return `
            top: 50%;
            left: 100%;
            margin-top: -5px;
            border-color: transparent transparent transparent black;
            
          `;
  
        case 'right':
          return `
            top: 50%;
            right: 100%;
            margin-top: -5px;
            border-color: transparent black transparent transparent;
          `;
  
        default:
          return `
            bottom: 100%;
            left: 50%;
            margin-left: -5px;
            border-color: transparent transparent black transparent;`;
  
      }
  }

const StyledTooltip = styled.a`
position: relative;
display: inline-block;

&:hover .tooltiptext {
    visibility: visible;
}
`;

const StyledTooltipText = styled.span`
visibility: hidden;
width: 100px;
background-color: #1d1d1d;
color: #fff;
text-align: center;
border-radius: 2px;
padding: 5px 0;
position: absolute;
z-index: 1;
letter-spacing: 0.1px;
font-size: 11px;
${props => chooseTooltipPosition(props)};

&::after {
    content: "";
    position: absolute;
    border-width: 5px;
    border-style: solid;
    ${props => chooseTextPosition(props)};
}
`;