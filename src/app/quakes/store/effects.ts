import { Injectable } from "@angular/core";
import { ofType, Actions, createEffect } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { QuakeActions } from ".";
import { QuakeService } from "../services/quake.service"

@Injectable()
export class QuakeEffects {
    constructor(
        private actions$: Actions,
        private quakeService: QuakeService
    ) { }

    getQuakes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(QuakeActions.getQuakes),
            mergeMap(() => {
                return this.quakeService.getAllQuakes().pipe(
                    map((quakes) => QuakeActions.getQuakesSuccess({ quakes })),
                    catchError((error) =>
                        of(QuakeActions.getQuakesFailure({ error: error.message }))
                    )
                );
            })
        )
    );
}