import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public navItems = 
    {
      home: '',
      form: '/register',
      leaderBoard: '/leaderboard',
    }
  
  constructor() { }

  ngOnInit(): void {
  }

}
