
import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const ChowCard = (props) => {
    return (
        <Row>
            <Col sm="6">
                <Card body>
                    <CardTitle>This is what my title is now</CardTitle>
                    <CardText>this is the best text</CardText>
                    <Button>to OZ!</Button>
                </Card>
            </Col>
            <Col sm="6">
                <Card body>
                    <CardTitle>This is what my title is now</CardTitle>
                    <CardText>this is the best text</CardText>
                    <Button>back to kansas</Button>
                </Card>
            </Col>
        </Row>
    );
};

export default ChowCard;