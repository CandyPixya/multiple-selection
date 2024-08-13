import React, { useEffect } from "react"
export default function RandomColor() {
  //i need two types of colors => hex and rgb
  const [typeOfColor, setTypeOfColor] = React.useState("hex")
  const [color, setColor] = React.useState("#000000")

  function giveMeRandomDigits(length) {
    return Math.floor(Math.random()*length)
  }

  function createRandomHexColor() {
    const hexDigits = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
    let hexColor = '#'

    for(let i=0; i<6; i++) {
      //i need my hexColor which is '#' right now, to be added to a random of hexDigits array
      hexColor += hexDigits[giveMeRandomDigits(hexDigits.length)]
    }
    console.log(hexColor)
    setColor(hexColor)
  }

  function createRandomRgbColor() {
    const r = giveMeRandomDigits(256)
    const g = giveMeRandomDigits(256)
    const b = giveMeRandomDigits(256)
    const rgbColor = `rgb(${r}, ${g}, ${b})`
    console.log(`rgb(${r}, ${g}, ${b})`)
    setColor(rgbColor)
  }

  useEffect(()=> {
    if (typeOfColor === 'rgb') createRandomRgbColor()
    else createRandomHexColor()
  }, [typeOfColor])

  return (
    <div className="container" style={{
      backgroundColor: color,
      width: "100vw",
      height: "100vh"
    }}>
      <div className="buttons">
        <button onClick={()=> setTypeOfColor('hex')}>Create HEX color</button>
        <button onClick={()=> setTypeOfColor('rgb')}>Create RGB color</button>
        <button onClick={typeOfColor === 'hex' ? createRandomHexColor : createRandomRgbColor}>Create Random color</button>
      </div>
      
      <div className="text-cont">
        <h3 className="white">{typeOfColor === 'hex' ? "HEX Color:" : "RGB Color:"}</h3>
        <h1 className="white font-50">{color}</h1>
      </div>
    </div>
  )
}