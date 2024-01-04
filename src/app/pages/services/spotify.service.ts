import { userInfo } from 'os';
import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from '../../../environments/environment';
import Spotify from 'spotify-web-api-js';
import { IUser } from '../../interfaces/IUser';
import { retry } from 'rxjs';
import { spotifyuser } from '../common/spotifyHelp';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  spotifyApi:Spotify.SpotifyWebApiJs=null;
  user: IUser;
  constructor() {
    this.spotifyApi=new Spotify();

  }




async initialServiceUser() {
  if(!!this.user)
    return true;

  const token = localStorage.getItem('token');

  if(!token)
    return false;

  try {

    this.definirAccessToken(token);
    await this.obtainSpotifyuser();
    return !!this.user;

  }catch(ex){
    return false;
  }
}


async obtainSpotifyuser() {
  const userInfo = await this.spotifyApi.getMe();

  this.user=spotifyuser(userInfo);
};


obtainUrlLogin(){

  const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType;
}

obtainTokenUrlCallback(){
  console.log(window.location.hash)
  if(!window.location.hash)
  return '';

  const params=window.location.hash.substring(1).split('&');
return params[0].split('=')[1];
}

definirAccessToken(token:string){
  this.spotifyApi.setAccessToken(token);
  localStorage.setItem('token',token);
 // this.spotifyApi.skipToNext();
}

}
