import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import fetchRepositories from "../api/fetchRepositories";
import ErrorComponent from "../components/ErrorComponent";
import Repository from "../components/Repository";
import Header from "../components/Header";
import PaginationFooter from "../components/PaginationFooter";

const Repositories = () => {
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
            <Header label='RepositoryList'/>
            {error ? <ErrorComponent {...error}/> : (<div className="flex flex-col gap-2 items-center"> {repositories.map((repository) => {
                return <Repository key={repository.id} {...repository}/>
            })}</div>)}
            <PaginationFooter />
        </div>)
}

export default Repositories