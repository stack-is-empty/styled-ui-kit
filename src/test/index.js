import React from 'react';
import { Theme, configTheme, themeDefault, Button, FormRadio, FormCheckbox, FormInput, FormNumber, Form, Tooltip } from '../'

export default class App extends React.Component { 
    constructor(props) {
        super(props);
        this.state ={
            isChecked: false
        }
    }

    onChange = value =>{
        this.setState({ isChecked: !this.state.isChecked })
    }

    render() {
        const customTheme = {
            background: 'red',
            button: {...themeDefault.button, primaryBg: '#7d61dc'}
        };
        const theme = configTheme(customTheme);

        return(
            <Theme theme={theme}>
                <div className = "wrapper">
                    <div className = "flex" style={{marginLeft: '50px'}}>
                        <Button primary >Sample button</Button>
                        <Form>
                            <div> 
                                <FormCheckbox name="radio" checked={this.state.isChecked} value="shared" onCheck={this.onChange}/>
                            </div>
                        </Form>
                        <Button primary disabled>Sample Primary button</Button>
                        <Button disabled>Template</Button>
                        <h1>Custom Radio Buttons</h1>
                      
                    </div>
                    <div>
                    <Form>
                        <div> 
                            <FormInput label="name"  name="name" disabled/>
                            <FormNumber label="value" name="name" />
                        </div>
                    </Form>
                        <Tooltip textClassName="schedule-tooltip" title="sample">
                            Sample
                        </Tooltip>
                    </div>
                </div>
            </Theme>
        )
    }
}
