import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import fetchUserProfile from "../api/fetchUserProfile";

const UserProfile = () => {
    const {username} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUserProfile(username)
            .then((data) => setUser(data))
            .catch((error) => console.error('Error fetching user profile:', error));
    }, [username]);

    return (<div>
            Username
            <img src={user?.avatar_url} alt={user?.login} width={30}/>
            <h4>{user?.name}</h4>
            <p>{user?.bio}</p>
            <p>Repositories: {user?.public_repos}</p>
        </div>)
}

export default UserProfile