import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
// import  Row from "../components/Grid/Row";
// import  Col from "../components/Grid/Col";
import { PantryList } from "../components/PantryList";
import PantryCard from "../components/PantryCard";
import './Main.css';
import API from "../utils/API";

class Main extends Component {

    state = {
        pantryItems: [],
        user_id: null
    }
    
    componentDidMount(){
        this.getUserData();
    }
    
    getUserData(){
        API.getUserData().then(result => {
            console.log(result)
            this.setState({user_id: result.data.id})
            this.getPantryItems(this.state.user_id);
        });
    }

    getPantryItems(id){
        API.getPantryItems({id: id})
          .then(result => {
              this.setState({pantryItems: result.data})
            });
      }

      handleDeleteButton = event => {
        API.deleteFood({id: event.target.id}).then(this.getPantryItems())
    }

      renderItems = () => {
        return (this.state.pantryItems.length > 0 ?
          this.state.pantryItems.map(item => (
          <PantryCard
            id={item.id}
            name={item.name}
            date={item.purchase_date}
            handleDeleteButton={this.handleDeleteButton}
          />
        )) : <h5>Save some articles here!</h5>
      );
      }

    render() {
        return (
    <div>
        <Container main={true}>
            <Row params="pt-3 pb-3">
                <h1 className="text-center">My Pantry</h1>
            </Row>
            <PantryList title="My Items">
               {this.renderItems()}
            </PantryList>
        </Container>
    </div>
        )
    }
}

export default Main;
