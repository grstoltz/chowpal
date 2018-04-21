/* eslint max-len: 0 */
import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Button from 'mdbreact';
import { Col, Row, Container } from '../components/Grid';
import { PantryList } from '../components/PantryList';
import PantryCard from '../components/PantryCard';
import './Main.css';
import API from '../utils/API';

class Upload extends Component {
    state = {
      fileData: null,
      store: null,
      user_id: null,
    };

    componentDidMount() {
      this.getUserData();
    }

    getUserData() {
      API.getUserData().then((result) => {
        this.setState({ user_id: result.data.id });
      });
    }

    handleSubmit = (event) => {
      event.preventDefault();

      if (this.state.fileData && this.state.store) {
        this.fileUpload(this.state.fileData).then((response) => {
          console.log(response);
        });
      }
    }

    handleFileChange = (event) => {
      console.log(event.target.files[0]);
      this.setState({ fileData: event.target.files[0] });
    }

    handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });
    };


    fileUpload = (file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('store', this.state.store);
      formData.append('user_id', this.state.user_id);
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      return API.postReceiptImage(formData, config).then(result => console.log(result));
    }

    render() {
      return (
        <div>
          <Container main>
            <Row params='pt-3 pb-3'>
              <h1 className='text-center'>Add a Receipt</h1>
            </Row>
            <PantryList title='Upload a Receipt'>
              <Form>
                <FormGroup>
                  <Label for='exampleText' className='black-text'>What store is this receipt from?</Label>
                  <Input value={this.state.UPCText} onChange={this.handleInputChange} type='textarea' name='store' id='exampleText' />
                </FormGroup>
                <FormGroup>
                  <Label for='exampleFile' className='black-text'>File:</Label>
                  <Input type='file' name='file' onChange={this.handleFileChange} id='exampleFile' />
                  <FormText color='muted'>
                                Upload an image from your camera or photo library.
                  </FormText>
                </FormGroup>
                <FormGroup check row>
                  <Col size='10'>
                    <button type='button' onClick={this.handleSubmit} className='btn btn-primary'>Submit</button>
                  </Col>
                </FormGroup>
              </Form>
            </PantryList>
          </Container>
        </div>
      );
    }
}

export default Upload;
