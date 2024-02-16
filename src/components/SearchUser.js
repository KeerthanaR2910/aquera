import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const SearchUser = () => {
    const [searchUsername, setSearchUsername] = useState('');
    const navigate = useNavigate()

    const handleSearch = (username) => {
        setSearchUsername(username);
        navigate(`/user/${username}`)
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search GitHub user..."
                value={searchUsername}
                onChange={(e) => setSearchUsername(e.target.value)}
            />
            <button onClick={() => handleSearch(searchUsername)}>Search</button>
        </div>
    )
}

export default SearchUser