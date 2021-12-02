import { ServicoService } from './../../servico.service';
import { Servico } from './../../model/Servico';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-servico',
  templateUrl: './update-servico.component.html',
  styleUrls: ['./update-servico.component.css']
})
export class UpdateServicoComponent implements OnInit {

  servico: Servico = new Servico();

  constructor(private servicoService: ServicoService, private router: Router) { }

  dataServico(){
    let id = localStorage.getItem('id');
    this.servicoService.getServicoID(+id!)
    .subscribe( data =>
      {
        this.servico= data;
      }
    )
  }

  editarServico(servico: Servico){
    this.servicoService.updateServico(servico).subscribe(data =>
      {
        this.servico = data;
        alert("editado e atualizado!!");
        this.router.navigate(['servico']);
      }
      )
  }

  ngOnInit(): void {
    this.dataServico();
  }
}
