import {GITHUB_API_BASE_URL} from "../config";

const fetchUserProfile = async (username) => {
    const response = await fetch(`${GITHUB_API_BASE_URL}/users/${username}`);
    console.log({response})
    if (!response.ok) {
        throw new Error(`Error fetching user profile: ${response.statusText}`);
    }
    return await response.json();
}

export default fetchUserProfile