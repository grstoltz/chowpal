import React, { Component } from "react";
import './List.css';
        
class PantryCard extends Component {
    render(){
        return (
            <div className="card mb-2">
            <div className="card-body mb-2">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.text}</p>
            </div>
        </div>
        );
    }
};

export default PantryCard

         
