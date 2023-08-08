import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PassengerHomeComponent } from './passenger-home/containers/passenger-home.component';
import { PassengerDashboardComponent } from './passenger-dashboard/containers/passenger-dashboard/passenger-dashboard.component';
import { AuthFormComponent } from './passenger-auth/containers/passenger-auth.component';

const routes: Routes = [
  { path: '', component: PassengerHomeComponent, pathMatch: 'full' },
  { path: 'home', component: PassengerHomeComponent },
  { path: 'dashboard', component: PassengerDashboardComponent },
  { path: 'auth', component: AuthFormComponent },
  // { path: '**', component: NotFoundComponent }, Wildcard for not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
