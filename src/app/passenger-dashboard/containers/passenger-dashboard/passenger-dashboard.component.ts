import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passengers } from '../../models/passenger-dashboard.interface';
import { MatDialog } from '@angular/material/dialog';
import { PassengerViewComponent } from '../passenger-view/passenger-view.component';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.css'],
})
export class PassengerDashboardComponent implements OnInit {
  title: string = 'GLOBALISM';
  passengers!: Passengers[];
  checkedInPassengers!: Passengers[];
  id: number = 0;
  passengerById!: Passengers;

  constructor(
    private passengerDashboardService: PassengerDashboardService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(PassengerViewComponent, {
      width: '400px',
      data: { id: id, flag: 'view' },
    });
    dialogRef.afterClosed().subscribe((res: string) => {});
  }

  openEditDialog(id: number): void {
    console.log(this.passengers);
    const dialogRef = this.dialog.open(PassengerViewComponent, {
      width: '800px',
      data: { id: id, flag: 'edit', passengerData: this.passengers },
    });
    dialogRef.afterClosed().subscribe((res: Passengers) => {});
  }
  // openEditDialog(id: number): void {
  //  this.route.Params.subscribe((data: Params) => {console.log(data);})
  //   console.log(this.passengers);
  //   const dialogRef = this.dialog.open(PassengerViewComponent, {
  //     width: '800px',
  //     data: { id: id, flag: 'edit', passengerData: this.passengers },
  //   });
  //   dialogRef.afterClosed().subscribe((res: Passengers) => {});
  // }
  ngOnInit() {
    this.passengerDashboardService
      .GetPassengersData()
      .subscribe((data: Passengers[]) => {
        return (this.passengers = data);
      });

    this.passengerDashboardService
      .GetCheckedInPassengersData()
      .subscribe((data: Passengers[]) => {
        return (this.checkedInPassengers = data);
      });

    this.route.params
      .pipe(
        switchMap((data: any) =>
          this.passengerDashboardService.GetPassengerById(data.id)
        )
      )
      .subscribe((data: any) => (this.passengerById = data));
  }

  goback() {
    this.router.navigate(['passengers']);
  }
}
