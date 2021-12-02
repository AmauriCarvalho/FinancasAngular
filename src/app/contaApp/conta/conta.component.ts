import { ContaService } from './../../conta.service';
import { Listaconta } from './../../model/listaconta';
import { Conta } from './../../model/Conta';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  conta: Conta[] = [];
  listaconta: Listaconta[] = []

  constructor(private contaService: ContaService, private router: Router) {}

  getConta() {
    this.contaService.getConta().subscribe
    ((data) => (this.conta = data));
  }

  getListaConta(){
    this.contaService.getListaConta().subscribe
    ((data) => (this.listaconta = data) );
  }

  postConta(){
    this.router.navigate(['postconta']);
  }

  updateConta(conta: Conta){
    localStorage.setItem("id", conta.id.toString());
    this.router.navigate(['upconta']);
  }

  deleteConta(conta: Conta){
    this.contaService.deleteConta(conta)
      .subscribe(data => {this.conta=this.conta.filter(p=>p!==conta);
      alert(conta.nome_conta+" Deletado!");
      })
  }


  ngOnInit(): void {
    this.router.events.subscribe((value) => {
      this.getConta();
    });

    this.getConta();
  }

}
