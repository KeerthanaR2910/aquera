import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import fetchUserProfile from "../api/fetchUserProfile";
import ErrorComponent from "../components/ErrorComponent";
import Header from "../components/Header";

const UserProfile = () => {
    const {username} = useParams();
    const [user, setUser] = useState(null);
    const navigate = useNavigate()
    const [error, setError] = useState();

    useEffect(() => {
        fetchUserProfile(username)
            .then(({data}) => {
                setUser(data)
                if(error){
                    setError(undefined)
                }
            })
            .catch((error) => {
                setError({
                    message: 'User Not Found or Error occured while fetching user profile. Go back to the home page', redirectUri: '/'
                })
                console.log(error)
            });
    }, [username]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (<div>
        <Header label={"User Profile"} />
        {error ? <ErrorComponent {...error}/> : <div>
            <img src={user?.avatar_url} alt={user?.login} width={30}/>
            <h4>{user?.name}</h4>
            <p>{user?.bio}</p>
            <p>Repositories: {user?.public_repos}</p>
            <div onClick={() => navigate(`/user/${username}/repositories`)}>View Repositories</div>
        </div>}
    </div>)
}

export default UserProfile