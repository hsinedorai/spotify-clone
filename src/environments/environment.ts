export const environment = {
  production: false
};


export const SpotifyConfiguration ={
  clientId:'53e6ec3507f24ba08b4eb76ebab0a383',
  authEndpoint:'https://accounts.spotify.com/authorize',
  redirectUrl:'http://localhost:4200/login/',
  scopes:[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-modify-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "user-library-read",
    "playlist-read-private",
    "playlist-read-collaborative"

  ]
}









