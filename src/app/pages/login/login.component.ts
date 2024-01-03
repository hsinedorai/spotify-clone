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
// this.obtainUrlLogin();
}
obtainUrlLogin(){
  window.location.href = this.sptifyservice.obtainUrlLogin();

}
}
