import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Example extends React.Component {
    render() {
        return (
            <div>
                <h3>List with anchors to item </h3>
                <p> Example description of the list here</p>
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