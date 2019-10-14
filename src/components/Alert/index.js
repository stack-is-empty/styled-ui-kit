import React from 'react';
import _noop from 'lodash/noop';
import styled from 'styled-components';
import { applyModifiers, deleteByVal } from '../../utils';
import Icon from '../Icon';

let time;

type Props = {
    type: string,
    className: string,
    color: string,
    getTemplate: any,
    timeout: number,
    noTimeout: boolean,
    custom: string,
    onClick: Function,
    children: any,
    info: any,
    warning: any,
    success: any,
    danger: any,
    light: any,
    primary: any,
    secondary: any,
    dark: any
  }
  
class Alert extends React.Component<Props>{

    static defaultProps= {
        primary: false,
        secondary: false,
        warning: false,
        info: false,
        noTimeout: false,
        success: false,
        danger: false,
        light: false,
        dark: false,
        onClick: _noop,
        getTemplate: null
    };
              /* eslint-disable */
    constructor(props) {
        super(props);
        if (!props.danger && !props.noTimeout) {
            time = setTimeout(() => {
                this.refs.alert.style.display = 'none' 
            }, props.timeout ? props.timeout : 2000);
        }
        this.state = {
            visible: true,
        };
    }

    componentWillUnmount() {
       clearTimeout(time);
    }

    toggle = () => {
        this.setState({ visible: false });
        this.props.onClick();
    }

    render() {
        const { children, color, className, custom, getTemplate, primary, secondary, closable,
            info, success, danger, warning, light, dark } = this.props;
        const variants = { _info: info, _primary: primary, _secondary: secondary,
        _warning: warning, _success: success, _danger: danger, _light: light, _dark: dark }
        const restProps = deleteByVal(variants, false);
        const colors = { _primary: '#004085', _secondary: '#383d41', _success: '#155724',
        _danger: '#721c24', _warning: '#856404', _info: '#0c5460', _light: '#818182', _dark: '#1b1e21' };
        const iconColor = Object.keys(restProps).length !== 0 ? colors[Object.keys(restProps)[0]] : color ? color : "#111315"

        return (
            <div ref="alert">
                {this.state.visible && 
            <StyledAlert 
                custom={custom} 
                className={className}
                {...restProps}
                >
                    <div className="flex">
                        <div className='flex-grow-10'>
                            {getTemplate ? getTemplate : children}
                        </div>
                         <div className='flex flex-grow-1 justify-content-end'>
                            {closable && <StyledAlertClose onClick={this.toggle}>
                                <Icon name="close"
                                      color={iconColor}
                                      xmini />
                            </StyledAlertClose>}
                        </div>
                    </div>
                </StyledAlert>
                }
            </div>
        );
    }
    /* eslint-enable */
  }
  
  const StyledAlert = styled.div.attrs({
    className: props => applyModifiers(props, StyledAlert)
  })`
    color: ${props => props.color ? props.color: "#111315"};
    font-size: 14px;
    position: relative;
    padding: 12px 20px;
    width: auto;
    min-width: 50px;
    margin-bottom: 16px;
    border: 1px solid ${props => props.custom ? "#DADFE3" : "transparent"};
    border-radius: 4px;
    background-color: ${props => props.custom && props.custom};

    &${() => StyledAlert}_primary {
        color: #004085;
        background-color: ${props => typeof props._primary === 'string' ? props._primary : props._primary && (props.theme.brand ? props.theme.brand.primary : "#cce5ff")};
        border-color: #b8daff;
    }

    &${() => StyledAlert}_secondary {
        color: #383d41;
        background-color: ${props => typeof props._secondary === 'string' ? props._secondary : props._secondary && (props.theme.brand ? props.theme.brand.secondary : "#e2e3e5")};
        border-color: #d6d8db;
    }

    &${() => StyledAlert}_success {
        color: #155724;
        background-color: ${props => typeof props._success === 'string' ? props._success : props._success && (props.theme.brand ? props.theme.brand.success : "#d4edda")};
        border-color: #c3e6cb;
    }

    &${() => StyledAlert}_danger {
        color: #721c24;
        background-color: ${props => typeof props._danger === 'string' ? props._danger : props._danger && (props.theme.brand ? props.theme.brand.danger : "#f8d7da")};
        border-color: #f5c6cb;
    }

    &${() => StyledAlert}_warning {
        color: #856404;
        background-color: ${props => typeof props._warning === 'string' ? props._warning : props._warning && (props.theme.brand ? props.theme.brand.warning : "#fff3cd")};
        border-color: #ffeeba;
    }

    &${() => StyledAlert}_info {
        color: #0c5460;
        background-color: ${props => typeof props._info === 'string' ? props._info : props._info && (props.theme.brand ? props.theme.brand.info : "#d1ecf1")};
        border-color: #bee5eb;
    }

    &${() => StyledAlert}_light {
        color: #818182;
        background-color: ${props=> typeof props._light === 'string' ? props._light : props._light && (props.theme.brand ? props.theme.brand.light : "#fefefe")};
        border-color: #fdfdfe;
    }

    &${() => StyledAlert}_dark {
        color: #1b1e21;
        background-color: ${props => typeof props._dark === 'string' ? props._dark : props._dark && (props.theme.brand ? props.theme.brand.dark : "#d6d8d9")};
        border-color: #c6c8ca;
    }
  `;

  const StyledAlertClose = styled.span`
    float: right;
    margin-left: 15px;
    &:hover {
      cursor: pointer;
    }
  `;

export default Alert;