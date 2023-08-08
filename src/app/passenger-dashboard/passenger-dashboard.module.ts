import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

import { PassengerAnalysisComponent } from './components/dashboard-analysis/dashboard-analysis.component';

import { PassengerDashboardService } from './passenger-dashboard.service';

import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { PassengerChildrenCountComponent } from './components/passengers-children-count/passengers-children.count.component';

import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';

import { MatDialogModule } from '@angular/material/dialog';

import { PassengerViewComponent } from './containers/passenger-view/passenger-view.component';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardRoutingModule } from './passenger-dashboard-routing.module';

const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
];

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerAnalysisComponent,
    PassengerChildrenCountComponent,
    PassengerViewComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    materialModules,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    DashboardRoutingModule,
  ],
  providers: [PassengerDashboardService],
  exports: [
    PassengerDashboardComponent,
    PassengerAnalysisComponent,
    PassengerChildrenCountComponent,
    materialModules,
    PassengerViewComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PassengerDashboardModule {}
