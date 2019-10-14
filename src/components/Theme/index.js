// @flow
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '../../constants/application';


type Props = {
  theme: Object,
  children: any,
}

class Theme extends React.Component<Props>{
  static defaultProps= {
      theme: {}
  };

  checkDefaultTheme = ()=>{
    const {theme} = this.props;
    if(Object.keys(theme).length === 0 && theme.constructor === Object) return true;
    return false;
  }

  render(){
    const {
      children,
      theme
    } = this.props;
    const invertedValues = { invertedBg: themeDefault.button.primaryTextColor ? themeDefault.button.primaryTextColor : '',
    invertedTextColor: themeDefault.button.primaryBg ? themeDefault.button.primaryBg : '',
    borderInverted: themeDefault.button.primaryBg ? themeDefault.button.primaryBg : '' };
    const defaultTheme = { ...themeDefault, button: { ...themeDefault.button, ...invertedValues }};

    return (
      <ThemeProvider theme={this.checkDefaultTheme() ? defaultTheme : theme}>  
        {children}
      </ThemeProvider>
    )
  }
}

export default Theme;
