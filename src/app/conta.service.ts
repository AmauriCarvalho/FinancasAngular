import { Listaconta } from './model/listaconta';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conta } from './model/Conta';
import { Listaproduto } from './model/Listaproduto';
import { Produto } from './model/Produto';

@Injectable({ providedIn: 'root' })
export class ContaService {

  constructor(private http: HttpClient) {}

  url = 'http://localhost:8080/conta';

  urlLista = 'http://localhost:8080/listaconta';

  getConta() {
    return this.http.get<Conta[]>(this.url);
  }

  postConta(conta: Conta){
    return this.http.post<Conta>(this.url, conta);
  }

  getContaID(id: number){
    return this.http.get<Conta>(this.url+"/"+id);
  }


  updateConta(conta: Conta){
    return this.http.put<Conta>(this.url+"/"+conta.id, conta)
  }

  deleteConta(conta: Conta){
    return this.http.delete<Conta>(this.url+"/"+conta.id)
  }

  //Lista conta

  postListaConta(listaconta: Listaconta){
    return this.http.post<Listaconta>(this.urlLista, listaconta);
  }

  getListaConta() {
    return this.http.get<Listaconta[]>(this.urlLista);
  }

  getListaContaID(id: number){
    return this.http.get<Listaconta>(this.urlLista+"/"+id);
  }

  updateListaConta(listaconta: Listaconta){
    return this.http.put<Listaconta>(this.urlLista+"/"+listaconta.id, listaconta)
  }

  deleteListaConta(listaconta: Listaconta){
    return this.http.delete<Listaconta>(this.urlLista+"/"+listaconta.id)
  }


}
