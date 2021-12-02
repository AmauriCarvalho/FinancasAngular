import { ContaService } from './../../conta.service';
import { Listaconta } from './../../model/listaconta';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-conta-itens',
  templateUrl: './lista-conta-itens.component.html',
  styleUrls: ['./lista-conta-itens.component.css']
})
export class ListaContaItensComponent implements OnInit {

  listaconta: Listaconta[] = [];

  listacontamodel: Listaconta = new Listaconta();

  constructor(private contaService: ContaService, private router: Router) { }

  getListaConta(){
    this.contaService.getListaConta().subscribe
    ((data) => (this.listaconta = data) );
  }

  voltaListaConta(){
    this.router.navigate(['listaconta']);
  }

  dataListaConta(){
    let id = localStorage.getItem('id');
    this.contaService.getListaContaID(+id!)
    .subscribe( data =>
      {
        this.listacontamodel= data;
      }
    )
  }


  ngOnInit(): void {
    this.dataListaConta();
    this.getListaConta();
  }

}
