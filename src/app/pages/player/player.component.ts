import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',

  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent implements OnInit {
  showContent:boolean;

  ngOnInit(): void {
    setTimeout(() => {
      this.showContent = true;
    }, 5000);

  }





}
