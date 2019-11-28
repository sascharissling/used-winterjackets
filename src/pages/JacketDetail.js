import React from "react";
import styled from "@emotion/styled";

//STYLE Start
const JacketDetailContainer = styled.div`
  width: 90%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const JacketImage = styled.img`
  width: 270px;
  border-radius: 15px;
`;

const Label = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: grey;
  margin: 5px;
  padding: 15px;
  height: 20px;
  color: #ffe;
`;

const ItemTags = styled.div`
  display: flex;
`;

const ItemPrice = styled.h5`
  color: purple;
  font-size: 1.5em;
  margin: 5px 10px 15px 10px;
`;
//STYLE End

export default function JacketDetail({ match }) {
  const [jacket, setJacket] = React.useState([]);

  async function getJacket() {
    const data = await fetch(
      `http://localhost:3004/jackets/${match.params.id}`
    );
    const item = await data.json();
    console.log(item);
    setJacket(item);
  }
  React.useEffect(() => {
    getJacket();
  }, []);

  return (
    <JacketDetailContainer>
      <h3>{jacket.name}</h3>
      <JacketImage src={jacket.img} alt={jacket.name} />
      <ItemTags>
        <Label>{jacket.size}</Label>
        <Label>{jacket.condition}</Label>
        <Label>{jacket.location}</Label>
      </ItemTags>
      <div>{jacket.description}</div>
      <ItemPrice>{jacket.price} €</ItemPrice>
      <div>{jacket.sellerEmail}</div>
    </JacketDetailContainer>
  );
}

// "id": 1,
// "name": "Wellensteyn Winterjacke L",
// "size": "L",
// "img": "https://images.vinted.net/thumbs/f800/06363_hn6iJTfqMAe9Pj66P5HPWgPo.jpeg?1574616380$defd683a982693d7be5d1db55e1b5191d805d8a1",
// "description": "Schöne Wellensteyn Jacke. Braun mit Schwarz abgesetzt",
// "price": "125",
// "condition": "Sehr guter Zustand",
// "sellerEmail": "weird@email.address",
// "location": "Hamburg"
