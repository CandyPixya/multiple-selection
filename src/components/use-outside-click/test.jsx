import { useRef, useState } from "react";
import useOutsideClick from ".";

export default function UseOnclickOutsideTest( ){
  const ref = useRef()
  useOutsideClick(ref, ()=> setShowContent(false)) 
  const [showContent, setShowContent] = useState(false)

  return (
    <div className="click-cont">
      {showContent ? 
      <div className="cont-paper" ref={ref}>
        <h1>Random Content</h1>
        <p>Pls click outside of this to close this. it wont close if u click inside this content</p>
      </div> : <button onClick={() => setShowContent(true)}>Show Content</button> }
    </div>
  )
}