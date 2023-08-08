import { Component, EventEmitter, Output } from '@angular/core';
import { PassengerLogin } from '../models/passenger-auth.login.interface.model';

@Component({
  selector: 'auth-form',
  styleUrls: ['./passenger-auth.component.css'],
  templateUrl: './passenger-auth.component.html',
})
export class AuthFormComponent {
  @Output() submitted: EventEmitter<PassengerLogin> =
    new EventEmitter<PassengerLogin>();

  onSubmit(value: PassengerLogin) {
    this.submitted.emit(value);
  }
}
