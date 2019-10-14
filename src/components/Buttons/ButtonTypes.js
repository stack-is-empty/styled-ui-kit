import React from 'react';
import styled from 'styled-components'

const hexa = (hex, alpha) => {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);
  
  
    if (alpha >= 0) {
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    } else {
      return `rgb(${r}, ${g}, ${b})`;
    }
  };

export const BasicButton = styled.button`
    display: flex;
    flex: none;
    align-self: center;
    align-items: center;
    justify-content: center;
    word-break: keep-all;
    cursor: pointer;
    position: relative;
    outline: none;
    margin: 1.1em;
    padding: 0px 10px;
    text-decoration: none;
    line-height:30px;
    text-align: center;
    cursor: ${props => (props.disabled && "not-allowed") || "pointer"};
    opacity: ${props =>(props.disabled && 0.3) || 1};
    background : ${props => props.primary ? 
                    props.theme.button.primaryBg 
                        : props.theme.button.background 
                            ? props.theme.button.background 
                                : props.theme.button.defaultBg}; 
    background-color : ${props => props.disabled && props.theme.button.disabledBg}                            
    border-left: ${props => props.theme.button.borderLeft};

    font-size: ${({theme}) => theme.button.smallFontSize};

    border: 1px solid ${props => props.primary? 
                        props.theme.button.borderPrimary 
                            : props.theme.button.borderDefault};

    border-radius: ${props => props.borderRadius || '2px'};

    color:${props => props.disabled ? props.theme.button.disabledTextColor :  props.primary?
            props.theme.button.primaryTextColor 
                : props.theme.textColor };
    svg {
        vertical-align: sub;
    }
`