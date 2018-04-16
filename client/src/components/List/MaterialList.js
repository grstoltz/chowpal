import React from 'react';
import { ListGroup, ListGroupItem } from 'mdbreact'
import './List.css';
            
export default class MaterialList extends React.Component {
    render() {
        return (
            <ListGroup>
                <ListGroupItem hover href="#">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">This some bacon</h5>
                        <small>Bought: 3 days ago</small>
                    </div>
                    <p class="mb-1">Here is some info about your baconz</p>
                    <small>info about where it was bought and price</small>
                    {/* <img className='foodPic' src="https://upload.wikimedia.org/wikipedia/commons/3/31/Made20bacon.png" alt="bacon"></img> */}
                </ListGroupItem>
                <ListGroupItem hover href="#">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">This some bacon</h5>
                        <small>Bought: 3 days ago</small>
                    </div>
                    <p class="mb-1">Here is some info about your baconz</p>
                    <small>info about where it was bought and price</small>
                    {/* <img className='foodPic' src="https://upload.wikimedia.org/wikipedia/commons/3/31/Made20bacon.png" alt="bacon"></img> */}
                </ListGroupItem>
                <ListGroupItem hover href="#">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">This some bacon</h5>
                        <small>Bought: 3 days ago</small>
                    </div>
                    <p class="mb-1">Here is some info about your baconz</p>
                    <small>info about where it was bought and price</small>
                    {/* <img className='foodPic' src="https://upload.wikimedia.org/wikipedia/commons/3/31/Made20bacon.png" alt="bacon"></img> */}
                </ListGroupItem>
                <ListGroupItem hover href="#">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">This some bacon</h5>
                        <small>Bought: 3 days ago</small>
                    </div>
                    <p class="mb-1">Here is some info about your baconz</p>
                    <small>info about where it was bought and price</small>
                    {/* <img className='foodPic' src="https://upload.wikimedia.org/wikipedia/commons/3/31/Made20bacon.png" alt="bacon"></img> */}
                </ListGroupItem>
            </ListGroup>
        );
    }
}
         
