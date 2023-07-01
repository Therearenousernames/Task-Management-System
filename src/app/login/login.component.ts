import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Response } from '../Models/Response';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {

  username: string = '';

  password: string = '';

  errorMessage: string = '';

  message: string = 'Welcome Back!';

  response!: Response;

  submitted = false;

  imgsrc = '../assets/images/first.jpg'

  usernamePatten = '[a-zA-Z]+';

  loginForm = new FormGroup({
    username: new FormControl("",
      [Validators.required,
        Validators.pattern(this.usernamePatten)]),
    password: new FormControl("", [Validators.required])
  });

  constructor(private authService: AuthService, private router: Router) { }

  Login() {
    this.submitted = true;
    if (this.username && /^[a-zA-Z]+$/.test(this.username)) {
      this.authService.login(this.username, this.password)
        .subscribe(data => {this.UserExist(data) })
    }
  }

  UserExist(data: any): void {
    this.response = data;

    if (this.response.message == `Welcome back ${this.username}`) {
      this.router.navigateByUrl(`menu/${this.username}`);
    }
  }
 






}
