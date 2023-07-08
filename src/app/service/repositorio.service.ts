import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repositorios } from '../interfaces/repositorio';

const API = "https://api.github.com/users/Werisu/repos";

@Injectable({
  providedIn: 'root'
})
export class RepositorioService {

constructor(private http: HttpClient) { }

public getAll(): Observable<Repositorios>{
  return this.http.get<Repositorios>(API);
}

public getProjetosSelecionados() {
  const perPage = 100; // Define o número de itens por página que você deseja recuperar
  return this.http.get<any[]>(API, { params: { per_page: perPage.toString() } });
}

public getProjetoPorNome(){

}

}
