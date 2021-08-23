import React, { 
    useState, 
    useEffect 
} from "react";

// Fetch data from the GitHub API 
function GitHubUser({ login }){
    const [data, setData] = useState(null);
    useEffect(()=> {
      fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
    },[login]);
  
    if (data){
      return(
        <div>
          <h1>{data.login}</h1>
          <img src={data.avatar_url} width={100} alt="User profile"/>
          <p>{JSON.stringify(data)}</p>
        </div>
      )
    }
    return null;
  }

export default GitHubUser;