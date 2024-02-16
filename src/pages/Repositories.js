import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import fetchRepositories from "../api/fetchRepositories";
import ErrorComponent from "../components/ErrorComponent";
import Repository from "../components/Repository";
import Header from "../components/Header";
import PaginationFooter from "../components/PaginationFooter";
import {useCurrentPage} from "../utils/useCurrentPage";
import Button from "../components/Button";
import NavigationButton from "../components/NavigationButton";

const Repositories = () => {
    const {username} = useParams();
    const [repositories, setRepositories] = useState([]);
    const [error, setError] = useState();
    const query = useCurrentPage();
    const page = +query.get("page")
    const currentPage = (page && page !== 0) ? page : 1

    useEffect(() => {
        fetchRepositories(username, currentPage)
            .then(({data}) => {
                console.log({data, currentPage})
                if (data.length === 0) {
                    setError({
                        message: 'Page Not Found. Go back to the first page',
                        redirectUri: `/user/${username}/repositories`
                    })
                } else {
                    setRepositories(data)
                    if (error) {
                        setError(undefined);
                    }
                }
            })
            .catch((error) => {
                setError({
                    message: 'Error occured while fetching repository. Go back to the user page',
                    redirectUri: `/user/${username}`
                })
                console.log(error)
            });
    }, [username, currentPage]);

    if (!repositories) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <Header label='RepositoryList'/>
            {error ? <ErrorComponent {...error}/> : (<div>
                <div className="flex flex-col gap-2 items-center"> {repositories.map((repository) => {
                    return <Repository key={repository.id} {...repository}/>
                })}</div>
                <PaginationFooter currentPage={currentPage} baseUri={`/user/${username}`}/>
            </div>)}

        </div>)
}

export default Repositories