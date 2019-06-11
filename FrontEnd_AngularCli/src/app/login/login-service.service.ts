import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { User } from './user';
import { Http,Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginServiceService {

  public showNavBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  private authenticated = false;

  private url: string = 'http://localhost:9090/usuarios';

  constructor(private router: Router,private http: Http) { }

  signIn(user: User) {
    return this.http.post(this.url,JSON.stringify(user),
    {headers: this.getHeaders()})
    .do(data => {
      this.authenticated = true;
      this.showNavBar(true);
      this.router.navigate(['/']);
    })
    .catch(this.handleError)
  
  }

  private handleError(error: any) {
    let erro = error.message || 'Server error';
    console.error('Ocorreu um erro', error);
    this.authenticated = false;
    return Observable.throw(erro);
  }


  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  logout() {
    this.authenticated = false;
    this.showNavBar(false);
    alert("Desconectado com sucesso!");
    this.router.navigate(['/home']);
  }

  isAuthenticated() {
    return this.authenticated;
  }

  private showNavBar(ifShow: boolean) {
    this.showNavBarEmitter.emit(ifShow);
  }

}
