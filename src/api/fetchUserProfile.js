import {GITHUB_API_BASE_URL} from "../config";
import axios from "axios";

const fetchUserProfile = async (username) => {
    return await axios.get(`${GITHUB_API_BASE_URL}/users/${username}`);
}

export default fetchUserProfile