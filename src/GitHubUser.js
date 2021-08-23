import React, {
    useState,
    useEffect
} from "react";
import "./GitHubUser.css";

// Fetch data from the GitHub API 
function GitHubUser({ login }) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
            .then(res => res.json())
            .then(setData)
            .catch(console.error);
    }, [login]);

    if (data) {
        return (
            <div class="profile">
                <h1>{data.login}</h1>
                {data.email ? <p>{data.email}</p> : ""}
                <img src={data.avatar_url} width={100} alt="GitHub profile picture" />
                {data.name ? <p>{data.name}</p> : ""}
                {data.html_url ? <p>{data.html_url}</p> : ""}
                {data.company ? <p>{data.company}</p> : ""}
                {data.bio ? <p>{data.bio}</p> : ""}
                <p>Public Repos: {data.public_repos}</p>
            </div>
        )
    }
    return null;
}

export default GitHubUser;