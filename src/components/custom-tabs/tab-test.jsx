import Tabs from "./tabs"

function RandomContent() {
  return <div>This is some random content</div>
}

export default function TabTest() {
  const tabs = [
    {
      label: 'Tab 1',
      content: 'first content baby'
    },
    {
      label: 'Tab 2',
      content: 'second content honey bunny'
    },
    {
      label: 'Tab 3',
      content: <RandomContent />
    },
  ]

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return (
      <Tabs tabsContent={tabs} onChange={handleChange} /> /* HERE handleChange is passed to Tabs as a prop (onchange). It means that now Tabs component has access to handleChange function and call it whenever needed. inside the Tabs there is a function called handleOnClick that gets called when a tab is clicked.  
      function handleOnclick(getcurrentIndex) {
        setCurrentTabIndex(getcurrentIndex);
        onChange(getcurrentIndex);
      }

      the onChange is the same as handleChange and when currentTabIndex is passed to onChange, it is like the handleChange is getting it and it is the index of selected tab.
*/
  )
}