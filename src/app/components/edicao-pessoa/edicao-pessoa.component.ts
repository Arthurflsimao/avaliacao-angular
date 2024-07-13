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
  pessoa: Pessoa | undefined;

  constructor(
    private route: ActivatedRoute,
    private pessoaService: PessoaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.pessoaService.getPessoa(id).subscribe(data => {
        this.pessoa = data;
      });
    });
  }

  onSubmit(): void {
    if (this.pessoa) {
      this.pessoaService.updatePessoa(this.pessoa.id, this.pessoa).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
