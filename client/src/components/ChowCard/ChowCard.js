
import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import "./ChowCard.css";
const ChowCard = (props) => {
    return (
        <Row>
            <Col sm="12">
                <Card body>
                    <CardTitle className="centerTitle">{props.cardTitle}</CardTitle>
                    <img src="http://via.placeholder.com/300x300" alt="placeholder"></img>
                    <CardText className="centerText">{props.cardText}</CardText>
                    <Button tag="a" href="#">{props.buttonText}</Button>
                </Card>
            </Col>
        </Row>
    );
};

export default ChowCard;