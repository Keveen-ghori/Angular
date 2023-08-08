import { NgModule } from '@angular/core';
import { PassengerHomeComponent } from './containers/passenger-home.component';
import { CommonModule } from '@angular/common';
import { PassengerLayoutModule } from '../passenger-layout/passenger-layout.module';
// import { PassengerDashboardComponent } from '../passenger-dashboard/containers/passenger-dashboard.component';
import { PassengerDashboardModule } from '../passenger-dashboard/passenger-dashboard.module';
import { AuthFormModule } from '../passenger-auth/passenger-auth.module';




@NgModule({
  declarations: [PassengerHomeComponent],
  exports: [PassengerHomeComponent],
  imports: [
    CommonModule,
    PassengerLayoutModule,
    PassengerDashboardModule,
    AuthFormModule
  ],
  providers: [],
})
export class PassengerHomeModule {}
