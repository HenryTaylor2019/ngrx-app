import { createAction, props } from '@ngrx/store';
import { Event } from '../../models/event-form-data.model';

export enum ActionTypes {
  AddEvent = '[Event] Add Event',
}

const addEvent = createAction(
    ActionTypes.AddEvent,
    props<{ payload: Event }>()
);

export const eventActions = {
    addEvent,
}