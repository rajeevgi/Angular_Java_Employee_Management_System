import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../employee';
import { EmployeeService } from '../../Service/employee.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-employee',
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {

  employee : Employee = new Employee();  // creating an object to update employee.

  http = inject(HttpClient);

  constructor(private employeeService : EmployeeService){};

  getEmployeeById(id : number) {
   this.employeeService.getEmployeeById(id).subscribe((res : any) => {
    this.employee = res;
   }); 
  }

  updateEmployee(id : number){
    this.employeeService.updateEmployees(id).subscribe((res : any) => {
      this.employee = res;
    });
  }
}
