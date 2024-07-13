// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
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
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
