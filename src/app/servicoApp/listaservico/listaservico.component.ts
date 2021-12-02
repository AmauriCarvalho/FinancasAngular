import { Listaservico } from './../../model/Listaservico';
import { ServicoService } from './../../servico.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listaservico',
  templateUrl: './listaservico.component.html',
  styleUrls: ['./listaservico.component.css']
})
export class ListaservicoComponent implements OnInit {

  listaservico: Listaservico[] = []

  constructor(private servicoService: ServicoService, private router: Router) { }

  getListaServico(){
    this.servicoService.getListaServico().subscribe
    ((data) => (this.listaservico = data) );
  }

  acessaItensLista(){
    this.router.navigate(['listaservicoitens']);
  }

  postListaServico(){
    this.router.navigate(['postlistaservico']);
  }

  updateListaServico(listaservico: Listaservico){
    localStorage.setItem("id", listaservico.id.toString());
    this.router.navigate(['uplistaservico']);
  }

  deleteListaServico(listaservico: Listaservico){
    this.servicoService.deleteListaServico(listaservico)
      .subscribe(data => {this.listaservico=this.listaservico.filter(p=>p!==listaservico);
      alert(listaservico.nome_listaServ+" Deletado!");
      })
  }


  ngOnInit(): void {
    this.router.events.subscribe((value) => {this.getListaServico()});
    this.getListaServico();
  }

}
