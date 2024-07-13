// src/app/components/edicao-pessoa/edicao-pessoa.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/pessoa.model';

@Component({
  selector: 'app-edicao-pessoa',
  templateUrl: './edicao-pessoa.component.html',
  styleUrls: ['./edicao-pessoa.component.css']
})
export class EdicaoPessoaComponent implements OnInit {
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
  id: number = 0;

  constructor(
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.pessoaService.getPessoa(this.id).subscribe(data => {
      this.pessoa = data;
    });
  }

  onSubmit(): void {
    this.pessoaService.updatePessoa(this.id, this.pessoa).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
