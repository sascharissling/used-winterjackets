import React from "react";
import styled from "@emotion/styled";

const UserProfile = styled.div`
  background: transparent;
  display: flex;
  flex-flow: column nowrap;
  width: 70%;
  height: 80%;
`;

export default function Profile() {
  return (
    <UserProfile>
      <h3>Hello, Stranger</h3>
      <button>User Name</button>
      <button>User Picture</button>
      <button>User Email</button>
      <button>User Items On Sale</button>
    </UserProfile>
  );
}
