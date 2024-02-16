import {GITHUB_API_BASE_URL} from "../config";

const fetchRepositories =  async (username, page = 1, perPage = 5) => {
    const result = await fetch(
        `${GITHUB_API_BASE_URL}/users/${username}/repos?page=${page}&per_page=${perPage+1}`
    );
    if (!result.ok) {
        throw new Error(`Error fetching repositories: ${result.statusText}`);
    }

    return await result.json();
};

export default fetchRepositories