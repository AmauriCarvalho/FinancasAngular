import { ServicoService } from './../../servico.service';
import { Listaservico } from './../../model/Listaservico';
import { Servico } from './../../model/Servico';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

  servico: Servico[] = [];
  Listaservico: Listaservico[] = []

  constructor(private servicoService: ServicoService, private router: Router) {}

  getServico() {
    this.servicoService.getServico().subscribe
    ((data) => (this.servico = data));
  }

  getListaServico(){
    this.servicoService.getListaServico().subscribe
    ((data) => (this.Listaservico = data) );
  }

  postServico(){
    this.router.navigate(['postservico']);
  }

  updateServico(servico: Servico){
    localStorage.setItem("id", servico.id.toString());
    this.router.navigate(['upservico']);
  }

  deleteServico(servico: Servico){
    this.servicoService.deleteServico(servico)
      .subscribe(data => {this.servico=this.servico.filter(p=>p!==servico);
      alert(servico.nome_serv+" Deletado!");
      })
  }


  ngOnInit(): void {
    this.router.events.subscribe((value) => {
      this.getServico();
    });
    this.getServico();
  }
}
