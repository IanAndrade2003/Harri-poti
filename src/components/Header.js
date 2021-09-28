import styled from "styled-components";
import React, { useState, useEffect } from "react"

export default function App() {
  const [info, setInfo] = useState([])

 const Box = styled.div`
    display: flex;
    justify-content: center;
 `;

  return (
      <Box>
        <h1>Bem vindo a Hogwarts!</h1>
      </Box>
  )
}
