import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

//STYLE Start

const RouterLink = styled(Link)`
  text-decoration: none;
`;

const Marketplace = styled.div`
  max-width: 800px;
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
  max-width: 200px;
  height: auto;
  margin: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* box-shadow: 3px 3px 4px 0px rgba(102, 102, 102, 1); */
  align-items: center;
`;

const ItemTitle = styled.h4`
  color: black;
  margin: 1px;
  font-size: 0.8em;
`;

const ItemPrice = styled.h5`
  color: purple;
  font-size: 1em;
  margin: 1px;
`;

const ItemSize = styled.h5`
  color: grey;
  font-size: 1em;
  margin: 1px;
`;
const ItemImage = styled.img`
  width: 100%;
  height: 200px;
  margin: 0;
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  flex-flow: column nowrap;
  text-align: left;
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
          <Container key={jacket.id}>
            <RouterLink to={`/jackets/${jacket.id}`}>
              <ItemImage src={jacket.img} alt="item image" />
              <Details>
                <ItemTitle>{jacket.brand}</ItemTitle>
                <ItemPrice>
                  {parseInt(jacket.price)
                    .toFixed(2)
                    .toLocaleString("de-DE")}
                  €
                </ItemPrice>
                <ItemSize>{jacket.size}</ItemSize>
              </Details>
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
