import { Produto } from '../../model/Produto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Listaproduto } from '../../model/Listaproduto';
import { ProdutoService } from '../../produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent implements OnInit {

  produto: Produto[] = [];
  listaproduto: Listaproduto[] = []

  constructor(private produtoService: ProdutoService, private router: Router) {}

  getProduto() {
    this.produtoService.getProduto().subscribe
    ((data) => (this.produto = data));
  }

  getListaProduto(){
    this.produtoService.getListaProduto().subscribe
    ((data) => (this.listaproduto = data) );
  }

  postProduto(){
    this.router.navigate(['postproduto']);
  }

  updateProduto(produto: Produto){
    localStorage.setItem("id", produto.id.toString());
    this.router.navigate(['upproduto']);
  }

  deleteProduto(produto: Produto){
    this.produtoService.deleteProduto(produto)
      .subscribe(data => {this.produto=this.produto.filter(p=>p!==produto);
      alert(produto.nome_prod+" Deletado!");
      })
  }


  ngOnInit(): void {
    this.router.events.subscribe((value) => {
      this.getProduto();
    });

    this.getProduto();
  }
}
