// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemPessoasComponent } from './components/listagem-pessoas/listagem-pessoas.component';
import { CadastroPessoaComponent } from './components/cadastro-pessoa/cadastro-pessoa.component';
import { EdicaoPessoaComponent } from './components/edicao-pessoa/edicao-pessoa.component';

const routes: Routes = [
  { path: '', component: ListagemPessoasComponent },
  { path: 'cadastro', component: CadastroPessoaComponent },
  { path: 'editar/:id', component: EdicaoPessoaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }