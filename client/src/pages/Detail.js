import React, { Component } from 'react';
/* eslint max-len: 0, react/prefer-stateless-function: 0 */
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Button from 'mdbreact';
import { Col, Row, Container } from '../components/Grid';
import { PantryList } from '../components/PantryList';
import PantryCard from '../components/PantryCard';
import './Main.css';
import API from '../utils/API';

class Detail extends Component {
    state = {
      item: {},
      fileData: null,
      UPCText: null,
      user_id: null,
    };

    componentDidMount() {
      this.getUserData();
    }

    getUserData() {
      API.getUserData().then((result) => {
        this.setState({ user_id: result.data.id });
        this.getPendingItems(this.state.user_id);
      });
    }

    getPendingItems() {
      API.getItem(this.props.match.params.id)
        .then(res => this.setState({ item: res.data[0] }))
        .catch(err => console.log(err));
    }

    handleSubmit = (event) => {
      event.preventDefault();
      if (this.state.UPCText) {
        this.textUpload();
      } else if (this.state.fileData) {
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

    textUpload = () => {
      API.putUPCText({
        UPC: this.state.UPCText.trim(),
        id: this.props.match.params.id,
        user_id: this.state.user_id,
      })
        .then(result => console.log(result))
        .catch(err => console.log(err));
    }

    fileUpload = (file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('id', this.props.match.params.id);
      formData.append('user_id', this.state.user_id);
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      return API.postUPCImage(formData, config).then(result => console.log(result));
    }

    render() {
      return (
        <div>
          <Container main>
            <Row params='pt-5 pb-3'>
              <h1 className='text-center'>Update Item</h1>
            </Row>
            <Row params='pt-3 pb-3'>
              <a href='/'><h6 className='pl-3'>&laquo; Back to My Pantry</h6></a>
            </Row>
            <PantryList title={this.state.item.product_name}>
              <Form>
                <h3 className='black-text'>Upload an image of the UPC</h3>
                <FormGroup>
                  <Label for='exampleFile' className='black-text'>File:</Label>
                  <Input type='file' name='file' onChange={this.handleFileChange} id='exampleFile' />
                  <FormText color='muted'>
                        Upload an image from your camera or photo library.
                  </FormText>
                </FormGroup>
                <h3 className='black-text pt-3'>Manually enter in a UPC</h3>
                <FormGroup>
                  <Label for='exampleText' className='black-text'>Enter a UPC Here</Label>
                  <Input value={this.state.UPCText} onChange={this.handleInputChange} type='textarea' name='UPCText' id='exampleText' />
                </FormGroup>
                <FormGroup>
                  <button type='button' onClick={this.handleSubmit} className='btn btn-primary ml-0'>Submit</button>
                </FormGroup>
              </Form>
            </PantryList>
          </Container>
        </div>
      );
    }
}

export default Detail;
