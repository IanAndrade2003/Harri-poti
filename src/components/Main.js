import styled from "styled-components";
import React, { useState, useEffect } from "react"
import { Api } from "../pages/Api"

export default function App() {
  const [info, setInfo] = useState([])
  useEffect(() => {
    Api.get().then(response => setInfo(response.data))
    console.log(Api.get())
  }, [])

  const Box = styled.div`
    display: flex;
    background: rgb(209,228,245);
background: radial-gradient(circle, rgba(209,228,245,0.9864320728291317) 0%, rgba(164,204,241,1) 13%, rgba(110,178,240,1) 27%, rgba(80,163,238,1) 41%, rgba(61,149,235,1) 54%, rgba(40,140,240,1) 67%, rgba(12,108,212,1) 80%, rgba(3,77,162,1) 90%, rgba(1,45,96,1) 100%);
    flex-wrap: wrap;
  `;

  const BoxPerso = styled.div`
    margin-left: 60px;
    margin-bottom: 15px;
    border: 4px solid #000000;
    background: rgb(209,228,245);
background: radial-gradient(circle, rgba(209,228,245,0.9864320728291317) 0%, rgba(164,204,241,1) 13%, rgba(110,178,240,1) 27%, rgba(80,163,238,1) 41%, rgba(61,149,235,1) 54%, rgba(40,140,240,1) 67%, rgba(12,108,212,1) 80%, rgba(3,77,162,1) 90%, rgba(1,45,96,1) 100%);
  `;

  const Paragraph = styled.p`
    font-size: 14px;
  `;

  return (
      <Box>
        {info.map(item => (
          <BoxPerso>
            <p>Personagem: {item.name}</p>
            <Paragraph>Ator: {item.actor}</Paragraph>
            <img style={{ width: "250px", height: "350px" }} src={item.image} alt=""/> 
          </BoxPerso>
        ))}
      </Box>
  )
}
