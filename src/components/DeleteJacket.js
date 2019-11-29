import React from "react";
import styled from "@emotion/styled";

//STYLE Start

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`;

const InputField = styled.div`
  background: #fff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  margin: 5px;
  font-size: 12px;
  * {
    font-size: 12px;
  }
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
  padding: 5px;
  box-shadow: 3px 3px 2px 0px rgba(102, 102, 102, 1);
  color: #ffe;
`;

const Select = styled.select`
  background-color: #fff;
`;

//STYLE End
export default function DeleteJacket() {
  const [name, setItemName] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch("http://localhost:3004/jackets", {
      method: "Delete",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name
      })
    });
    setItemName("");
  }

  return (
    <InputField>
      <Form onSubmit={handleSubmit}>
        <label>
          Angebot Löschen
          <Select>
            <option>JacketName</option>
          </Select>
        </label>
        <SubmitButton>Angebot Entfernen</SubmitButton>
      </Form>
    </InputField>
  );
}
