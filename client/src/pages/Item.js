import React from "react";
import Container from "../components/Grid/Container";
import MaterialCard from "../components/ChowCard/MaterialCard";

const Item = () => (
    <div>
        <Container>
            <MaterialCard cardTitle="Your Item" cardText="Here's a description of your item" buttonText="Push me to go back to Pantry"></MaterialCard>
        </Container>
    </div>
)

export default Item;