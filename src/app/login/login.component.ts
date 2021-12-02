import { Router } from '@angular/router';
import { Usuario } from './../model/Usuario';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  urlLogin = "http://localhost:8080/login";

  login1 = "marcosAdm";

  senha = "123456";

  auth: any;

  postLogin(){
    this.http.post<Usuario>(this.urlLogin, {username: this.login1, password: this.senha})
      .subscribe(data => {this.auth = data});
      if (this.auth != null)
        this.router.navigate(['produto']);

  }

  ngOnInit(): void {
  }

}
