import React, { Component } from 'react';
/* eslint max-len: 0, react/prefer-stateless-function: 0 */
import { Redirect } from 'react-router-dom';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Row, Container } from '../components/Grid';
import { PantryList } from '../components/PantryList';
import './Main.css';
import API from '../utils/API';

class Upload extends Component {
    state = {
      fileData: null,
      store: null,
      user_id: null,
      redirect: false,
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
        this.fileUpload(this.state.fileData);
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
      /* eslint no-undef: 0 */
      const formData = new FormData();
      formData.append('file', file);
      formData.append('store', this.state.store);
      formData.append('user_id', this.state.user_id);
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      API.postReceiptImage(formData, config).then((result) => {
        console.log(result.status);
        if (result.status === 200) {
          this.setState({ redirect: true });
        }
      });
    }

    render() {
      if (this.state.redirect) {
        return <Redirect to='/' />;
      }
      return (
        <div>
          <Container main>
            <Row params='pt-5 pb-3'>
              <h1 className='centered'>Add a Receipt</h1>
            </Row>
            <Row params='pt-3 pb-3'>
              <a href='/'><h6 className='pl-3'>&laquo; Back to My Pantry</h6></a>
            </Row>
            <PantryList title='Upload a Receipt'>
              {this.state.user_id ?
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
                  <FormGroup>
                    <button type='button' onClick={this.handleSubmit} className='btn btn-primary ml-0'>Submit</button>
                  </FormGroup>
                </Form> : <h5 className='grey-text pt-3 pb-3'>Log in to upload a receipt!</h5>}
            </PantryList>
          </Container>
        </div>
      );
    }
}

export default Upload;
