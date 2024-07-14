import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/pessoa.model';
import Swal from 'sweetalert2';

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
    this.pessoaService.createPessoa(this.pessoa).subscribe(
      () => {
        Swal.fire({
          icon: 'success',
          title: 'Cadastro realizado!',
          text: 'A pessoa foi cadastrada com sucesso.',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['/']);
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Erro no cadastro',
          text: 'Não foi possível cadastrar a pessoa.',
          footer: '<a href="#">Tente novamente mais tarde</a>'
        });
      }
    );
  }
}
