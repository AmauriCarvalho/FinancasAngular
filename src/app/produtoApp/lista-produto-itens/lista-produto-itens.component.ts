import { Listaproduto } from '../../model/Listaproduto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../../produto.service';

@Component({
  selector: 'app-lista-produto-itens',
  templateUrl: './lista-produto-itens.component.html',
  styleUrls: ['./lista-produto-itens.component.css']
})
export class ListaProdutoItensComponent implements OnInit {

  listaproduto: Listaproduto[] = [];

  listaprodutomodel: Listaproduto = new Listaproduto();

  constructor(private produtoService: ProdutoService, private router: Router) { }

  getListaProduto(){
    this.produtoService.getListaProduto().subscribe
    ((data) => (this.listaproduto = data) );
  }

  voltaListaProduto(){
    this.router.navigate(['listaproduto']);
  }

  dataListaProduto(){
    let id = localStorage.getItem('id');
    this.produtoService.getListaProdutoID(+id!)
    .subscribe( data =>
      {
        this.listaprodutomodel= data;
      }
    )
  }


  ngOnInit(): void {
    this.dataListaProduto();
    this.getListaProduto()
  }

}
