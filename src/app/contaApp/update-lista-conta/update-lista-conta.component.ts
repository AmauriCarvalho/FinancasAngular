import { ContaService } from './../../conta.service';
import { Listaconta } from './../../model/listaconta';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-lista-conta',
  templateUrl: './update-lista-conta.component.html',
  styleUrls: ['./update-lista-conta.component.css']
})
export class UpdateListaContaComponent implements OnInit {

  listaconta: Listaconta = new Listaconta();

  constructor(private contaService: ContaService, private router: Router) { }

  dataConta(){
    let id = localStorage.getItem('id');
    this.contaService.getListaContaID(+id!)
    .subscribe( data =>
      {
        this.listaconta= data;
      }
    )
  }

  editarListaConta(listaconta: Listaconta){
    this.contaService.updateListaConta(listaconta).subscribe(data =>
      {
        this.listaconta = data;
        alert("editado e atualizado!!");
        this.router.navigate(['listaconta']);
      }
      )
  }

  ngOnInit(): void {
    this.dataConta();
  }

}
