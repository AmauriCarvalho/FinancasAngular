import { ServicoService } from './../../servico.service';
import { Listaservico } from './../../model/Listaservico';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-servico-itens',
  templateUrl: './lista-servico-itens.component.html',
  styleUrls: ['./lista-servico-itens.component.css']
})
export class ListaServicoItensComponent implements OnInit {

  listaservico: Listaservico[] = [];

  listaservicomodel: Listaservico = new Listaservico();

  constructor(private servicoService: ServicoService, private router: Router) { }

  getListaServico(){
    this.servicoService.getListaServico().subscribe
    ((data) => (this.listaservico = data) );
  }

  voltaListaServico(){
    this.router.navigate(['listaservico']);
  }

  dataListaServico(){
    let id = localStorage.getItem('id');
    this.servicoService.getListaServicoID(+id!)
    .subscribe( data =>
      {
        this.listaservicomodel= data;
      }
    )
  }


  ngOnInit(): void {
    this.dataListaServico();
    this.getListaServico()
  }

}
