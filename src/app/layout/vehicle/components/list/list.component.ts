import { Component, OnInit } from '@angular/core';
import {VehicleService} from "../../../../shared/services/vehicle/vehicle.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class VehicleListComponent implements OnInit {

  vehicles: [Vehicle];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleService.getVehicles().subscribe(
        (response) => {
          console.log("success: ", response);
          this.vehicles = response;
        },
        (err) => {
          console.log("error: ", err);
        }
    )
  }

}
