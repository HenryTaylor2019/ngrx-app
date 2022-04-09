import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/app/shared/models/event-form-data.model';
import { User } from 'src/app/shared/models/user-form-data.model';
import { EventFacadeService } from 'src/app/shared/services/event-facade.service';
import { UserFacadeService } from 'src/app/shared/services/users-facade.service';
import { userActions } from 'src/app/shared/store/actions/users.actions';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public users$: Observable<User[]>;

  public event$: Observable<Event>;

  public capacity: number;

  constructor(private userFacadeService: UserFacadeService, private eventFacadeService: EventFacadeService) {

  }

  ngOnInit(): void {
    this.users$ = this.userFacadeService.getUsers();
    this.event$ = this.eventFacadeService.getEvent();
  }

  onReset() {
    // Reset state and return to homepage
  }

  onRemoveUser(id: string): void {
    this.userFacadeService.dispatch(userActions.removeUser({ id }))
  }

  addUserPoint(id: string): void {
    this.userFacadeService.dispatch(userActions.addUserPoint({ id }))
  }
}
