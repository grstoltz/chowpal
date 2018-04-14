import React from 'react';
import { Button } from 'mdbreact';

export default class MaterialButton extends React.Component {
    render() {
        return (
            <div>
                <Button outline color={this.props.buttonColor}>{this.props.buttonText}</Button>
            </div>
        );
    }
}
