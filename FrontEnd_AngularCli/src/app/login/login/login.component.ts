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
      let result;
      result = this.authService.signIn(this.form.value);
    result.subscribe(data => alert('logado com sucesso ' + data),
    err => {
      alert("An error occurred. " + err);
    });
      
      console.log(this.data);
    }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
