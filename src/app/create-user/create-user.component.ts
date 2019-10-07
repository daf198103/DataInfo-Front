import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators, Form } from '@angular/forms';
import { NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  submitted = false;
  usuario:FormGroup;


  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit() {
    
    this.usuario = new FormGroup({
      userName :new FormControl(''), 
      cpf: new FormControl(''), 
      function: new FormControl(''),
      email: new FormControl(''),
      situation: new FormControl(''),
      accessProfile: new FormControl(''),
      phone: new FormControl(''),
      });
  }

  onSubmit() {
    this.user.userName = this.usuario.value.userName;
    this.user.cpf = this.usuario.value.cpf;
    this.user.email = this.usuario.value.email;
    this.user.function = this.usuario.value.function;
    this.user.phone = this.usuario.value.phone;
    this.user.situation = this.usuario.value.situation;
    this.user.accessProfile = this.usuario.value.accessProfile;
    console.log(this.user.userName);
    
    this.userService.createUser(this.user)
    .then((resposta)=>{
      if(resposta == null){
        alert("Usuário já cadastrado!");
        this.fechar();
      }
      else
      {
        this.submitted = true;
      }

    });

    
    
  }
  
  fechar(){
    window.location.replace("user-list");
  }

  
    

  
}
