import React, { Component } from 'react';
import { Row, Container } from '../components/Grid';
import { PantryList } from '../components/PantryList';
import PantryCard from '../components/PantryCard';
import './Main.css';
import API from '../utils/API';

class Main extends Component {
    state = {
      pantryItems: [],
      user_id: null,
    }

    componentDidMount() {
      this.getUserData();
    }

    getUserData() {
      API.getUserData().then((result) => {
        console.log(result);
        this.setState({ user_id: result.data.id });
        this.getPantryItems(this.state.user_id);
      });
    }

    getPantryItems(id) {
      API.getPantryItems({ id })
        .then((result) => {
          this.setState({ pantryItems: result.data });
        });
    }

      handleDeleteButton = (event) => {
        API.deleteFood({ id: event.target.id }).then(this.getPantryItems());
      }

      renderItems = () => (this.state.pantryItems.length > 0 ?
        this.state.pantryItems.map(item => (
          <PantryCard
            id={item.id}
            name={item.name}
            date={item.purchase_date}
            handleDeleteButton={this.handleDeleteButton}
          />
        )) : <h5>Save some articles here!</h5>
      )

      render() {
        return (
          <div>
            <Container main>
              <Row params='pt-5 pb-5'>
                <h1 className='centered'>My Pantry</h1>
              </Row>
              <PantryList title='My Items'>
                {this.state.user_id ? this.renderItems() : <h5 className='grey-text pt-3'>Log in to add some items!</h5>}
              </PantryList>
            </Container>
          </div>
        );
      }
}

export default Main;
