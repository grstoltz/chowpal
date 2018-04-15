import React from "react";
// import ChowNav from "../components/ChowNav/ChowNav";
import Container from "../components/Grid/Container";
// import Row from "../components/Grid/Row";
// import Col from "../components/Grid/Col";
import MaterialList from "../components/List";
import MaterialButton from "../components/SelectButton/MaterialButton";
import './Main.css';

import {get} from 'axios';

const Main = () => (
    <div>
        <Container>
            <h1 className="pantryHead">My Pantry</h1>
            <MaterialButton link="/auth/login" text="Login" />
            <MaterialList ></MaterialList>
            <MaterialButton buttonText='Take me somewhere' iconClass='fa fa-camera-retro ml-2 fa-lg' buttonColor='white'></MaterialButton>
        </Container>
    </div>
)

export default Main;
