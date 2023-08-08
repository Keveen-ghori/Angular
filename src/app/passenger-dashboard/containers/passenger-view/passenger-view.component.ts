import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { Passengers } from '../../models/passenger-dashboard.interface';
import {
  MatDialogRef,
  MatDialogModule,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { ModalData } from '../../models/passenger-viewmodal.interface';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'passenger-view',
  templateUrl: './passenger-view.component.html',
  styleUrls: ['./passenger-view.component.css'],
})
export class PassengerViewComponent implements OnInit {
  passengerById?: Passengers;
  passengers?: Passengers[];

  @Output()
  update: EventEmitter<Passengers> = new EventEmitter<Passengers>();

  constructor(
    private passengerDashboardService: PassengerDashboardService,
    public dialogRef: MatDialogRef<PassengerViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    private _snackBar: MatSnackBar
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 9000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }

  handleSubmit(passenger: Passengers, isValid: boolean | null) {
    if (!isValid) {
      return;
    } else {
      this.dialogRef.close();
      this.openSnackBar('You have successfully updated Passenger', 'X');

      this.passengerDashboardService
        .UpdatePassengerById(passenger)
        .subscribe((updatedPassenger: any) => {
          const index = this.data.passengerData.findIndex(
            (p) => p.id === updatedPassenger.id
          );
          if (index !== -1) {
            this.data.passengerData[index] = updatedPassenger;
          }
        });
    }
  }

  ngOnInit() {
    this.passengerDashboardService
      .GetPassengerById(this.data.id)
      .subscribe((response: any) => {
        return (this.passengerById = response.body[0]);
      });
  }
}
