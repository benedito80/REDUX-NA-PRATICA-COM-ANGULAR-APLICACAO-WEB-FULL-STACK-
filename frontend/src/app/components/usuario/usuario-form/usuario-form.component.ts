import { getUsuarios, addUsuario } from '../Store/usuario.action';
import { Usuarios } from 'src/app/components/usuario/model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromUsuarioActions from '../Store/usuario.action';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css'],
})
export class UsuarioFormComponent implements OnInit {
  newUsuario: Usuarios = new Usuarios();
  constructor(private store: Store) {}
  searchControl: any;

  ngOnInit(): void {
    this.getAllUsuarios();
  }

  doSearch() {
    if (this.searchControl == '' || this.searchControl == undefined) {
      this.getAllUsuarios();
      alert('Forneça um CNS para realizar a busca!');
      return;
    }
    const query = this.searchControl;
    this.store.dispatch(fromUsuarioActions.getUsuarioById({ query }));
  }

  verifica(): boolean {
    if (
      this.newUsuario.usuario == '' ||
      this.newUsuario.acs == '' ||
      (this.newUsuario.hipertenso || this.newUsuario.diabete) === false
    ) {
      alert('Os campos nome, patologia e ACS são obrigatórios!!!');
      return false;
    }
    return true;
  }

  getAllUsuarios(): void {
    this.store.dispatch(getUsuarios());
  }

  addNewUsuario(): void {
    if (this.verifica()) {
      this.store.dispatch(addUsuario(this.newUsuario));
      this.newUsuario = new Usuarios();
    }
  }

  updateList() {
    this.searchControl = '';
    this.getAllUsuarios();
  }
}
