import React from "react";
import styled from "@emotion/styled";

//STYLE Start

const SalesForm = styled.form`
  width: 90%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  align-content: center;
`;

const InputField = styled.div`
  background: #fff;
  display: flex;
  flex-flow: column nowrap;
  width: 90%;
  margin: 5px;
  font-size: 14px;
  * {
    font-size: 16px;
  }
`;

const Select = styled.select`
  background-color: #fff;
`;

const SubmitButton = styled.button`
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
export default function Sell() {
  const [name, setItemName] = React.useState("");
  const [brand, setItemBrand] = React.useState("");
  const [price, setItemPrice] = React.useState("");
  const [condition, setItemCondition] = React.useState("");
  const [img, setItemImage] = React.useState("");
  const [location, setItemLocation] = React.useState("");
  const [size, setItemSize] = React.useState("");
  const [description, setItemDescription] = React.useState("");
  const [sellerEmail, setItemEmail] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const data = await fetch("http://localhost:3004/jackets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        brand,
        price,
        condition,
        img,
        location,
        size,
        description,
        sellerEmail
      })
    });
    setItemName("");
    setItemBrand("");
    setItemPrice("");
    setItemCondition("");
    setItemImage("");
    setItemLocation("");
    setItemSize("");
    setItemDescription("");
    setItemEmail("");
  }

  return (
    <SalesForm onSubmit={handleSubmit}>
      <h3>Verkaufe deine Jacke</h3>
      <InputField>
        Name der Anzeige
        <input
          autoFocus
          type="text"
          placeholder="z.B. Blaue Patagonia Jacke"
          value={name}
          onChange={event => setItemName(event.target.value)}
        />
      </InputField>
      <InputField>
        Marke deiner Jacke
        <Select
          placeholder="Marke der Jacke"
          value={brand}
          onChange={event => setItemBrand(event.target.value)}
        >
          <option value="">Wähle eine Marke</option>
          <option value="Patagonia">Patagonia</option>
          <option value="The North Face">The North Face</option>
          <option value="Jack Wolfskin">Jack Wolfskin</option>
          <option value="Quechua">Quechua</option>
          <option value="Burton">Burton</option>
          <option value="Mammut">Mammut</option>
          <option value="Helly Hansen">Helly Hansen</option>
          <option value="Andere">Andere</option>
        </Select>
      </InputField>
      <InputField>
        Was soll die Jacke kosten?
        <input
          type="number"
          placeholder="z.B. 100€"
          value={price}
          onChange={event => setItemPrice(event.target.value)}
        />
      </InputField>
      <InputField>
        Jacket Condition
        <Select
          placeholder="Zustand der Jacke"
          value={condition}
          onChange={event => setItemCondition(event.target.value)}
        >
          {" "}
          <option value="Neu">Neu</option>
          <option value="Sehr Gut">Sehr Gut</option>
          <option value="Gut">Gut</option>
          <option value="Mängel">Mängel</option>
        </Select>
      </InputField>
      <InputField>
        Jacket Image URL
        <input
          type="url"
          placeholder="z.B. http://url.de/jacke.png"
          value={img}
          onChange={event => setItemImage(event.target.value)}
        />
      </InputField>
      <InputField>
        Wo ist die Jacke?
        <input
          type="text"
          placeholder="z.B. Köln"
          value={location}
          onChange={event => setItemLocation(event.target.value)}
        />
      </InputField>
      <InputField>
        Jacket Size
        <Select
          placeholder="Marke der Jacke"
          value={size}
          onChange={event => setItemSize(event.target.value)}
        >
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </Select>
      </InputField>
      <InputField>
        Beschreibe deine Jacke
        <textarea
          type="text"
          rows="4"
          placeholder="z.B. Verkaufe diese schöne Winterjacke. Habe Sie ein Jahr getragen und brauche Sie nun nicht mehr, da ich in Thailand wohne."
          value={description}
          onChange={event => setItemDescription(event.target.value)}
        />
      </InputField>
      <InputField>
        So kann man mich erreichen
        <input
          type="email"
          placeholder="Deine Email"
          value={sellerEmail}
          onChange={event => setItemEmail(event.target.value)}
        />
      </InputField>
      <SubmitButton>Einstellen</SubmitButton>
    </SalesForm>
  );
}
