import { Component } from '@angular/core';
import { OperationService } from '../services/operation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent {
  operation = { name: '', description: '', category: '' };

  constructor(private operationService: OperationService) {}

  submitForm() {
    // Garantir que o método correto seja chamado
    this.operationService.addOperation(this.operation).subscribe({
      next: () => {
        Swal.fire(
          'Operação Cadastrada!',
          'A operação foi cadastrada com sucesso.',
          'success'
        );
        this.operation = { name: '', description: '', category: '' }; // Limpa o formulário após o cadastro
      },
      error: () => {
        Swal.fire(
          'Erro!',
          'Ocorreu um erro ao cadastrar a operação. Tente novamente.',
          'error'
        );
      }
    });
  }
}


