import React, { useState, useEffect } from "react"
import "./App.css"

function MemeGenerator() {
  const [upperText, setUpperText] = useState(" ")
  const [bottomText, setBottomText] = useState(" ")
  const [randomImg, setRandomImg] = useState(" ")
  const [allImgs, setAllImgs] = useState([])

  useEffect(() => {
    fetch(" https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data
        setAllImgs(memes)
      })
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    const rndNumber = Math.floor(Math.random() * allImgs.length)
    const rndMemeImg = allImgs[rndNumber].url
    setRandomImg(rndMemeImg)
  }

  return (
    <div>
      <form className="meme-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Uppe Text" value={upperText} onChange={e => setUpperText(e.target.value)} />

        <input type="text" placeholder="Bottom Text" value={bottomText} onChange={e => setBottomText(e.target.value)} />
        <button>GEN</button>
      </form>
      <div className="meme">
        <img src={randomImg} alt="" />
        <h2 className="top">{upperText}</h2>
        <h2 className="bottom">{bottomText}</h2>
      </div>
    </div>
  )
}
export default MemeGenerator
