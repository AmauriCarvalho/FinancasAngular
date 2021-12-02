import { ContaService } from './../../conta.service';
import { Listaconta } from './../../model/listaconta';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listaconta',
  templateUrl: './listaconta.component.html',
  styleUrls: ['./listaconta.component.css']
})
export class ListacontaComponent implements OnInit {

  listaconta: Listaconta[] = []

  constructor(private contaService: ContaService, private router: Router) { }

  getListaConta(){
    this.contaService.getListaConta().subscribe
    ((data) => (this.listaconta = data) );
  }

  acessaItensLista(){
    this.router.navigate(['listacontaitens']);
  }

  postListaConta(){
    this.router.navigate(['postlistaconta']);
  }

  updateListaConta(listaconta: Listaconta){
    localStorage.setItem("id", listaconta.id.toString());
    this.router.navigate(['uplistaconta']);
  }

  deleteListaConta(listaconta: Listaconta){
    this.contaService.deleteListaConta(listaconta)
      .subscribe(data => {this.listaconta=this.listaconta.filter(p=>p!==listaconta);
      alert(listaconta.nome_lista+" Deletado!");
      })
  }


  ngOnInit(): void {
    this.router.events.subscribe((value) => {this.getListaConta()});
    this.getListaConta();
  }

}
