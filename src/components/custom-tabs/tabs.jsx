import { useState } from "react"
import "./tabs.css"

export default function Tabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0)

  function handleOnclick(getCurrentIndex) {
    /* here the function recieves the index of selected tab as (getCurrentIndex) */
    setCurrentTabIndex(getCurrentIndex) /* then we update the index of current tab by setCurrentTabIndex(getCurrentTabIndex) which is amount of the index we just sent by clicking */
    onChange(getCurrentIndex) /* here onChange tells the parrent component that the index has changed and the parent component changes the content of the tab. */
  }
  return (
    <div className="wrapper">
      <div className="heading">
        {
          tabsContent.map((tabItem, index) =>
            <div className={currentTabIndex === index ? 'active-tab' : ''} onClick={()=> handleOnclick(index)} /* ()=> makes the function to be called when it is clicked... if we dont use () => it calls the function for all 3 tabs and gives us error */ /* ()=> handleOnClick(index) this index will send the index of selected tab to the function */
            
            key={tabItem.label}>
              <button className="label">{tabItem.label}</button>
            </div>)
        }
      </div>
      <div className="content">
        {
          tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
        }
      </div>
    </div>
  )
}