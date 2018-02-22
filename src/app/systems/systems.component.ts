import { Component, OnInit } from '@angular/core';
import { System } from '../models/System';
import { SystemService } from '../services/system.service';

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.css']
})
export class SystemsComponent implements OnInit {

  private systems: System[] = [];
  
  constructor(private systemsService: SystemService) { }

  ngOnInit() {
    this.loadSystems();
  }

  loadSystems(): void {
    this.systemsService.getSystems()
      .subscribe(systems => {
        this.systems = systems[0]['systems'];
      });
      
}

}
