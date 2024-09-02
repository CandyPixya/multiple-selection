import "./modal.css"
export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">&times;</span>
          <h1>{header? header : "Header"}</h1>
        </div>
        <div className="body">
          {body ? body : <div>
            <p>this is our modal body</p>
          </div> }
        </div>
        <div className="footer">
          {
            footer ? footer : <h2>This is our footer</h2>
          }
        </div>
      </div>
    </div>
  )
}