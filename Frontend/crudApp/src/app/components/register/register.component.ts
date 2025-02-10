import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Service/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user : any = {
    username : '',
    email : '',
    password : ''
  }

  constructor(private authService : AuthService, private router : Router) {}

  registerUser(){
    this.authService.register(this.user).subscribe(( res : any ) => {
      alert("User Registered Successfully...");
      this.router.navigate(['/login']);
    });
  }

}
