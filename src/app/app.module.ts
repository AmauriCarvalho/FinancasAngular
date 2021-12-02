import { ContaService } from './conta.service';
import { ServicoService } from './servico.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProdutoService } from './produto.service';
import { ProdutoComponent } from './produtoApp/listagemproduto/produto.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListaprodutoComponent } from './produtoApp/listaproduto/listaproduto.component';
import { PostprodutoComponent } from './produtoApp/postproduto/postproduto.component';
import { UpdateProdutoComponent } from './produtoApp/update-produto/update-produto.component';
import { ListaProdutoItensComponent } from './produtoApp/lista-produto-itens/lista-produto-itens.component';
import { LoginComponent } from './login/login.component';
import { UpdateListaProdutoComponent } from './produtoApp/update-lista-produto/update-lista-produto.component';
import { PostListaProdutoComponent } from './produtoApp/post-lista-produto/post-lista-produto.component';
import { ServicoComponent } from './servicoApp/servico/servico.component';
import { ListaservicoComponent } from './servicoApp/listaservico/listaservico.component';
import { PostListaServicoComponent } from './servicoApp/post-lista-servico/post-lista-servico.component';
import { ListaServicoItensComponent } from './servicoApp/lista-servico-itens/lista-servico-itens.component';
import { PostServicoComponent } from './servicoApp/post-servico/post-servico.component';
import { UpdateServicoComponent } from './servicoApp/update-servico/update-servico.component';
import { UpdateListaServicoComponent } from './servicoApp/update-lista-servico/update-lista-servico.component';
import { ListaContaItensComponent } from './contaApp/lista-conta-itens/lista-conta-itens.component';
import { ContaComponent } from './contaApp/conta/conta.component';
import { ListacontaComponent } from './contaApp/listaconta/listaconta.component';
import { PostListaContaComponent } from './contaApp/post-lista-conta/post-lista-conta.component';
import { PostcontaComponent } from './contaApp/postconta/postconta.component';
import { UpdateListaContaComponent } from './contaApp/update-lista-conta/update-lista-conta.component';
import { UpdateContaComponent } from './contaApp/update-conta/update-conta.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'produto', component: ProdutoComponent },
      { path: 'listaproduto', component: ListaprodutoComponent },
      { path: 'postproduto', component: PostprodutoComponent },
      { path: 'upproduto', component: UpdateProdutoComponent },
      { path: 'listaprodutoitens', component: ListaProdutoItensComponent },
      { path: 'uplistaproduto', component: UpdateListaProdutoComponent },
      { path: 'postlistaproduto', component: PostListaProdutoComponent },
      { path: 'login', component: LoginComponent },
      { path: 'servico', component: ServicoComponent },
      { path: 'listaservico', component: ListaservicoComponent },
      { path: 'postlistaservico', component: PostListaServicoComponent },
      { path: 'listaservicoitens', component: ListaServicoItensComponent },
      { path: 'postservico', component: PostServicoComponent },
      { path: 'upservico', component: UpdateServicoComponent },
      { path: 'uplistaservico', component: UpdateListaServicoComponent },
      { path: 'listaconta', component: ListacontaComponent },
      { path: 'conta', component: ContaComponent },
      { path: 'postconta', component: PostcontaComponent },
      { path: 'postlistaconta', component: PostListaContaComponent },
      { path: 'uplistaconta', component: UpdateListaContaComponent },
      { path: 'upconta', component: UpdateContaComponent },
      { path: 'listacontaitens', component: ListaContaItensComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProdutoComponent,
    ListaprodutoComponent,
    PostprodutoComponent,
    UpdateProdutoComponent,
    ListaProdutoItensComponent,
    LoginComponent,
    UpdateListaProdutoComponent,
    PostListaProdutoComponent,
    ServicoComponent,
    ListaservicoComponent,
    PostListaServicoComponent,
    ListaServicoItensComponent,
    PostServicoComponent,
    UpdateServicoComponent,
    UpdateListaServicoComponent,
    ListaContaItensComponent,
    ContaComponent,
    ListacontaComponent,
    PostListaContaComponent,
    PostcontaComponent,
    UpdateListaContaComponent,
    UpdateContaComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ProdutoService, ServicoService, ContaService],
})
export class AppModule {}
