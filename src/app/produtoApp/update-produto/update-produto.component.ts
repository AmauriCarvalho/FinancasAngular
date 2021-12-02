import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../model/Produto';
import { ProdutoService } from '../../produto.service';

@Component({
  selector: 'app-update-produto',
  templateUrl: './update-produto.component.html',
  styleUrls: ['./update-produto.component.css']
})
export class UpdateProdutoComponent implements OnInit {

  produto: Produto = new Produto();

  constructor(private produtoService: ProdutoService, private router: Router) { }

  dataProduto(){
    let id = localStorage.getItem('id');
    this.produtoService.getProdutoID(+id!)
    .subscribe( data =>
      {
        this.produto= data;
      }
    )
  }

  editarProduto(produto: Produto){
    this.produtoService.updateProduto(produto).subscribe(data =>
      {
        this.produto = data;
        alert("editado e atualizado!!");
        this.router.navigate(['produto']);
      }
      )
  }

  ngOnInit(): void {
    this.dataProduto();
  }

}
