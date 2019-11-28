import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

//STYLE Start

const RouterLink = styled(Link)`
  text-decoration: none;
`;

const Marketplace = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  * {
    color: black;
  }
`;

const Container = styled.div`
  background: #ffe;
  width: 40%;
  height: auto;
  margin: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: 3px 3px 4px 0px rgba(102, 102, 102, 1);
  align-items: center;
`;

const ItemTitle = styled.h4`
  color: black;
  margin: 5px;
`;

const ItemDescription = styled.p`
  color: grey;
  font-style: italic;
  font-size: 0.8em;
  margin: 5px 10px 15px 10px;
`;

const ItemPrice = styled.h5`
  color: purple;
  font-size: 1.5em;
  margin: 5px 10px 15px 10px;
`;

const ItemSize = styled.h5`
  color: grey;
  font-size: 1em;
  margin: 5px 10px 15px 10px;
`;
const ItemImage = styled.img`
  width: 100%;
  margin: 0;
`;
//STYLE End

export default function Jackets() {
  const [jackets, setJackets] = React.useState([]);

  async function getJackets() {
    const data = await fetch("http://localhost:3004/jackets");
    const items = await data.json();
    console.log(items);
    setJackets(items);
  }
  React.useEffect(() => {
    getJackets();
  }, []);

  return (
    <>
      <Marketplace>
        {jackets.map(jacket => (
          <Container>
            <RouterLink to={`/jackets/${jacket.id}`} key={jacket.id}>
              <ItemImage src={jacket.img} alt="item image" />

              <ItemTitle>{jacket.name}</ItemTitle>

              <ItemDescription>{jacket.description}</ItemDescription>

              <ItemPrice>{jacket.price}€</ItemPrice>
              <ItemSize>{jacket.size}</ItemSize>
            </RouterLink>
          </Container>
        ))}
      </Marketplace>
    </>
  );
}

//MAP
//Image
//Name
//Condition
//Size
//Price
//Contact Seller
