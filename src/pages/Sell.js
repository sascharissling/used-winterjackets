import React from "react";
import styled from "@emotion/styled";

const SalesForm = styled.form`
  width: 70%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  align-content: center;
`;

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
      <h3>Sell Your Jacket</h3>
      <label>
        Jacket Name
        <input
          autoFocus
          type="text"
          placeholder="Name der Anzeige"
          value={name}
          onChange={event => setItemName(event.target.value)}
        />
      </label>
      <label>
        Jacket Brand
        <input
          type="text"
          placeholder="Marke der Jacke"
          value={brand}
          onChange={event => setItemBrand(event.target.value)}
        />
      </label>
      <label>
        Jacket Price
        <input
          type="text"
          placeholder="Marke der Jacke"
          value={price}
          onChange={event => setItemPrice(event.target.value)}
        />
      </label>
      <label>
        Jacket Condition
        <input
          type="text"
          placeholder="Zustand der Jacke"
          value={condition}
          onChange={event => setItemCondition(event.target.value)}
        />
      </label>
      <label>
        Jacket Image URL
        <input
          type="text"
          placeholder="Marke der Jacke"
          value={img}
          onChange={event => setItemImage(event.target.value)}
        />
      </label>
      <label>
        Jacket Location
        <input
          type="text"
          placeholder="Marke der Jacke"
          value={location}
          onChange={event => setItemLocation(event.target.value)}
        />
      </label>
      <label>
        Jacket Size
        <input
          type="text"
          placeholder="Marke der Jacke"
          value={size}
          onChange={event => setItemSize(event.target.value)}
        />
      </label>
      <label>
        Jacket Description
        <textarea
          type="text"
          placeholder="Beschreibung der Jacke"
          value={description}
          onChange={event => setItemDescription(event.target.value)}
        />
      </label>
      <label>
        Your Contact E-Mail{" "}
        <input
          type="text"
          placeholder="Deine Email"
          value={sellerEmail}
          onChange={event => setItemEmail(event.target.value)}
        />
      </label>
      <button>Submit</button>
    </SalesForm>
  );
}
