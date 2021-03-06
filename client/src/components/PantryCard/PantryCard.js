import React, { Component } from 'react';
/* eslint max-len: 0, react/prefer-stateless-function: 0 */
import './List.css';

class PantryCard extends Component {
  render() {
    return (
      <div className='card mb-2'>
        <div className='card-body mb-2'>

          <h5 className='card-title'><a href={`/items/${this.props.id}`}>{this.props.name}</a>
            <button id={this.props.id} type='button' onClick={this.props.handleDeleteButton} className='close' aria-label='Close'>
              <span id={this.props.id} aria-hidden='true'>&times;</span>
            </button>
          </h5>
          {this.props.date ? <p className='card-text'>Date Purchased: {this.props.date}</p> : ''}
        </div>
      </div>
    );
  }
}

export default PantryCard;

