import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user-form-data.model';

@Component({
  selector: 'app-leaderboard-cards',
  templateUrl: './leaderboard-cards.component.html',
  styleUrls: ['./leaderboard-cards.component.scss']
})
export class LeaderboardCardsComponent implements OnInit {
  @Input()
  public users: Array<User>
  
  @Input()
  public showButtons: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
