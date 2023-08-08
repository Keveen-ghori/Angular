import { Component, Input, Output } from '@angular/core';
import { Passengers } from '../../models/passenger-dashboard.interface';
import { Children } from '../../models/passenger-children.interface';

@Component({
  selector: 'passenger-chieldren-count',
  template: `{{passengerCount.length}}`,
  styles: [],
})
export class PassengerChildrenCountComponent {
  constructor() {}

  @Input()
  passengerCount!: Children[];
}
