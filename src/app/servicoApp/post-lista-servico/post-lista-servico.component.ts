import { ServicoService } from './../../servico.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Listaservico } from 'src/app/model/Listaservico';

@Component({
  selector: 'app-post-lista-servico',
  templateUrl: './post-lista-servico.component.html',
  styleUrls: ['./post-lista-servico.component.css']
})
export class PostListaServicoComponent implements OnInit {

  constructor(private servicoService: ServicoService, private router: Router) { }

  listaservico = new Listaservico();

  postListaProduto(listaservico: Listaservico){
    this.servicoService.postListaServico(listaservico).subscribe(data =>
      {alert(listaservico.nome_listaServ+" adicionado a lista")});
    this.router.navigate(['listaservico']);
  }

  voltaListaProdutos(){
    this.router.navigate(['listaservico']);
  }

  ngOnInit(): void {
  }

}
