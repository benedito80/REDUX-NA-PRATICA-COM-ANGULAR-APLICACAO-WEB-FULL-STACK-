import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { UsuarioState } from '../Store/usuario.reducers';
import { usuarioSelectorById } from './../Store/usuario.selector';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css'],
})
export class usuarioDetalheComponent {
  constructor(private store: Store<UsuarioState>) {}

  usuario$ = this.store.pipe(select(usuarioSelectorById));
}
