import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListagemPessoasComponent } from './components/listagem-pessoas/listagem-pessoas.component';
import { CadastroPessoaComponent } from './components/cadastro-pessoa/cadastro-pessoa.component';
import { EdicaoPessoaComponent } from './components/edicao-pessoa/edicao-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemPessoasComponent,
    CadastroPessoaComponent,
    EdicaoPessoaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
