import { createAction, props } from "@ngrx/store";
import { Quake } from "../models/quake";

// get the whole lsit of quakes
export const getQuakes = createAction(
    '[Quake List Page] Get Quakes'
);

export const getQuakesSuccess = createAction(
    '[Quake List Page] Get Quakes Success',
    props<{ quakes: Quake[] }>()
);
export const getQuakesFailure = createAction(
    '[Quake List Page] Get Quakes Failure',
    props<{ error: string }>()
);

