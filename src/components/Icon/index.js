import React from 'react';
import styled from 'styled-components';
import { applyModifiers, deleteByVal } from '../../utils';
import Icons from './Icons';

type Props = {
    xmini: boolean,
    mini: boolean,
    small: boolean,
    medium: boolean,
    large: boolean,
    xlarge: boolean,
    xxlarge: boolean,
    disabled: boolean,
  }

const Icon = (props: Props) => {
    const { name, size, color, className, viewBox, ...restProps } = props;

    const path = {
        fill: color,
    };
    const getPath = iconName => {
        if (iconName in Icons) {
            return Icons[iconName];
        }

        console.warn(`icon ${iconName} does not exist.`);
        return '';
    };

    const width = size instanceof Array ? size[0] : size;
    const height = size instanceof Array ? size[1] : size;

    const variants = { _xmini: props.xmini, _mini: props.mini, _small: props.small,
        _medium: props.medium, _large: props.large, 
        _xlarge: props.xlarge, _xxlarge: props.xxlarge, _disabled: props.disabled };
        const itemProps = deleteByVal(variants, false);

    return (
        <StyledSvg            
            width={`${width}px`}
            {...itemProps}
            height={`${height}px`}
            viewBox={viewBox}
            {...restProps}>
            <path style={path} d={getPath(name)} />
        </StyledSvg>
    );
};

const StyledSvg = styled.svg.attrs({
    className: (props) => applyModifiers(props, StyledSvg)
  })`
  display: inline-block;
  vertical-align: middle;

    &${() => StyledSvg}_xmini {
        height: 12px;
        width: 12px;
    }

    &${() => StyledSvg}_mini {
        height: 16px;
        width: 16px;
    }

    &${() => StyledSvg}_small {
        height: 32px;
        width: 32px;
    }

    &${() => StyledSvg}_medium {
        height: 64px;
        width: 64px;
    }

    &${() => StyledSvg}_large {
        height: 128px;
        width: 128px;
    }

    &${() => StyledSvg}_xlarge {
        height: 256px;
        width: 256px;
    }

    &${() => StyledSvg}_xxlarge {
        height: 512px;
        width: 512px;
    }

    &${() => StyledSvg}_disabled {
        cursor: not-allowed;
        opacity: .3;
    }
  `;

Icon.defaultProps = {
    size: 12,
    viewBox: '0 0 1024 1024',
    xmini: false,
    mini: false,
    small: false,
    medium: false,
    large: false,
    xlarge: false,
    xxlarge: false,
    disabled: false,
};

export default Icon;
