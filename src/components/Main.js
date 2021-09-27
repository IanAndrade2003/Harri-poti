import styled from "styled-components";
import React, { useState, useEffect } from "react"
import { Api } from "../pages/Api"

export default function App() {
  const [info, setInfo] = useState([])
  useEffect(() => {
    Api.get().then(response => setInfo(response.data))
    console.log(Api.get())
  }, [])

  return (
      <div>
        {info.map(item => (
          <div>
            <p>Personagem: {item.name}</p>
            <p>Ator: {item.actor}</p>
            <img src={item.image} alt=""/> 
          </div>
        ))}
      </div>
  )
}
