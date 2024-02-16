import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import fetchRepositories from "../api/fetchRepositories";

const RepositoryList = () => {
    const {username} = useParams();
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetchRepositories(username)
            .then(data => {
                setRepositories(data)
            })
            .catch((error) => console.error('Error fetching repositories:', error));
    }, [username]);

    return (
        <div>
            <h2>RepositoryList </h2>
            {repositories.map((repository) => {
                return (<div key={repository.id}>
                    <p>{repository.name}</p>
                    <p>{repository.description}</p>
                    <p>Topics: {repository.topics?.join(', ') || 'None'}</p>
                </div>)
            })}
        </div>)
}

export default RepositoryList