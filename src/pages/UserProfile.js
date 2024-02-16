import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import fetchUserProfile from "../api/fetchUserProfile";
import ErrorComponent from "../components/ErrorComponent";
import Header from "../components/Header";
import UserDetails from "../components/UserDetails";

const UserProfile = () => {
    const {username} = useParams();
    const [user, setUser] = useState(null);
    const [error, setError] = useState();

    useEffect(() => {
        fetchUserProfile(username)
            .then(({data}) => {
                setUser({
                    ...data,
                    username
                })
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
        {error ? <ErrorComponent {...error}/> : <UserDetails {...user}/>}
    </div>)
}

export default UserProfile