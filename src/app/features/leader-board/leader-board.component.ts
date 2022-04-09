import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user-form-data.model';
import { UserFacadeService } from 'src/app/shared/services/users-facade.service';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss']
})
export class LeaderBoardComponent implements OnInit {
  public users$: Observable<User[]>;

  constructor(private userFacadeService: UserFacadeService) {
  }

  ngOnInit(): void {
    this.users$ = this.userFacadeService.getUsersOrderedByPoints();
  }
}
