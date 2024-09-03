export default function User({ user }) {
  const { avatar_url, followers, following, public_repos, name, login, created_at } = user
  /* to save the date user joined and created account on the github */
  const createdDate = new Date(created_at)
  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div className="name-cont">
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>User joined on {`${createdDate.getDate()} ${createdDate.toLocaleString('en-us', { month: 'short' })} ${createdDate.getFullYear()} `}</p>
        {/* to get the exact date ... day month and year of a user joining this code is usefull */}
      </div>
      <div className="profile-info">
        <div>
          <p>Public Repos</p>
          <p className="circle">{public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p className="circle">{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p className="circle">{following}</p>
        </div>
      </div>
    </div>
  )
}