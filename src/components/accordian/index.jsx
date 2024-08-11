import data from "./data"
import "./styles.css"

//SINGLE SELECTION
//MULTIPLE SELECTION

import React from "react"

export default function Accordian() {
  const [selected, setSelected] = React.useState(null)
  const [enableMultiSelection, setEnableMultiSelection] = React.useState(false)
  const [multipe, setMultiple] = React.useState([])

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId)
    console.log(getCurrentId)
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multipe]; 
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)
    console.log(findIndexOfCurrentId)
    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
    else copyMultiple.splice(findIndexOfCurrentId, 1)
    setMultiple(copyMultiple)
    console.log(selected, multipe)
  }
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection ? "ENABLE SINGLE SELECTION" : "ENABLE MULTIPLE SELECTION"}
      </button>
      <div className="accordian">
        {
          data && data.length > 0 ?
            data.map(dataItem => <div className="item">
              <div className="title" onClick={
                enableMultiSelection
                 ? () => handleMultiSelection(dataItem.id) 
                 : () => handleSingleSelection(dataItem.id)}>
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                enableMultiSelection 
                ? multipe.indexOf(dataItem.id) !== -1 && <div className="content">{dataItem.answer}</div>
                : selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                /* selected === dataItem.id ||
                  <div className="content">{dataItem.answer}</div>
                  : null */
              }
            </div>)
            : <div>NO DATA FOUND</div>
        }
      </div>
    </div>
  )
}