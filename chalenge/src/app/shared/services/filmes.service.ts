import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from '../models/filme.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  API: string = 'http://localhost:3000/filmes';
  constructor( private httpClient: HttpClient) { }

  getFilmes(): Observable<{response: Filme}> {
    return this.httpClient.get<{response: Filme}>(this.API);
  }
}
