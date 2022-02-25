import { createReducer, on } from '@ngrx/store';
import { Usuarios } from 'src/app/components/usuario/model';
import { RouterReducerState } from '@ngrx/router-store';
import {
  addUsuarioSuccess,
  deleteUsuarioSuccess,
  getUsuarioSuccess,
  updateUsuarioSuccess,
} from './usuario.action';

const initialState: ReadonlyArray<Usuarios> = [];

export interface UsuarioState {
  usuarios: ReadonlyArray<Usuarios>;
  router: RouterReducerState<any>;
}

export const usuarioReducer = createReducer(
  initialState,
  on(getUsuarioSuccess, (state, { usuarios }) => [...usuarios]),
  on(addUsuarioSuccess, (state, { usuario }) => [...state, usuario]),
  on(deleteUsuarioSuccess, (state, { usuarioId }) =>
    state.filter((usuario) => usuario._id !== usuarioId)
  ),
  on(updateUsuarioSuccess, (state, { usuario }) => {
    const usuarios = state.map((m) => {
      if (m._id == usuario._id) {
        return usuario;
      }
      return m;
    });
    return usuarios;
  })
);
