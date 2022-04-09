import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Event } from "../../models/event-form-data.model";

const selectEventState = createFeatureSelector<Event>('eventState');

const selectEvent = createSelector(selectEventState, (state) => state);

export const EventSelectors = {
    event: selectEvent
}