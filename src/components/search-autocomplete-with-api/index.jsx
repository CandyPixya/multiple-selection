import { useEffect, useState } from "react"
import Suggestions from "./suggestions"
import './styles.css'

//autocomplete form that shows the matches on the screen with what u have typed
export default function SearchAutocomplete() {

  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [searchParam, setSearchParam] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [filteredUsers, setFilteredUsers] = useState([])

  function handleChange(event) {
    const query = event.target.value.toLowerCase()
    setSearchParam(query)
    if (query.length >= 1) {
      const filteredData = users && users.length ?
      users.filter((item) => item.toLowerCase().indexOf(query) > -1)
      : []
      setFilteredUsers(filteredData)
      setShowDropdown(true)
    } else {
      setShowDropdown(false)
    }
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true)
      const res = await fetch('https://dummyjson.com/users')
      const data = await res.json()
      console.log(data);
      if (data && data.users && data.users.length) {
        setUsers(data.users.map(userItem => userItem.firstName))
        setLoading(false)
        setError(null)

      }

    } catch (error) {
      console.log(error)
      setError(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchListOfUsers()
  }, [])

  function handleClick(event) {
    setShowDropdown(false)
    setSearchParam(event.target.innerText)
    setFilteredUsers([])
  }

  console.log(users, filteredUsers);

  return (
    <div className="search-auto-cont">
      {
        loading ? <h1>Loading data pls wait</h1> : 
        <input
        name="search-users"
        placeholder="Search users here..."
        value={searchParam}
        onChange={handleChange}
      />
      }
      
      {
        showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers} />
      }
    </div>
  )
}