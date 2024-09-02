import { useState } from "react"
import Modal from "./modal"

export default function ModalTest() {
  const [showModalPopup, setshowmodalPopup] = useState(false)

  function handleToggleModalPopup() {
    setshowmodalPopup(!showModalPopup)
  }

  function onClose() {
    setshowmodalPopup(false)
    console.log('span clicked');
  }

  return (
    <div className="main-cont">
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {
        showModalPopup && 
        <Modal id={'custom-id'}
        header={<div>WINTER IS COMING</div>}
        body={<div>THIS IS THE INJECTED MODAL FROM MODAL_TEST</div>}
        footer={<footer>GOODBYE</footer>}
        onClose={onClose}

        />
      }
    </div>
  )
}