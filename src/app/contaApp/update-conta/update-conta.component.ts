import { ContaService } from './../../conta.service';
import { Conta } from './../../model/Conta';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-conta',
  templateUrl: './update-conta.component.html',
  styleUrls: ['./update-conta.component.css']
})
export class UpdateContaComponent implements OnInit {

  conta: Conta = new Conta();

  constructor(private contaService: ContaService, private router: Router) { }

  dataConta(){
    let id = localStorage.getItem('id');
    this.contaService.getContaID(+id!)
    .subscribe( data =>
      {
        this.conta= data;
      }
    )
  }

  editarConta(conta: Conta){
    this.contaService.updateConta(conta).subscribe(data =>
      {
        this.conta = data;
        alert("editado e atualizado!!");
        this.router.navigate(['conta']);
      }
      )
  }

  ngOnInit(): void {
    this.dataConta();
  }

}
