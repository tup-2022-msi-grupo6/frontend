import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAuthService } from '../services/apiauth.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(public apiauthService: ApiAuthService, private router: Router,private formBuilder: FormBuilder ) {
    // if (this.apiauthService.usuarioData) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit(): void {}

  login() {
    this.apiauthService.login(this.loginForm.value as Login).subscribe((response) => {
      if (response.exito === 1) {
        this.router.navigate(['/home/dashboard']);
      }
    });
  }
}
