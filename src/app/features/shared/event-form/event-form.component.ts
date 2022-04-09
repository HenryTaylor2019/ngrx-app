import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventFacadeService } from 'src/app/shared/services/event-facade.service';
import { eventActions } from 'src/app/shared/store/actions/event.actions';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  public eventForm = new FormGroup({
    eventName: new FormControl('', Validators.required),
    numOfMembers: new FormControl('', Validators.required),
  });

  constructor(private eventFacadeService: EventFacadeService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: FormGroup) {
    console.log(form.value)
    this.eventFacadeService.dispatch(eventActions.addEvent({ payload: form.value }));
    this.eventForm.reset();
    this.router.navigate(['/', 'register']);
  }
}
