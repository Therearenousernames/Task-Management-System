import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  message: string = 'Welcome Onboard!';

  steps: string = "Let's get you setup in a few easy steps..."

  imgsrc: string = '';

  errorMessage: string = '';

  email: string = '';

  username: string = '';

  password: string = '';

  response!: Response;

  submitted = false;

  usernamePatten = '[a-zA-Z]+';

  // add a regex for email validation
  // add password regex for password validation

  regForm = new FormGroup({
    username: new FormControl('',
      [Validators.required, Validators.pattern(this.usernamePatten)]),
    email: new FormControl('',
      [Validators.required]),
    password: new FormControl('',
      [Validators.required])
  })

  Register() {

  }

}
