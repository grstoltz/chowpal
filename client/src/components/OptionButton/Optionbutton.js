import React from 'react';
import { Button } from 'reactstrap';
import roundButton from '../components/OptionButton/roundButton.css';

export default class SelectButton extends React.Component {
    render() {
        return (
            <div>
                <Button className='round' color="primary" >primary</Button>{' '}
            </div>
        );
    }
}