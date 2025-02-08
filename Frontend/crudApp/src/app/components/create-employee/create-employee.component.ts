import { Component, inject } from '@angular/core';
import { Employee } from '../../employee';
import { EmployeeService } from '../../Service/employee.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  imports: [FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee();  // creating object to add employees.

  employeeService = inject(EmployeeService); // injecting Dependancy
  router = inject(Router);     // Adding router to use for navigation after successfully adding.

  onSubmit() {
    console.log(this.employee);
    this.addEmployees();
  }

  addEmployees() {
    this.employeeService.addEmployees(this.employee).subscribe((res: any) => {
      this.employee = res;
      this.router.navigate(['/app-list-employees'])
      alert("Employee Saved Successfully...");
    },
      (error) => {
        alert("failed to save employee!!!");
      }
    )
  }
}
