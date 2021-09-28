import styled from "styled-components";
import React, { useState, useEffect } from "react"

export default function App() {
  const [info, setInfo] = useState([])

 const Box = styled.div`
    display: flex;
    background: rgb(209,228,245);
background: radial-gradient(circle, rgba(209,228,245,0.9864320728291317) 0%, rgba(164,204,241,1) 13%, rgba(110,178,240,1) 27%, rgba(80,163,238,1) 41%, rgba(61,149,235,1) 54%, rgba(40,140,240,1) 67%, rgba(12,108,212,1) 80%, rgba(3,77,162,1) 90%, rgba(1,45,96,1) 100%);
    justify-content: center;
 `;

  return (
      <Box>
        <h1>Bem vindo a Hogwarts!</h1>
      </Box>
  )
}
