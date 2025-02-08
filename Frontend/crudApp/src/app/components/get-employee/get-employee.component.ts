import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../employee';
import { EmployeeService } from '../../Service/employee.service';

@Component({
  selector: 'app-get-employee',
  imports: [],
  templateUrl: './get-employee.component.html',
  styleUrl: './get-employee.component.css'
})
export class GetEmployeeComponent implements OnInit {

  id !: number;
  employee !: Employee;
  constructor(private route : ActivatedRoute, private employeeService : EmployeeService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];  // It will render the id from the employee object.
    this.employee = new Employee();

    this.employeeService.getEmployeeById(this.id).subscribe(( res : any ) => {
      this.employee = res;
    });
  }

}
