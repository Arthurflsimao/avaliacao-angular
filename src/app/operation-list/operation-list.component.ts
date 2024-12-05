import { Component, OnInit } from '@angular/core';
import { OperationService } from '../services/operation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.scss']
})
export class OperationListComponent implements OnInit {
  operations: any[] = [];

  constructor(private operationService: OperationService) {}

  ngOnInit(): void {
    this.loadOperations();
  }

  loadOperations() {
    this.operationService.getOperations().subscribe((data) => {
      this.operations = data;
    });
  }

  deleteOperation(id: number) {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Esta operação será excluída permanentemente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.operationService.deleteOperation(id).subscribe(() => {
          this.loadOperations();
          Swal.fire(
            'Excluído!',
            'A operação foi excluída com sucesso.',
            'success'
          );
        });
      }
    });
  }
}
