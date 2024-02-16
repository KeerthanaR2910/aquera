import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import fetchUserProfile from "../api/fetchUserProfile";
import ErrorComponent from "./ErrorComponent";

const UserProfile = () => {
    const {username} = useParams();
    const [user, setUser] = useState(null);
    const navigate = useNavigate()
    const [error, setError] = useState();

    useEffect(() => {
        fetchUserProfile(username)
            .then((data) => setUser(data))
            .catch((error) => {
                setError({
                    message: 'Error occured while fetching user profile. Go back to the home page', redirectUri: '/'
                })
            });
    }, [username]);

    console.log(error)

    return (<div>
        {error ? <ErrorComponent {...error}/> : <div>
            Username
            <img src={user?.avatar_url} alt={user?.login} width={30}/>
            <h4>{user?.name}</h4>
            <p>{user?.bio}</p>
            <p>Repositories: {user?.public_repos}</p>
            <div onClick={() => navigate(`/user/${username}/repositories`)}>View Repositories</div>
        </div>}
    </div>)
}

export default UserProfile