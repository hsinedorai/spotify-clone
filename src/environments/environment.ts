export const environment = {
  production: false
};


export const SpotifyConfiguration ={
  clientId:'53e6ec3507f24ba08b4eb76ebab0a383',
  authEndpoint:'https://accounts.spotify.com/authorize',
  redirectUrl:'http://localhost:4200/login/',
  scopes:[

    "user-read-currently-playing",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-recently-played",
    "user-top-read",
    "user-read-playback-position",
    "user-library-read",
    "user-library-modify",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-private",
    "user-read-email"


  ]
}









