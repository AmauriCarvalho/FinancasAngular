import { ServicoService } from './../../servico.service';
import { Component, OnInit } from '@angular/core';
import { Listaservico } from 'src/app/model/Listaservico';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-lista-servico',
  templateUrl: './update-lista-servico.component.html',
  styleUrls: ['./update-lista-servico.component.css']
})
export class UpdateListaServicoComponent implements OnInit {

  listaservico: Listaservico = new Listaservico();

  constructor(private servicoService: ServicoService, private router: Router) { }

  dataServico(){
    let id = localStorage.getItem('id');
    this.servicoService.getListaServicoID(+id!)
    .subscribe( data =>
      {
        this.listaservico= data;
      }
    )
  }

  editarListaServico(listaservico: Listaservico){
    this.servicoService.updateListaServico(listaservico).subscribe(data =>
      {
        this.listaservico = data;
        alert("editado e atualizado!!");
        this.router.navigate(['listaservico']);
      }
      )
  }

  ngOnInit(): void {
    this.dataServico();
  }

}
