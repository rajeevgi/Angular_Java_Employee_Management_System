import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = "http://localhost:8080/api"

  constructor(private http : HttpClient) { }

  // Get mapping to get list of employees.
  getEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/list`);
  }

  // Get mapping to get employee by id.
  getEmployeeById(id : number) : Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/getEmployeeById/${id}`);
  }
  
  // Post mapping to add employees.
  addEmployees(employee: Employee) : Observable<Object> {
    return this.http.post(`${this.apiUrl}/saveEmployees`, employee);
  }

  // Put mapping to update employees.
  updateEmployees(empId: number, employee: Employee) : Observable<object> {
    return this.http.put(`${this.apiUrl}/update/${empId}`, employee);
  }

  // Delete mapping to delete employees.
  deleteEmployees(empId : number) : Observable<Object>{
    return this.http.delete(`${this.apiUrl}/deleteEmp/${empId}`);
  }
}
