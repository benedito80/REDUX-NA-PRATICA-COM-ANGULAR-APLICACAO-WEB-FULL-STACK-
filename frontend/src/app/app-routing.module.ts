import { usuarioDetalheComponent } from './components/usuario/usuario-detalhe/usuario-detalhe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioFormComponent } from './components/usuario/usuario-form/usuario-form.component';
import { UsuarioHomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: UsuarioHomeComponent },
  { path: 'usuarios', component: UsuarioFormComponent },
  { path: 'usuarios/:id', component: usuarioDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
