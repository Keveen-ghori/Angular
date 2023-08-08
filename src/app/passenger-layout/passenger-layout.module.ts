import { NgModule } from '@angular/core';

import { PassengerLayoutComponent } from './containers/passenger-layout.component';

import { PassengerLayoutService } from './passenger-layout.service';

import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './passenger-layout.router.module';

@NgModule({
  declarations: [PassengerLayoutComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule,
    AuthRoutingModule,
  ],
  exports: [PassengerLayoutComponent, FontAwesomeModule, RouterModule],
  providers: [PassengerLayoutService],
})
export class PassengerLayoutModule {}
