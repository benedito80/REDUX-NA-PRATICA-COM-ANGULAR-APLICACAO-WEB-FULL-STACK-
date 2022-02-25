import { createAction, props } from '@ngrx/store';
import { Usuarios } from '../model';

export const getUsuarios = createAction('[Usuario] Get usuario');

export const getUsuarioById = createAction(
  '[Usuario] Usuario ById',
  props<{ query: string }>()
);

export const getUsuarioSuccess = createAction(
  '[Usuario] Get usuario success',
  (usuarios: ReadonlyArray<Usuarios>) => ({ usuarios })
  // props<{ usuarios: ReadonlyArray<Usuarios> }>()
);

export const addUsuario = createAction(
  '[Usuario] Add usuario',
  (usuario: Usuarios) => ({ usuario })
);

export const addUsuarioSuccess = createAction(
  '[Usuario] Add usuario success',
  (usuario: Usuarios) => ({ usuario })
);

export const deleteUsuario = createAction(
  '[Usuario] Delete usuario',
  (usuarioId: number) => ({ usuarioId })
);

export const deleteUsuarioSuccess = createAction(
  '[Usuario] Delete usuario success',
  (usuarioId: number) => ({ usuarioId })
);

export const updateUsuario = createAction(
  '[Usuario] Update usuario',
  (usuario: Usuarios) => ({ usuario })
);

export const updateUsuarioSuccess = createAction(
  '[Usuario] Update usuario success',
  (usuario: Usuarios) => ({ usuario })
);
