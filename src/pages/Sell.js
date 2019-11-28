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
  return (
    <SalesForm action="">
      <h3>Sell Your Jacket</h3>
      <label>
        Jacket Name <input />
      </label>
      <label>
        Jacket Brand <input />
      </label>
      <label>
        Jacket Price <input />
      </label>
      <label>
        Jacket Condition <input />
      </label>
      <label>
        Jacket Location <input />
      </label>
      <label>
        Jacket Size <input />
      </label>
      <label>
        Jacket Description <textarea />
      </label>
      <label>
        Your Contact E-Mail <input />
      </label>
      <button>Submit</button>
    </SalesForm>
  );
}
