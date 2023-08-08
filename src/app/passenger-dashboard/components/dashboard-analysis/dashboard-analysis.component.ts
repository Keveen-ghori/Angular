import { Component,Input } from '@angular/core';
import { Passengers } from '../../models/passenger-dashboard.interface';

@Component({
  selector: 'passenger-analysis',
  styleUrls: ['./dashboard-analysis.component.css'],
  templateUrl: './dashboard-analysis.component.html',
})
export class PassengerAnalysisComponent {
  @Input()
  totalPassengers?: Passengers[];

  @Input()
  totalCheckedInPassengers?: Passengers[];
}
