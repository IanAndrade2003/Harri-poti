import styled from "styled-components";
import React, { useState, useEffect } from "react"
import { Api } from "../pages/Api"

export default function App() {
  const [info, setInfo] = useState([])

    const BoxZoeira = styled.div`
    display: flex;
    width: 100%
    background: rgb(209,228,245);
background: radial-gradient(circle, rgba(209,228,245,0.9864320728291317) 0%, rgba(164,204,241,1) 13%, rgba(110,178,240,1) 27%, rgba(80,163,238,1) 41%, rgba(61,149,235,1) 54%, rgba(40,140,240,1) 67%, rgba(12,108,212,1) 80%, rgba(3,77,162,1) 90%, rgba(1,45,96,1) 100%);
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
