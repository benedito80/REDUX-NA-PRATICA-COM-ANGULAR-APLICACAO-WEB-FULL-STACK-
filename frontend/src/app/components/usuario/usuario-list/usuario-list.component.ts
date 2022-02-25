import { updateUsuario } from './../Store/usuario.action';
import { usuarioAllSelector } from './../Store/usuario.selector';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Usuarios } from '../model';
import { deleteUsuario } from '../Store/usuario.action';
import { UsuarioState } from '../Store/usuario.reducers';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css'],
})
export class usuarioListComponent implements OnInit /*, OnDestroy*/ {
  selectedIndex: number = null;

  constructor(private store: Store<UsuarioState>) {}

  usuarios$ = this.store.pipe(select(usuarioAllSelector));

  ngOnInit(): void {
    this.usuarios$;
  }

  deleteUsuario(usuarioId: number) {
    if (confirm('Deseja realmente excluir?')) {
      this.store.dispatch(deleteUsuario(usuarioId));
    }
  }

  usuarioName = {} as Usuarios;

  enableEdit(usuario: Usuarios, index: number): void {
    this.selectedIndex = index;
    this.usuarioName.usuario = usuario.usuario;
    this.usuarioName.cns = usuario.cns;
    this.usuarioName.acs = usuario.acs;
    this.usuarioName.bairro = usuario.bairro;
  }

  cancelEdit(): void {
    this.selectedIndex = null;
  }

  update(usuario: Usuarios): void {
    const m = { ...usuario };
    m.usuario = this.usuarioName.usuario;
    m.cns = this.usuarioName.cns;
    m.bairro = this.usuarioName.bairro;

    this.store.dispatch(updateUsuario(m));
    this.selectedIndex = null;
  }
}
