import { Categoria } from "./Categoria";
import { Produto } from "./Produto";

export class Listaproduto {
  id!: number;
  nome_lista!: string;
  produto!: Produto[];
  categoria!: Categoria;
}
