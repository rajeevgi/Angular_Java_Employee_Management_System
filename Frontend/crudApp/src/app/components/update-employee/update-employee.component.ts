import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../employee';
import { EmployeeService } from '../../Service/employee.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {

  employee : Employee = new Employee();  // creating an object to update employee.

  id !: number;

  http = inject(HttpClient);

  constructor(private employeeService : EmployeeService, private route : ActivatedRoute, private router : Router){}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe((res : any) => {
      this.employee = res;
    });
  }

  onSubmit(){
    this.employeeService.updateEmployees(this.id, this.employee).subscribe((res : any) => {
      this.goToEmployeeList();
    });
  }

  goToEmployeeList(){
    this.router.navigate(['/app-list-employees']);  
  }
}
