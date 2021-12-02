import { HttpClient } from '@angular/common/http';
import { Servico } from './model/Servico';
import { Injectable } from '@angular/core';
import { Listaservico } from './model/Listaservico';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http: HttpClient) {}

  url = 'http://localhost:8080/servico';

  urlLista = 'http://localhost:8080/listaservico';

  getServico() {
    return this.http.get<Servico[]>(this.url);
  }

  postServico(listaservico: Servico){
    return this.http.post<Servico>(this.url, listaservico);
  }

  getServicoID(id: number){
    return this.http.get<Servico>(this.url+"/"+id);
  }


  updateServico(listaservico: Servico){
    return this.http.put<Servico>(this.url+"/"+listaservico.id, listaservico)
  }

  deleteServico(listaservico: Servico){
    return this.http.delete<Servico>(this.url+"/"+listaservico.id)
  }

  //Lista servico

  postListaServico(listaproduto: Listaservico){
    return this.http.post<Listaservico>(this.urlLista, listaproduto);
  }

  getListaServico() {
    return this.http.get<Listaservico[]>(this.urlLista);
  }

  getListaServicoID(id: number){
    return this.http.get<Listaservico>(this.urlLista+"/"+id);
  }

  updateListaServico(listaservico: Listaservico){
    return this.http.put<Listaservico>(this.urlLista+"/"+listaservico.id, listaservico)
  }

  deleteListaServico(listaservico: Listaservico){
    return this.http.delete<Listaservico>(this.urlLista+"/"+listaservico.id)
  }
}

