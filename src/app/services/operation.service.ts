import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  private apiUrl = 'http://localhost:8080/operations';  // URL do backend

  constructor(private http: HttpClient) {}

  addOperation(operation: any): Observable<any> {
    return this.http.post(this.apiUrl, operation);
  }

  getOperations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteOperation(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
