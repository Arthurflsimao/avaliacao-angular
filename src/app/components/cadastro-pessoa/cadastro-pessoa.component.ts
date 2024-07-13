// src/app/components/cadastro-pessoa/cadastro-pessoa.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/pessoa.model';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent {
  pessoa: Pessoa = {
    id: 0,
    nome: '',
    perfil: '',
    idade: 0,
    email: '',
    ativo: false,
    pais: '',
    nivelExperiencia: ''
  };

  constructor(private pessoaService: PessoaService, private router: Router) { }

  onSubmit(): void {
    this.pessoaService.createPessoa(this.pessoa).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
