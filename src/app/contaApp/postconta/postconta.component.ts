import { Conta } from './../../model/Conta';
import { ContaService } from './../../conta.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postconta',
  templateUrl: './postconta.component.html',
  styleUrls: ['./postconta.component.css']
})
export class PostcontaComponent implements OnInit {

  constructor(private contaService: ContaService, private router: Router) { }

  conta = new Conta();

  postConta(conta: Conta){
    this.contaService.postConta(conta).subscribe(data =>
      {alert(conta.nome_conta+" adicionado a lista")});
    this.router.navigate(['conta']);
  }

  voltaContas(){
    this.router.navigate(['conta']);
  }

  ngOnInit(): void {
  }

}
