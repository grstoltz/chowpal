import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import MaterialButton from '../SelectButton/MaterialButton.js';

export default class FileInput extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup row>
                    <Label for="exampleFile" sm={2}>File: </Label>
                    <Col sm={10}>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                            Here we can add in a description of how to upload files.  :)
                        </FormText>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <MaterialButton buttonColor='primary' buttonText='Submit!'></MaterialButton>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}