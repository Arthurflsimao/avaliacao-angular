import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperationComponent } from './operation/operation.component';
import { OperationListComponent } from './operation-list/operation-list.component';
import { FormsModule } from '@angular/forms'; // Para usar [(ngModel)]
import { HttpClientModule } from '@angular/common/http'; // Para requisições HTTP
import { CommonModule } from '@angular/common'; // Necessário para *ngIf e *ngFor

@NgModule({
  declarations: [
    AppComponent,
    OperationComponent,
    OperationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Para [(ngModel)]
    HttpClientModule, // Para requisições HTTP
    CommonModule // Necessário para *ngIf, *ngFor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
