import { Component, OnInit } from '@angular/core';
import { PassengerLogin } from 'src/app/passenger-auth/models/passenger-auth.login.interface.model';

@Component({
  selector: 'passenger-home',
  templateUrl: './passenger-home.component.html',
  styleUrls: ['./passenger-home.component.css'],
})
export class PassengerHomeComponent {
  createUser(user: PassengerLogin) {
    console.log('Create account', user);
  }

  loginUser(user: PassengerLogin) {
    console.log('Login', user);
  }
}
