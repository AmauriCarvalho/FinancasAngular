import { Categoria } from './Categoria';
import { Conta } from './Conta';
export class Listaconta{
  id!: number;
  nome_lista!: string;
  conta!: Conta[];
  categoria!: Categoria;
}
