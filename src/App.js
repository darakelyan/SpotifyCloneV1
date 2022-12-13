import React, {useEffect,useState} from "react"
import './App.css';
import Login from "./login"
import {getTokenFromUrl} from "./spotify"

// Import Spotify Web Api class from the package that was just installed
import SpotifyWebApi from "spotify-web-api-js"

// Object to represent spotify in the app
const spotify = new SpotifyWebApi();

function App() {
  const [token,setToken] = useState()

  // Code runs only once the page is loaded
  useEffect(() => {

    // Get the auth token from the url as defined in spotify.js
    const hash = getTokenFromUrl();

    // reset url bar to not show the access token, so only the app knows the token.
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token){
      setToken(_token);
      spotify.setAccessToken(_token)
    }

    console.log("token",token);
  },[]);

  return <div className="app"> {token ? <h1>Logged in</h1>:<Login />} </div>
}

export default App;
