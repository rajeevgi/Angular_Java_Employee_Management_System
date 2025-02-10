import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Service/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  credentials : any = {
    email : '',
    password : ''
  }

  constructor(private authService : AuthService, private router : Router) {}

  loginUser(){
    this.authService.login(this.credentials).subscribe(( response ) => {
      alert("User Loggined Successfully...");
      this.router.navigate(['/list-employees']);
    },
    (error) => {
      alert("Failed to login user!");
    },
  );
  }

}
