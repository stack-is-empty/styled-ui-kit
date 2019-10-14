
# Styled-Ui-Kit

StyledUiKit is a UI component library
built with [styled-components][sc].

## Installed

```sh
npm i --save styled-ui-kit
```
## Getting Started
### index.js

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import { globalConfig } from 'styled-ui-kit'

globalConfig();

ReactDOM.render(<App/>, document.getElementById('root'));
```

### Default theme

```js
{
  background: '#DFE5EA',
  textColor: '#111315',
  alternateTextColor: '#4a4a4a',
  secondaryTextColor: '#4a5258',
  linkColor: '#206dd1',
  hoverLinkColor: '#363636',
  font: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '14px',
    fontWeight: "normal",
    fontDefault: 300,
    fontSemibold: 500,
    fontBold: 600
  }, 
  header: {
    background: '#f8f9fa',
    borderColor: '#dadfe3'
  },
  card: {
    header: {
      background: '#f8f9fa',
      borderColor: '',
      titleColor: '#2D1133'
    },
    body: {
      background: '#fff'
    },
    footer: {
      background: '#f8f9fa'
    }
  },
  button: {
    baseRadius: '2px',
    smallFontSize: '13px',
    defaultBg: '#fff',
    primaryBg: '#253649',
    disabledBg: '#efefef',
    defaultTextColor: '#111315',
    primaryTextColor: '#fff',
    disabledTextColor: '#111315',
    borderDefault: '#dadfe3',
    borderPrimary: '#253649',
    borderDisabled: '#dadfe3',
    hoverDefault: '',
    hoverPrimary: '#253649',   
    hoverDisabled: ''
  },
  brand: {
    primary: '#cce5ff',
    secondary: '#e2e3e5',
    success: '#d4edda',
    danger: '#f8d7da',
    warning: '#fff3cd',
    info: '#d1ecf1',
    light: '#fefefe',
    dark: '#d6d8d9'
  }
}
```

### app.jsx
#### Configuring default theme properties with the custom theme properties directly
```jsx
import React from 'react'
import { Theme, configTheme, Button, Alert, Tooltip } from 'styled-ui-kit'

const App = props => {
  const customTheme = { background: 'red', button: { primaryBg: 'yellow' } };
  const theme = configTheme(customTheme);
  return(
    <Theme theme={theme}>
      <div className="wrapper"> 
        <Alert info>This is the Example of info alert</Alert>
        <Button>Cancel</Button>
        <Button primary>
          <Tooltip title="SAVE">
            Save
          </Tooltip>
        </Button>
      </div>
    </Theme>
  )};
export default App;
```
#### Overwriting default theme properties with the custom theme properties
```jsx
import React from 'react'
import { Theme, configTheme, Button, themeDefault, Alert, Tooltip } from 'styled-ui-kit'

const App = props => {
  const customTheme = { background: 'red', button: { ...themeDefault.button, primaryBg: 'yellow' } };
  const theme = configTheme(customTheme);
  return(
    <Theme theme={theme}>
      <div className="wrapper"> 
        <Alert info>This is the Example of info alert</Alert>
        <Button>Cancel</Button>
        <Button primary>
          <Tooltip title="SAVE">
            Save
          </Tooltip>
        </Button>
      </div>
    </Theme>
)};
export default App;
```

## Documentation

- [Docs](currently not available)