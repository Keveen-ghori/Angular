import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { PassengerLayoutModule } from './passenger-layout/passenger-layout.module';
import { FormsModule } from '@angular/forms';
import { PassengerHomeModule } from './passenger-home/passenger-home.module';
import { AuthFormModule } from './passenger-auth/passenger-auth.module';
import { ServersComponent } from './servers/servers.component';


@NgModule({
  declarations: [AppComponent, ServersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PassengerDashboardModule,
    PassengerLayoutModule,
    FormsModule,
    PassengerHomeModule,
    AuthFormModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
