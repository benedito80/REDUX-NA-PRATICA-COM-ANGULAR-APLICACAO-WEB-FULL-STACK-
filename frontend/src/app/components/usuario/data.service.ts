import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Usuarios } from './model';
import { catchError, delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<ReadonlyArray<Usuarios>> {
    return this.http
      .get<ReadonlyArray<Usuarios>>(`${environment.API}/usuarios`)
      .pipe(map((res) => res));
  }

  getUsuarioById(usuarioId: any) {
    return this.http
      .get<Usuarios[]>(`${environment.API}/usuarios/cns/${usuarioId}`)
      .pipe(
        map((res) => res),
        /*catchError((error: HttpErrorResponse) => {
          console.error(error);
          return throwError(error);
        })*/
      );
  }

  addUsuarios(usuario: Usuarios): Observable<Usuarios> {
    return this.http
      .post<Usuarios>(`${environment.API}/usuarios`, usuario)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          return throwError(error);
        })
      );
  }

  deleteUsuario(usuarioId: number) {
    return this.http.delete(`${environment.API}/usuarios/${usuarioId}`).pipe(
      delay(1000),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  updateUsuario(usuario: Usuarios): Observable<Usuarios> {
    return this.http
      .put<Usuarios>(`${environment.API}/usuarios/${usuario._id}`, usuario)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          return throwError(error);
        })
      );
  }
}
