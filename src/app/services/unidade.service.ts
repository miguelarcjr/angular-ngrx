import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root'
})
export class UnidadeService {

  constructor(private http: HttpClient) { }

  save(unidade: any) {
    return this.http.post('http://localhost:3000/unidades', unidade);
  }

  getAll() {
    return this.http.get('http://localhost:3000/unidades') as Observable<any[]>;
  }
}
