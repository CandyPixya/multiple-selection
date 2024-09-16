export default function User({ user }) {
  const { avatar_url, followers, following, name, login, public_repos, created_at } = user
  const createdDate = new Date(created_at)

  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div>
        <a className="username" href={`https://github.com/${login}`}>{name || login} </a>
        <p>User joined on {`${createdDate.getDate()} ${createdDate.toLocaleDateString('en-us', { month: "short" })} ${createdDate.getFullYear()} `}</p>
      </div>
      <div className="data">
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  )
}