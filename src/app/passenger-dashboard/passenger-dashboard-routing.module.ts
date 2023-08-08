import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        component: PassengerDashboardComponent,
      },
      {
        path: 'passenger',
        component: PassengerDashboardComponent,
      },
    //   {
    //     path: ':1',
    //     component: PassengerViewerComponent,
    //   },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
