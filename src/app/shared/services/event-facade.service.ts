import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Event } from '../models/event-form-data.model';
import { EventState } from '../store/reducers/event.reducer';
import { EventSelectors } from '../store/selectors/event.selectors';

@Injectable({ providedIn: 'root' })
export class EventFacadeService {
  constructor(private store: Store<EventState>) {}

  dispatch(action: Action): void {
    return this.store.dispatch(action);
  }

  getEvent(): Observable<Event> {
    return this.store.select(EventSelectors.event);
  }
}
