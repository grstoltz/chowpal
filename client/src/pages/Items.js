import React, { Component } from "react";
import  Container from "../components/Grid/Container";
import  Row from "../components/Grid/Row";
import  Col from "../components/Grid/Col";
import { PantryList } from "../components/PantryList";
import PantryCard from "../components/PantryCard";
import './Main.css';
import API from "../utils/API";

class Items extends Component {

    state = {
        pendingItems: [],
    }

    componentDidMount(){
        this.getPendingItems()
       }
    
    getPendingItems(){
        API.getPendingItems({id: 1})
          .then(result => this.setState({pendingItems: result.data}))
      }


    handleDeleteButton = event => {
        API.deleteItem(event.target.id).then(this.getPendingItems())
    }


      renderItems = () => {
        return (this.state.pendingItems.length > 0 ?
          this.state.pendingItems.map(item => (
          <PantryCard
            id={item.id}
            name={item.name}
            date={item.purchase_date}
            handleDeleteButton={this.handleDeleteButton}
          />
        )) : <h5>"No Pending Items!"</h5>
      );
      }

    render() {
        return (
    <div>
        <Container main={true}>
            <Row params="pt-3 pb-3">
                <h1 className="text-center">My Items</h1>
            </Row>
            <PantryList title="My Items">
               {this.renderItems()}
            </PantryList>
        </Container>
    </div>
    
        )
    }
}

export default Items;
