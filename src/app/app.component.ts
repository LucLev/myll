import { Component, OnInit } from '@angular/core';
import { BarleyObservation } from './barley-observation';
import { MyServiceService } from './my-service.service';
import { CornObservation } from './corn-observation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  barley: BarleyObservation[];
  corn: CornObservation[];
  service: MyServiceService;

  constructor(myService: MyServiceService) {

    this.barley = [];
    this.corn = [];
    this.service = myService;

  }

  ngOnInit() {
    this.service.getComments().subscribe(
      (barley_observation:BarleyObservation[]) => {
        this.barley = barley_observation;
      }
    ),

    this.service.getCorn().subscribe(
      (corn_observation:CornObservation[]) => {
        this.corn = corn_observation;
      }
    )
  }
}
