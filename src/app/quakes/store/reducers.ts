import { createReducer, on } from '@ngrx/store';

import { QuakeActions } from '.'
import { QuakesState } from '../models/quakesState';

export const collectionFeatureKey = 'collection';

const initialState: QuakesState = {
    isLoading: false,
    quakes: [],
    error: null,
};

export const reducers = createReducer(
    initialState,
    on(QuakeActions.getQuakes, (state) => ({ ...state, isLoading: true })),
    on(QuakeActions.getQuakesSuccess, (state, action) => ({
        ...state, 
        isLoading: false, 
        quakes: action.quakes
    })),
    on(QuakeActions.getQuakesFailure, (state, action) => ({
        ...state, 
        isLoading: false, 
        error: action.error
    })),
);