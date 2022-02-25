import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModules } from './app.material.module';
import { UsuarioHomeComponent } from './components/home/home.component';
import { reducers } from './components/usuario/Store/reducers';
import { RouterSerializer } from './components/usuario/Store/routerSerializer';
import { UsuarioEffects } from './components/usuario/Store/usuario.effects';
import { usuarioDetalheComponent } from './components/usuario/usuario-detalhe/usuario-detalhe.component';
import { UsuarioFormComponent } from './components/usuario/usuario-form/usuario-form.component';
import { usuarioListComponent } from './components/usuario/usuario-list/usuario-list.component';

@NgModule({
  declarations: [
    AppComponent,
    usuarioListComponent,
    UsuarioFormComponent,
    usuarioDetalheComponent,
    UsuarioHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModules,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([UsuarioEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: RouterSerializer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
