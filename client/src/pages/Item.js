import React from "react";
import Container from "../components/Grid/Container";
import ChowCard from "../components/ChowCard/ChowCard";

const Item = () => (
    <div>
        <Container>
            <ChowCard cardTitle="Your Item" cardText="Here's a description of your item" buttonText="Push me to go back to Pantry"></ChowCard>
        </Container>
    </div>
)

export default Item;