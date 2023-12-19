import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UnidadeService } from 'src/app/services/unidade.service';
import {
  addUnidade,
  addUnidadeError,
  addUnidadeSuccess,
  loadUnidade,
  loadUnidadeSuccess,
} from './unidade.actions';
import { catchError, concatMap, exhaustMap, map, of } from 'rxjs';
import { createFeature } from '@ngrx/store';

@Injectable()
export class UnidadeEffects {
  constructor(private service: UnidadeService, private action$: Actions) {}

  addUnidade$ = createEffect(() =>
    this.action$.pipe(
      ofType(addUnidade),
      concatMap(({ unidade }) =>
        this.service.save(unidade).pipe(
          map((unidadeRes) => {
            return addUnidadeSuccess({ unidade: unidadeRes });
          }),
          catchError((error) => of(addUnidadeError({ error: error })))
        )
      )
    )
  );

  loadUnidade$ = createEffect(() => this.action$.pipe(
    ofType(loadUnidade),
    exhaustMap(() =>
        this.service.getAll().pipe(
            map((unidadesRes) => loadUnidadeSuccess({unidades: unidadesRes})),
        )
    )
  ));
}
