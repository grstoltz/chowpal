
import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

export default class MaterialCard extends React.Component {
    render() {
        return (
            <div>
                <Card reverse>
                    <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                    <CardBody>
                        <CardTitle>{this.props.cardTitle}</CardTitle>
                        <CardText>{this.props.cardText}</CardText>
                        <Button href="#">{this.props.buttonText}</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}