import React, { Component } from "react";
import './List.css';
        
class PantryCard extends Component {
    render(){
        return (
            <div className="card mb-2">
            <div className="card-body mb-2">

                <h5 className="card-title">{this.props.name}
                    <button id= {this.props.id} type="button" onClick={this.props.handleDeleteButton} class="close" aria-label="Close">
                        <span id= {this.props.id} aria-hidden="true">&times;</span>
                    </button>
                </h5>
                <p className="card-text">Date Purchased: {this.props.date}</p>
            </div>
        </div>
        );
    }
};

export default PantryCard

         
