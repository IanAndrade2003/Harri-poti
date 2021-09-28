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
    flex-wrap: wrap;
  `;

  const BoxPerso = styled.div`
    margin-left: 60px;
    margin-bottom: 15px;
    border: 4px solid #4ebdc1;
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
