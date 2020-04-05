import { Component, OnInit } from '@angular/core';
// import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
//   styleUrls: ['./login.component.css']
})

export class RegisterComponent implements OnInit {

  constructor() { }
  username: string
  password: string
  vpassword: string
  eat: string
  race: string
  family: string
  age: string

  ngOnInit() {}

  register(eat, race, username, password, vpassword, family, age) : void {
    this.username = username;
    this.password = password;
    this.vpassword = vpassword;
    this.eat = eat;
    this.family = family;
    this.race = race;
    this.age = age;
  }
}
