import React from 'react';
//import { ListGroup, ListGroupItem } from 'mdbreact'
import { Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact'
import './List.css';
            
export const PantryList = ({title, children}) => {
        return (
            <div className="row mb-5">
            <div className="col-12">
                <div className="card card-outline-secondary">
                    <div className="card-header">
                        <h3 className="mb-0">{title}</h3>
                    </div>
                  <div className="card-body">
                  {children}
                  </div>
                </div>
            </div>
        </div>
        );
    }

         
