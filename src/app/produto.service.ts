import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listaproduto } from './model/Listaproduto';
import { Produto } from './model/Produto';

@Injectable({ providedIn: 'root' })
export class ProdutoService {

  constructor(private http: HttpClient) {}

  url = 'http://localhost:8080/produto';

  urlLista = 'http://localhost:8080/listaproduto';

  getProduto() {
    return this.http.get<Produto[]>(this.url);
  }

  postProduto(produto: Produto){
    return this.http.post<Produto>(this.url, produto);
  }

  getProdutoID(id: number){
    return this.http.get<Produto>(this.url+"/"+id);
  }


  updateProduto(produto: Produto){
    return this.http.put<Produto>(this.url+"/"+produto.id, produto)
  }

  deleteProduto(produto: Produto){
    return this.http.delete<Produto>(this.url+"/"+produto.id)
  }

  //Lista produto

  postListaProduto(listaproduto: Listaproduto){
    return this.http.post<Listaproduto>(this.urlLista, listaproduto);
  }

  getListaProduto() {
    return this.http.get<Listaproduto[]>(this.urlLista);
  }

  getListaProdutoID(id: number){
    return this.http.get<Listaproduto>(this.urlLista+"/"+id);
  }

  updateListaProduto(listaproduto: Listaproduto){
    return this.http.put<Listaproduto>(this.urlLista+"/"+listaproduto.id, listaproduto)
  }

  deleteListaProduto(listaproduto: Listaproduto){
    return this.http.delete<Listaproduto>(this.urlLista+"/"+listaproduto.id)
  }


}
