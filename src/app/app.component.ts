import { Component, OnInit } from '@angular/core';
import { BarleyObservation } from './barley-observation';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  barley: BarleyObservation[];
  service: MyServiceService;

  constructor(myService: MyServiceService) {

    this.barley = [];
    this.service = myService;

  }


  ngOnInit() {
    this.service.getComments().subscribe(
      (barley_observation:BarleyObservation[]) => {
        this.barley = barley_observation;
      }
    )
  }
}
