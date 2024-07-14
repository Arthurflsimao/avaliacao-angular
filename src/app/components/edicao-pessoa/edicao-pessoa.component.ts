import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/pessoa.model';
import { switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';

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

  constructor(
    private route: ActivatedRoute,
    private pessoaService: PessoaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        const id = +params['id'];
        return this.pessoaService.getPessoa(id);
      })
    ).subscribe(data => {
      this.pessoa = data;
    });
  }

  onSubmit(): void {
    this.pessoaService.updatePessoa(this.pessoa.id, this.pessoa).subscribe(
      () => {
        Swal.fire({
          icon: 'success',
          title: 'Atualização realizada!',
          text: 'A pessoa foi atualizada com sucesso.',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['/']);
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Erro na atualização',
          text: 'Não foi possível atualizar a pessoa.',
          footer: '<a href="#">Tente novamente mais tarde</a>'
        });
      }
    );
  }
}
