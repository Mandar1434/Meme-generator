import React from "react"
import Header from "./Header"
import MemeGenerator from "./MemeGenerator"
import "./App.css"

function Meme() {
  return (
    <div className="App">
      <Header />
      <MemeGenerator />
    </div>
  )
}

export default Meme
