import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css"

export default function QRCodeGenerator() {

  const [qrCode, setQrCode] = useState('')
  const [input, setInput] = useState('')

  function handleGenerateQrCode() {
    setQrCode(input)
  }

  return (
    <div className="mb-2">
      <h1>Code Generator</h1>
      <div className="mb-2">
        <input onChange={(e) => setInput(e.target.value)} type="text" name="qr-code" placeholder="Enter Your Value Here" />
        <button disabled={input && input.trim() /* doesnt count spaces at all */ !== '' ? false : true} onClick={handleGenerateQrCode}>Generate</button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="white" />
      </div>
    </div>
  )
}