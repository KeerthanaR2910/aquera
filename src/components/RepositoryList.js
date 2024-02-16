import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import fetchRepositories from "../api/fetchRepositories";
import ErrorComponent from "./ErrorComponent";

const RepositoryList = () => {
    const {username} = useParams();
    const [repositories, setRepositories] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        fetchRepositories(username)
            .then(({data}) => {
                if (data.length === 0) {
                    setError({
                        message: 'Page Not Found. Go back to the first page',
                        redirectUri: `/user/${username}/repositories`
                    })
                } else {
                    setRepositories(data)
                }
            })
            .catch((error) => {
                setError({
                    message: 'Error occured while fetching repository. Go back to the user page',
                    redirectUri: `/user/${username}`
                })
                console.log(error)
            });
    }, [username]);

    return (
        <div>
            <h2>RepositoryList </h2>
            {error ? <ErrorComponent {...error}/> : repositories.map((repository) => {
                return (<div key={repository.id}>
                    <p>{repository.name}</p>
                    <p>{repository.description}</p>
                    <p>Topics: {repository.topics?.join(', ') || 'None'}</p>
                </div>)
            })}
        </div>)
}

export default RepositoryList