import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class VehicleListComponent implements OnInit {

  vehicles: [Vehicle] = [
    {
      id: 7,
      type: 'Citroen',
      number: 'CS28ROS',
      color: 'white',
      owner: 'adina@mail.com'
    },
    {
      id: 71,
      type: 'Citroen',
      number: 'TM28ROS',
      color: 'red',
      owner: 'adina2@mail.com'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
