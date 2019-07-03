import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { TrilhaSonora } from './trilha-sonora';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class TrilhasSonorasService {

  private url: string = 'http://localhost:3000/trilhasSonoras';

  trilhasChanged = new EventEmitter<Observable<TrilhaSonora[]>>();

  constructor(private http: Http) { }

  getAll(): Observable<TrilhaSonora[]> {
    return this.http.get(this.url)
    .map(res => res.json())
    .catch(this.handleError);
  }

  private handleError(error: any) {
    let erro = error.message || 'Server error';
    console.error('Ocorreu um erro', error);
    return Observable.throw(erro);
  }

  add(trilha: TrilhaSonora) {
    return this.http.post(this.url, JSON.stringify(trilha),
    {headers: this.getHeaders()})
    .do(data => this.trilhasChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  remove(id: number) {
    return this.http.delete(this.getUrl(id), {headers: this.getHeaders()})
    .map(res => res.json())
    .do(data => this.trilhasChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  private getUrl(id: number) {
    return `${this.url}/${id}`;
  }

  update(trilhaSonora: TrilhaSonora) {
    return this.http.put(this.url, JSON.stringify(trilhaSonora),
    {headers: this.getHeaders()})
    .do(data => this.trilhasChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  get(id: number) {
    return this.getAll()
    .map((list: any) => list.find(trilhasonora => trilhasonora.codigo == id))
    .catch(this.handleError);
  }
}
