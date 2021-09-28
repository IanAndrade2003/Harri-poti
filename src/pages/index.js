import React, { useState, useEffect } from "react"
import { Api } from "../pages/Api"
import Header from "../components/Header";
import Main from "../components/Main"
import Footer from "../components/Footer";


export default function App() {
  const [info, setInfo] = useState([])
  useEffect(() => {
    Api.get().then(response => setInfo(response.data))
    console.log(Api.get())
  }, [])

  return (
    <div>
      <Header/>
      <Main />
      <Footer/>
    </div>
  )
}
