import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin

  constructor(
    private auth: AuthService,
    private router: Router

  ) { }

  ngOnInit() {

    window.scroll(0,0)
  }

  login(){
    this.auth.login(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp 
      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.idUsuario = this.userLogin.idUsuario
      environment.cpfUsuario = this.userLogin.cpfUsuario
      environment.usuario = this.userLogin.usuario

      console.log(environment.token)
      console.log(environment.nome)
      console.log(environment.idUsuario)
      console.log(environment.cpfUsuario)
      console.log(environment.usuario)
      
      this.router.navigate(['/home-logado'])

    },
    erro => {
      if(erro.status == 500){
        alert('Usuário ou senha incorretos!')
        
      }
    }
    )

  }

}