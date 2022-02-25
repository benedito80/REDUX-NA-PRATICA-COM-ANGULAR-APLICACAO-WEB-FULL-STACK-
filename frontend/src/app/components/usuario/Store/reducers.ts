import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { usuarioReducer, UsuarioState } from './usuario.reducers';

export const reducers: ActionReducerMap<UsuarioState> = {
  usuarios: usuarioReducer,
  router: routerReducer,
};
