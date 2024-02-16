import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Button from "./Button";

const SearchUser = () => {
    const [searchUsername, setSearchUsername] = useState('');
    const navigate = useNavigate()
    const {pathname} = useLocation();

    const handleSearch = (username) => {
        setSearchUsername(username);
        navigate(`/user/${username}`)
    };

    useEffect(() => {
        setSearchUsername('')
    },[pathname])

    return (
        <div>
            <input
                type="text"
                placeholder="Search GitHub user..."
                value={searchUsername}
                className='appearance-none p-2 border-solid border-2 border-slate-500 mr-2 focus:border-slate-600 rounded-sm'
                onChange={(e) => setSearchUsername(e.target.value)}
            />
            <Button onClick={() => handleSearch(searchUsername)} label={"Search"} />
        </div>
    )
}

export default SearchUser