// URL where we need to authenticate using Spotify
export const authEndpoint = "https://accounts.spotify.com/authorize";

// The URI we gave spotify web api settings
const redirectUri = "https://localhost:3000/";

// THe client ID provided to you by the spotify web api and needs to be mentioned here
const clientId = "6b25963e79694927b7dbdc1950e60155";

// Permissions you need to ask spotify for. More available in spotify api documentation
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// Extract Access Token from URL once we have it
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial,item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
        },{});
}

// Final URL that needs to be called in order to authorize a user for the spotify clone ap
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;