// src/app/components/listagem-pessoas/listagem-pessoas.component.ts
import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/pessoa.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-pessoas',
  templateUrl: './listagem-pessoas.component.html',
  styleUrls: ['./listagem-pessoas.component.css']
})
export class ListagemPessoasComponent implements OnInit {
  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService, private router: Router) { }

  ngOnInit(): void {
    this.loadPessoas();
  }

  loadPessoas(): void {
    this.pessoaService.getPessoas().subscribe(data => {
      this.pessoas = data;
    });
  }

  deletePessoa(id: number): void {
    if (confirm('Tem certeza que deseja excluir esta pessoa?')) {
      this.pessoaService.deletePessoa(id).subscribe(() => {
        this.loadPessoas();
      });
    }
  }
}

