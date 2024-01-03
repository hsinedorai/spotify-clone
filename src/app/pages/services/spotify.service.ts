import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

constructor() { }



obtainUrlLogin(){

  const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType;
}

}
