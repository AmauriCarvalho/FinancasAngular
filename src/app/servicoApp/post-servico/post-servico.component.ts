import { Servico } from './../../model/Servico';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicoService } from 'src/app/servico.service';

@Component({
  selector: 'app-post-servico',
  templateUrl: './post-servico.component.html',
  styleUrls: ['./post-servico.component.css']
})
export class PostServicoComponent implements OnInit {

  constructor(private servicoService: ServicoService, private router: Router) { }

  servico = new Servico();

  postServico(servico: Servico){
    this.servicoService.postServico(servico).subscribe(data =>
      {alert(servico.nome_serv+" adicionado a lista")});
    this.router.navigate(['servico']);
  }

  voltaServicos(){
    this.router.navigate(['servico']);
  }

  ngOnInit(): void {
  }

}
