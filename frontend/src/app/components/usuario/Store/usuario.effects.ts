import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  mergeMap,
} from 'rxjs/operators';
import { DataService } from 'src/app/components/usuario/data.service';
import {
  addUsuario,
  addUsuarioSuccess,
  deleteUsuario,
  updateUsuario,
  updateUsuarioSuccess,
  getUsuarioById,
  deleteUsuarioSuccess,
  getUsuarios,
  getUsuarioSuccess,
} from './usuario.action';

@Injectable()
export class UsuarioEffects {
  constructor(private action$: Actions, private dataService: DataService) {}

  getUsuario$ = createEffect(() =>
    this.action$.pipe(
      ofType(getUsuarios),
      exhaustMap(() =>
        this.dataService.getUsuarios().pipe(
          map((usuario) => getUsuarioSuccess(usuario)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  getUsuarioById$ = createEffect(() =>
    this.action$.pipe(
      ofType(getUsuarioById),
      exhaustMap(({ query }) =>
        this.dataService.getUsuarioById(query).pipe(
          map((usuario) => getUsuarioSuccess(usuario)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addUsuario$ = createEffect(() =>
    this.action$.pipe(
      ofType(addUsuario),
      concatMap(({ usuario }) =>
        this.dataService.addUsuarios(usuario).pipe(
          map((newUsuario) => addUsuarioSuccess(newUsuario)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deleteUsuario$ = createEffect(() =>
    this.action$.pipe(
      ofType(deleteUsuario),
      mergeMap(({ usuarioId }) =>
        this.dataService.deleteUsuario(usuarioId).pipe(
          map(() => deleteUsuarioSuccess(usuarioId)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updateUsuario$ = createEffect(() =>
    this.action$.pipe(
      ofType(updateUsuario),
      concatMap(({ usuario }) =>
        this.dataService.updateUsuario(usuario).pipe(
          map(() => updateUsuarioSuccess(usuario)),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
