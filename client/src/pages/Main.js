import React from "react";
// import ChowNav from "../components/ChowNav/ChowNav";
import Container from "../components/Grid/Container";
// import Row from "../components/Grid/Row";
// import Col from "../components/Grid/Col";
import List from "../components/List/List";
import SelectButton from "../components/SelectButton/SelectButton";

const Main = () => (
    <div>
        <Container>
            <List title="My Pantry" description="So far only placeholder text"></List>
            <SelectButton></SelectButton>
        </Container>
    </div>
)

export default Main;