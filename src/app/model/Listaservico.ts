import { Categoria } from './Categoria';
import { Servico } from './Servico';
export class Listaservico {
  id!: number;
  nome_listaServ!: string;
  servico!: Servico[];
  categoria!: Categoria;
  constructor(){}

}
