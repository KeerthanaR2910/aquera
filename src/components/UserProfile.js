import {useParams} from "react-router-dom";

const UserProfile = () => {
    const { username } = useParams();
  return (
      <div>
          UserProfile
          {username}
      </div>
  )
}

export default UserProfile