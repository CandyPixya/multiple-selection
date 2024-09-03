import { useEffect } from "react"
import { useState } from "react"
import "./styles.css"
import User from "./user"

export default function GithubProfileFinder() {

  const [username, setUsername] = useState('candypixya')
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)

  async function fetchGithubUserData() {
    setLoading(true)
    const res = await fetch(`https://api.github.com/users/${username}`)
    const data = await res.json()
    if (data) {
      setUserData(data)
      setLoading(false)
      setUsername('')
    }
    console.log(data)
  }

  function handleSubmit() {
    fetchGithubUserData()
  }

  useEffect(()=> {
    fetchGithubUserData()
  }, [])

  if (loading) {
    return <h2>Data is loading pls wait</h2>
  }

  return (
    <div className="github-profile-cont">
      <div className="input-wrapper">
        <input name='search-by-username' type="text" placeholder="Search Github Username" value={username} onChange={(event)=> setUsername(event.target.value)} />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {
        userData !== null ? <User user={userData} /> : null
      }
    </div>
  )
}