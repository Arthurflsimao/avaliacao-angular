import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationComponent } from './operation/operation.component';
import { OperationListComponent } from './operation-list/operation-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/operations', pathMatch: 'full' },
    { path: 'operations', component: OperationListComponent },
    { path: 'create-operation', component: OperationComponent },
  ];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
