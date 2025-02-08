import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Employee } from '../../employee';
import { EmployeeService } from '../../Service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  imports: [CommonModule],
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.css'
})
export class ListEmployeesComponent implements OnInit {

  empList : Employee[] = [];

  id !: number;

  router = inject(Router);

  constructor(private employeeService : EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();    // It will render list of employees.
  }

  getEmployees(){
    this.employeeService.getEmployees().subscribe((res : any) => {
      this.empList = res;
    });
  }

  updateEmployee(empId : number){
    this.router.navigate(['app-update-employee', empId])
  }

  deleteEmployees(id : number){
    this.employeeService.deleteEmployees(id).subscribe((res : any) => {
      this.getEmployees();
    })
  }
}