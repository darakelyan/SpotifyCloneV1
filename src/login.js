import React from "react";
import "./login.css";
import { loginUrl } from "./spotify";

function login() {
    console.log(loginUrl)
  return (
    <div className="login">
        <img src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg" alt="Spotify Logo"></img>
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>

    </div>
  )
}

export default login