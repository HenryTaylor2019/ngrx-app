import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Event } from 'src/app/shared/models/event-form-data.model';
import { User } from 'src/app/shared/models/user-form-data.model';
import { UserFacadeService } from 'src/app/shared/services/users-facade.service';
import { userActions } from '../../../shared/store/actions/users.actions';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  public userForm: FormGroup;

  @Input()
  public event: Event;

  @Input()
  public capacity: number;

  public users$: Observable<User[]>;

  public reachedCapacity: boolean = false;

  public numOfSubmissions: number = 0;

  constructor(private userFacadeService: UserFacadeService) {
    this.userForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      profession: new FormControl('', Validators.required),
      nationality: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.capacity = this.event.numOfMembers;
    this.users$ = this.userFacadeService.getUsers();
    this.users$.subscribe((user) => {
      if (user.length === this.event.numOfMembers) {
        this.reachedCapacity = true;
      }
      else {
        this.reachedCapacity = false;

      }
    });
  }

  onSubmit(form: FormGroup) {

    this.userFacadeService.dispatch(
      userActions.addUser({ payload: form.value })
    );
    this.userForm.reset();
  }
}
