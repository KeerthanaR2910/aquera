import {GITHUB_API_BASE_URL} from "../config";
import axios from "axios";

const fetchRepositories =  async (username, page = 1, perPage = 10) => {
    return await axios.get(`${GITHUB_API_BASE_URL}/users/${username}/repos?page=${page}&per_page=${perPage}`);
};

export default fetchRepositories