import {useParams} from "react-router-dom";

const RepositoryList = () => {
    const {username} = useParams();
    return (
        <div>
            RepositoryList for
            {username}
        </div>
    )
}

export default RepositoryList