import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data = {};
  form: FormGroup;
  error = false;
  errorMessage = '';  

  constructor(
    private fb: FormBuilder,
    private authService: LoginServiceService) { }

    onSignin() {      
      this.authService.signIn(this.form.value);
      console.log(this.data);
    }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
