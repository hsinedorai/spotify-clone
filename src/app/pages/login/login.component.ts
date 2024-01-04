import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{


constructor(private sptifyservice:SpotifyService){}

ngOnInit(): void {
 //this.obtainUrlLogin();
 //this.sptifyservice.tokenUrlCallback();
 this.verifTokenUrlCallback();
}

verifTokenUrlCallback(){
  const token=this.sptifyservice.obtainTokenUrlCallback();
  if(!!token){
    this.sptifyservice.definirAccessToken(token);
  }
}
obtainUrlLogin() {
  window.location.href = this.sptifyservice.obtainUrlLogin();

}



}
