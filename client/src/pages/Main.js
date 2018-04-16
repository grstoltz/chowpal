import React, { Component } from "react";
import Container from "../components/Grid/Container";
import { PantryList } from "../components/PantryList";
//import MaterialButton from "../components/SelectButton/MaterialButton";
import PantryCard from "../components/PantryCard";
import './Main.css';
import API from "../utils/API";

class Main extends Component {

    state = {
        pantryItems: [],
    }

    componentDidMount(){
        this.getPantryItems()
       }
    
    getPantryItems(){
        // API.getPantryItems()
        //   .then(result => this.setState({pantryItems: result}))
      }

    renderItems = () => {
        return (<div>
                <PantryCard title="1st" text="This is the first card" />
                <PantryCard title="2nd" text="This is the second card" />
            </div>
        )
      }

    render() {
        return (
    <div>
        <Container>
            <h1 className="pantryHead">My Pantry</h1>
            <PantryList title="My Items">
               {this.renderItems()}
            </PantryList>
        </Container>
    </div>
        )
    }
}

export default Main;
