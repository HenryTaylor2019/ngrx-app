import { createReducer, on } from '@ngrx/store';
import { Event } from '../../models/event-form-data.model';
import * as EventForm from '../actions/event.actions';

export interface EventState {
  eventName: string;
  numOfMembers: number;
}

const defaultState: EventState = {
  eventName: '',
  numOfMembers: 0,
};

export const eventReducer = createReducer(
  defaultState,
  on(EventForm.eventActions.addEvent, (state, { payload }) => {
    return {
      ...state,
      ...payload,
      nameOfEvent: payload.eventName,
      numOfMembers: payload.numOfMembers
    };
  }),
);

