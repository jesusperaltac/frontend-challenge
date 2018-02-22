import { Component, OnInit } from '@angular/core';
import { System } from '../models/System';

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.css']
})
export class SystemsComponent implements OnInit {

  systems: System[] = [];
  
  constructor() { }

  ngOnInit() {
    this.loadSystems();
  }

  loadSystems(): void {
    // TODO Implement a service to read the JSON file "systems-short-list.json and load the systems"
}

}
