import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/models/appState';
import { Quake } from '../models/quake';

export const selectQuakes = (state: AppState) => state.quakes;

export const isLoadingSelector = createSelector(
    selectQuakes,
    (state) => state.isLoading
);

export const quakesSelector = createSelector(
    selectQuakes,
    (state) => state.quakes
);

export const singleQuakeSelector = (quakeId: string) => createSelector(
    selectQuakes,
    (state) => {
        var quakeById = state.quakes.find(quakes => quakes.id == quakeId)

        if(!quakeById) return {id: ''} as Quake;

        return quakeById;
    }
);

export const errorSelector = createSelector(
    selectQuakes,
    (state) => state.error
);