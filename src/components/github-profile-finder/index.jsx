import { useEffect, useState } from "react"
import User from "./user"
import './styles.css'

export default function GithubProfileFinder() {
  const [username, setUsername] = useState('candypixya')
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)

  async function fetchGithubUserData() {
    setLoading(true)
    const res = await fetch(`https://api.github.com/users/${username}
    `)
    const data = await res.json()
    if (data) {
      setUserData(data)
      setLoading(false)
      setUsername('')
    }
    console.log(data);
  }

  function handlesubmit() {
    fetchGithubUserData()
  }

  useEffect(()=> {
    fetchGithubUserData()
  }, [])

  if (loading) {
    return <h1>Loading Data pls wait.</h1>
  }

  return (
    <div className="git-prof-cont">
      <div className="input-wrapper">
        <input
        name="search-by-username"
        type="text"
        placeholder="Search Github Username..."
        value={username}
        onChange={(event)=> setUsername(event.target.value)} //this changes the new username and sends it to the fetchGithubUserData function and it uses as the username
        />
        <button onClick={handlesubmit}>Search</button>
      </div>
      {
        userData !== null ?
        <User user={userData} />
        : null
      }
    </div>
  )

}