import { Router } from '@angular/router';
import { ProdutoService } from '../../produto.service';
import { Produto } from '../../model/Produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postproduto',
  templateUrl: './postproduto.component.html',
  styleUrls: ['./postproduto.component.css']
})
export class PostprodutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService, private router: Router) { }

  produto = new Produto();

  postProduto(produto: Produto){
    this.produtoService.postProduto(produto).subscribe(data =>
      {alert(produto.nome_prod+" adicionado a lista")});
    this.router.navigate(['produto']);
  }

  voltaProdutos(){
    this.router.navigate(['produto']);
  }

  ngOnInit(): void {
  }

}
