import { Listaconta } from './../../model/listaconta';
import { ContaService } from './../../conta.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-lista-conta',
  templateUrl: './post-lista-conta.component.html',
  styleUrls: ['./post-lista-conta.component.css']
})
export class PostListaContaComponent implements OnInit {

  constructor(private contaService: ContaService, private router: Router) { }

  listaconta = new Listaconta();

  postListaConta(listaconta: Listaconta){
    this.contaService.postListaConta(listaconta).subscribe(data =>
      {alert(listaconta.nome_lista+" adicionado a lista")});
    this.router.navigate(['listaconta']);
  }

  voltaListaContas(){
    this.router.navigate(['listaconta']);
  }

  ngOnInit(): void {
  }

}
