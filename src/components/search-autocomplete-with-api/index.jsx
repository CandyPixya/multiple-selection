import { useEffect, useState } from "react"
import Suggestions from "./suggestions"
import './styles.css'

//autocomplete form that shows the matches on the screen with what u have typed
export default function SearchAutocomplete() {

  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([]) //the data we gat from the api is saved in users
  const [error, setError] = useState(null)
  const [searchParam, setSearchParam] = useState('') //parametr that user types in the search box
  const [showDropdown, setShowDropdown] = useState(false) //showing the list or not?
  const [filteredUsers, setFilteredUsers] = useState([]) //users that match with the letters user types

  async function fetchListOfUsers() {
    try {
      setLoading(true) // data is loading in this part
      const res = await fetch('https://dummyjson.com/users')
      const data = await res.json() //saves the response of the api as data and turns into json
      console.log(data);
      if (data && data.users && data.users.length) {
        setUsers(data.users.map(userItem => userItem.firstName)) //we only need firstNames in this project so we get the first name and save it in users
        //map runs on data.users and each of the data.users is called a userItem...then it returns the userItem's firstName only and gives us a new array which is saved in users
        setLoading(false)
        setError(null) //when it is in try it means everything is going fine... so we dont have errors
      }

    } catch (error) {
      console.log(error)
      setError(error)
      setLoading(false)
    }
  }

  function handleChange(event) {
    const query = event.target.value.toLowerCase() //whatever has typed inside the searchbox turns into lowerCase and saves as query so that it is not sensitive to lower or uppercase
    setSearchParam(query) //set the query as the search param which the user has already typed in the search box
    if (query.length >= 1) {
      const filteredData = users && users.length ? //users here is the item.firstName we previously saved in the users
      users.filter((item) => item.toLowerCase().indexOf(query) > -1) //it filters among the firstNames saved as users. calls each an item. then turns each firstname to lowercase. then checks the index of query (param we have typed in the search box) it searches for the index which is bigger tha -1 (why -1? because we want the indexes that actually exist not -1 which doesnt exist....it means we wanna find the letters we have typed and the letters in the firstname to be matched)
      : []
      setFilteredUsers(filteredData) //save the filtered data in filteredUsers
      setShowDropdown(true)
    } else {
      setShowDropdown(false)
    }
  }

  useEffect(() => {
    fetchListOfUsers() //when the component is rendered for the first time fetchListOfUsers() is called and because dependency is empty so it only calls for once unless the component is rerendered on mounted again
  }, [])

  function handleClick(event) { //when clicked on the <li> these happen 
    setShowDropdown(false)
    setSearchParam(event.target.innerText) //shows the clicked item inside the input
    setFilteredUsers([])
  }

  console.log(users, filteredUsers);

  return (
    <div className="search-auto-cont">
      {
        loading ? <h1>Loading data pls wait</h1> : //if data is loading show this. and if not show the search input
        <input
        name="search-users"
        placeholder="Search users here..."
        value={searchParam} //the value it shows in the search box
        onChange={handleChange} //whenever a new letter is typed or removed this is called cause it has changed
      />
      }
      
      {
        showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers} /> //if showDropdown is true, render the suggestion component. which the data it recieves is the filtered usernames
      }
    </div>
  )
}