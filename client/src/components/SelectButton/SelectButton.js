import React from 'react';
import { Button } from 'reactstrap';

export default class SelectButton extends React.Component {
    render() {
        return (
            <div>
                <Button href={this.props.link} color="primary">{this.props.text}</Button>{' '}
            </div>
        );
    }
}
