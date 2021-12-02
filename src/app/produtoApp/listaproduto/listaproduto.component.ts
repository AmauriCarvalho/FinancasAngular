import { Listaproduto } from './../../model/Listaproduto';
import { Categoria } from '../../model/Categoria';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../../produto.service';

@Component({
  selector: 'app-listaproduto',
  templateUrl: './listaproduto.component.html',
  styleUrls: ['./listaproduto.component.css']
})
export class ListaprodutoComponent implements OnInit {

  listaproduto: Listaproduto[] = []

  constructor(private produtoService: ProdutoService, private router: Router) { }

  getListaProduto(){
    this.produtoService.getListaProduto().subscribe
    ((data) => (this.listaproduto = data) );
  }

  acessaItensLista(){
    this.router.navigate(['listaprodutoitens']);
  }

  postListaProduto(){
    this.router.navigate(['postlistaproduto']);
  }

  updateListaProduto(listaproduto: Listaproduto){
    localStorage.setItem("id", listaproduto.id.toString());
    this.router.navigate(['uplistaproduto']);
  }

  deleteListaProduto(listaproduto: Listaproduto){
    this.produtoService.deleteListaProduto(listaproduto)
      .subscribe(data => {this.listaproduto=this.listaproduto.filter(p=>p!==listaproduto);
      alert(listaproduto.nome_lista+" Deletado!");
      })
  }


  ngOnInit(): void {
    this.router.events.subscribe((value) => {this.getListaProduto()});
    this.getListaProduto();
  }

}
