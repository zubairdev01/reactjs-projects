

function ProfileCard({ user }) {
     const {
    avatar_url,      
    login,           
    bio,
    followers,
    public_repos,     
  } = user

  return (
    <div className="mx-auto max-w-sm rounded-xl bg-white p-6 text-slate-900 shadow-lg ring-1 ring-slate-200">

      <img
        src={avatar_url}
        alt= "Github Avatar"
        className="mx-auto h-20 w-20 rounded-full object-cover ring-4 ring-blue-100"
      />

      <h2 className="mt-4 text-center text-lg font-bold !text-slate-900">
        {login ? `@${login}` : 'GitHub user'}
      </h2>

      <p className="text-center text-sm text-slate-500">
        {bio}
      </p>

      <div className="mt-5 flex justify-around border-t border-slate-100 pt-4 text-sm">
        <div className="text-center">
          <p className="font-bold">{followers}</p>
          <p className="text-slate-500">Followers</p>
        </div>
        <div className="text-center">
          <p className="font-bold">{public_repos}</p>
          <p className="text-slate-500">Repos</p>
        </div>
      </div>

    </div>
  )
}

export default ProfileCard