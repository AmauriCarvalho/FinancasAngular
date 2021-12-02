import { Listaproduto } from './../../model/Listaproduto';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-lista-produto',
  templateUrl: './update-lista-produto.component.html',
  styleUrls: ['./update-lista-produto.component.css']
})
export class UpdateListaProdutoComponent implements OnInit {

  listaproduto: Listaproduto = new Listaproduto();

  constructor(private produtoService: ProdutoService, private router: Router) { }

  dataProduto(){
    let id = localStorage.getItem('id');
    this.produtoService.getListaProdutoID(+id!)
    .subscribe( data =>
      {
        this.listaproduto= data;
      }
    )
  }

  editarListaProduto(listaproduto: Listaproduto){
    this.produtoService.updateListaProduto(listaproduto).subscribe(data =>
      {
        this.listaproduto = data;
        alert("editado e atualizado!!");
        this.router.navigate(['listaproduto']);
      }
      )
  }

  ngOnInit(): void {
    this.dataProduto();
  }

}
