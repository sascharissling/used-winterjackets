import React from "react";
import styled from "@emotion/styled";

//STYLE Start
const JacketDetailContainer = styled.div`
  width: 75%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const JacketImage = styled.img`
  width: 60%;
  max-width: 500px; 
  margin 5px; 
  
`;

const Label = styled.div`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #49d1cc;
  margin: 5px;
  padding: 15px;
  height: 20px;
  color: #ffe;
`;

const JacketName = styled.h3`
  margin: 5px;
`;

const ItemTags = styled.div`
  display: flex;
`;

const ItemPrice = styled.h5`
  color: purple;
  font-size: 1.5em;
  margin: 5px;
`;

const JacketDescription = styled.p`
  text-align: center;
`;

const ContactButton = styled.a`
  font-size: 0.8rem;
  display: flex;
  font-weight: bold;
  align-items: center;
  align-content: center;
  justify-content: center;
  background: #49d1cc;
  margin: 5px;
  padding: 10px;
  box-shadow: 3px 3px 2px 0px rgba(102, 102, 102, 1);
  color: #ffe;
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
    <>
      <JacketImage src={jacket.img} alt={jacket.name} />
      <JacketDetailContainer>
        <JacketName>{jacket.name}</JacketName>
        <ItemTags>
          <Label>{jacket.size}</Label>
          <Label>{jacket.condition}</Label>
          <Label>{jacket.location}</Label>
        </ItemTags>
        <JacketDescription>{jacket.description}</JacketDescription>
        <ItemPrice>{jacket.price} €</ItemPrice>
        <ContactButton href="mailto:">Anbieter Kontaktieren</ContactButton>
      </JacketDetailContainer>
    </>
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
