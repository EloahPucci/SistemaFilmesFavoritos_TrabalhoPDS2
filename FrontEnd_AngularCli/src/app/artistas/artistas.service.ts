import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Artista } from './artista';

@Injectable()
export class ArtistasService {

  private url: string = 'http://localhost:3000/artistas';

  artistasChanged = new EventEmitter<Observable<Artista[]>>();

  constructor(private http: Http) { }

  getAll(): Observable<Artista[]> {
    return this.http.get(this.url)
    .map(res => res.json())
    .catch(this.handleError);
  }

  private handleError(error: any) {
    let erro = error.message || 'Server error';
    console.error('Ocorreu um erro', error);
    return Observable.throw(erro);
  }

  add(artista: Artista) {
    return this.http.post(this.url, JSON.stringify(artista),
    {headers: this.getHeaders()})
    .do(data => this.artistasChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  remove(id: number) {
    return this.http.delete(this.getUrl(id), {headers: this.getHeaders()})
    .map(res => res.json())
    .do(data => this.artistasChanged.emit(this.getAll()))
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

  update(artista: Artista) {
    return this.http.put(this.url, JSON.stringify(artista),
    {headers: this.getHeaders()})
    .do(data => this.artistasChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  get(id: number) {
    return this.getAll()
    .map((list: any) => list.find(artista => artista.codigo == id))
    .catch(this.handleError);
  }
}
