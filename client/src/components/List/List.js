import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './List.css'

export default class List extends React.Component {
    render() {
        return (
            <div>
                <h3 className='centered navMargin'>My Pantry</h3>
                <p className='centered'>Heres the stuff u gotz:</p>
                <ListGroup>
                    <ListGroupItem tag="a" href="#" action>Cras justo odio</ListGroupItem>
                    <ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
                    <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <p />
            </div>
        );
    }
}