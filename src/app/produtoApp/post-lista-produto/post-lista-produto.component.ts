import { Listaproduto } from './../../model/Listaproduto';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-lista-produto',
  templateUrl: './post-lista-produto.component.html',
  styleUrls: ['./post-lista-produto.component.css']
})
export class PostListaProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService, private router: Router) { }

  listaproduto = new Listaproduto();

  postListaProduto(listaproduto: Listaproduto){
    this.produtoService.postListaProduto(listaproduto).subscribe(data =>
      {alert(listaproduto.nome_lista+" adicionado a lista")});
    this.router.navigate(['listaproduto']);
  }

  voltaListaProdutos(){
    this.router.navigate(['listaproduto']);
  }

  ngOnInit(): void {
  }

}
