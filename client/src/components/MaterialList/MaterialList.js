import React from 'react';
//import { ListGroup, ListGroupItem } from 'mdbreact'
import './List.css';
            
export const MaterialList = ({title, children}) => {
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
            
            // <ListGroup>
            //     <ListGroupItem hover href="#">
            //         <div class="d-flex w-100 justify-content-between">
            //             <h5 class="mb-1">This some bacon</h5>
            //             <small>Bought: 3 days ago</small>
            //         </div>
            //         <p class="mb-1">Here is some info about your baconz</p>
            //         <small>info about where it was bought and price</small>
            //         {/* <img className='foodPic' src="https://upload.wikimedia.org/wikipedia/commons/3/31/Made20bacon.png" alt="bacon"></img> */}
            //     </ListGroupItem>
            //     <ListGroupItem hover href="#">
            //         <div class="d-flex w-100 justify-content-between">
            //             <h5 class="mb-1">This some bacon</h5>
            //             <small>Bought: 3 days ago</small>
            //         </div>
            //         <p class="mb-1">Here is some info about your baconz</p>
            //         <small>info about where it was bought and price</small>
            //         {/* <img className='foodPic' src="https://upload.wikimedia.org/wikipedia/commons/3/31/Made20bacon.png" alt="bacon"></img> */}
            //     </ListGroupItem>
            //     <ListGroupItem hover href="#">
            //         <div class="d-flex w-100 justify-content-between">
            //             <h5 class="mb-1">This some bacon</h5>
            //             <small>Bought: 3 days ago</small>
            //         </div>
            //         <p class="mb-1">Here is some info about your baconz</p>
            //         <small>info about where it was bought and price</small>
            //         {/* <img className='foodPic' src="https://upload.wikimedia.org/wikipedia/commons/3/31/Made20bacon.png" alt="bacon"></img> */}
            //     </ListGroupItem>
            //     <ListGroupItem hover href="#">
            //         <div class="d-flex w-100 justify-content-between">
            //             <h5 class="mb-1">This some bacon</h5>
            //             <small>Bought: 3 days ago</small>
            //         </div>
            //         <p class="mb-1">Here is some info about your baconz</p>
            //         <small>info about where it was bought and price</small>
            //         {/* <img className='foodPic' src="https://upload.wikimedia.org/wikipedia/commons/3/31/Made20bacon.png" alt="bacon"></img> */}
            //     </ListGroupItem>
            // </ListGroup>
        );
    }

         
