import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Usuarios } from 'src/app/components/usuario/model';
import { UsuarioState } from './usuario.reducers';

const selectRouter = createFeatureSelector<RouterReducerState>('router');

export const usuarioAllSelector = createSelector(
  (state: UsuarioState) => state.usuarios,
  (usuarios: ReadonlyArray<Usuarios>) => usuarios
);

const routeParams = createSelector(
  (state: UsuarioState) => state.router.state,
  (state) => state.params
);

export const usuarioSelectorById = createSelector(
  usuarioAllSelector,
  routeParams,
  (usuarios: ReadonlyArray<Usuarios>, { id }) => {
    return usuarios.filter((m) => m._id == id)[0];
  }
);
