



import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../services/spotify.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor( private router: Router,private spotifyservice:SpotifyService) {}

  canActivate( ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

const token=localStorage.getItem('token');
if ( !token) {
  return this.noAuth();
}
return new Promise((res)=>{
  const userCreate=this.spotifyservice.initialServiceUser();
  if(userCreate)
  res(true);
else
res(this.noAuth());
});


  }


  noAuth(){
    localStorage.clear();
    this.router.navigate(['/login']);
    return false;
  }
}



