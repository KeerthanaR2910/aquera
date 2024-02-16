import {useNavigate} from "react-router-dom";
import Button from "./Button";

const UserDetails = ({avatar_url,login,bio,name,public_repos,username}) => {
    const navigate = useNavigate()
  return (
      <div className="flex flex-col justify-center items-center gap-3">
          <img src={avatar_url} alt={login} width={150} height={150}/>
          <p>{name}</p>
          {bio && <p>{bio}</p>}
          <p>Repositories: {public_repos}</p>
          <Button onClick={() => navigate(`/user/${username}/repositories`)} label="View Repositories" />
      </div>
  )
}

export default UserDetails