import React from "react";
// import ChowNav from "../components/ChowNav/ChowNav";
import Container from "../components/Grid/Container";
// import Row from "../components/Grid/Row";
// import Col from "../components/Grid/Col";
import MaterialList from "../components/List";
import MaterialButton from "../components/SelectButton";

const Main = () => (
    <div>
        <Container>
            <h1>My Pantry</h1>
            <MaterialList ></MaterialList>
            <MaterialButton></MaterialButton>
        </Container>
    </div>
)

export default Main;