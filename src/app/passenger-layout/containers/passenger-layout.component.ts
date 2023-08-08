import { Component, OnInit } from '@angular/core';

import { Navbar } from '../models/navbar.interface';
import { PassengerLayoutService } from '../passenger-layout.service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'passenger-layout',
  templateUrl: './passenger-layout.component.html',
  styleUrls: ['./passenger-layout.component.css'],
})
export class PassengerLayoutComponent implements OnInit {
  title: string = '';
  navbar!: Navbar[];

  constructor(
    private passengerLayoutService: PassengerLayoutService,
    library: FaIconLibrary
  ) {
    library.addIcons(faUser, faSignIn);
  }

  ngOnInit() {
    this.title = 'GLOBALISM';
    this.passengerLayoutService
      .getNavbarData()
      .subscribe((data: Navbar[]) => (this.navbar = data));
  }
}
