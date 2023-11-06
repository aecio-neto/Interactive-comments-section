export function UserInfo({ username, timeAgo, avatar }) {
  return (
    <div className="user-info">
      <img src={avatar} alt="" />
      <strong>
        <p>{username}</p>
      </strong>
      <p>{timeAgo}</p>
    </div>
  )
}
