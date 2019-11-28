import React from "react";
import styled from "@emotion/styled";


export default function Jackets() {
  const [jackets, setJackets] = React.useState([]);

  async function getJackets() {
    const response = await fetch(
      "../../dbs/winter-jackets.json"
    );
    const items = await response;
    console.log(items);
    return items;
  }

  React.useEffect(() => {
    getJackets();
  }, []);

  return (
    <>
      <h3>Jackets</h3>
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
