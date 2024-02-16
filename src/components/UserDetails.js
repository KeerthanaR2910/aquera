import NavigationButton from "./NavigationButton";

const UserDetails = ({avatar_url, login, bio, name, public_repos, username}) => {
    return (
        <div className="flex flex-col justify-center items-center gap-3">
            <img src={avatar_url} alt={login} width={150} height={150}/>
            <p>{name ?? username}</p>
            {bio && <p>{bio}</p>}
            <p>Repositories: {public_repos}</p>
            <NavigationButton redirectUri={`/user/${username}/repositories`} label={"View Repositories"}/>
        </div>
    )
}

export default UserDetails