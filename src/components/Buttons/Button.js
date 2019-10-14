import React ,{Component} from 'react';
import {BasicButton} from './ButtonTypes'

type Props = {
    children : any
}

const defaultProps = {
    disabled: false,
    size: 'default',
  };

class Button extends Component<Props>{
    static defaultProps = defaultProps;
    render(){
        const {
            children
        } = this.props;
        return(
            <BasicButton {...this.props}>
                { this.props.getTemplate && this.props.getTemplate() }
                {children}
            </BasicButton>
        )
    }
}

export default Button;