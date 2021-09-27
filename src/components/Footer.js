import styled from "styled-components";
import React, { useState, useEffect } from "react"
import { Api } from "../pages/Api"

export default function App() {
  const [info, setInfo] = useState([])

    const BoxZoeira = styled.div`
    display: flex;
    width: 100%
    `;

    const Paragraph = styled.p`
    display: flex;
    font-size: 3px;
    cursor: pointer;
    transition: 5s;
    justify-content: center;
    position: relative;
    left: 70px;
    &:hover {
        transform: scale(6);
        color: red;
      }
    `;

  return (
      <BoxZoeira>
        <Paragraph>Luan the mago bilingue</Paragraph>
      </BoxZoeira>
  )
}
