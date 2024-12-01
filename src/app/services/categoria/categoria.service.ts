import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Categoria {
  id: number;
  nome: string;
  descricao: string;
  pathImage: string;
}

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private apiUrl = 'http://localhost:5016/api/categoria'; // URL do backend

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl);
  }
}
