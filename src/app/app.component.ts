import { Component, OnInit } from '@angular/core';
import { BarleyObservation } from './barley-observation';
import { MyServiceService } from './my-service.service';
import { CornObservation } from './corn-observation';
import { RapeseedObservation } from './rapeseed-observation';
import { SunflowerObservation } from './sunflower-observation';
import { WheatObservation } from './wheat-observation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  barley: BarleyObservation[];
  corn: CornObservation[];
  rapeseed: RapeseedObservation[];
  sunflower: SunflowerObservation[];
  wheat: WheatObservation[];
  service: MyServiceService;

  constructor(myService: MyServiceService) {

    this.barley = [];
    this.corn = [];
    this.rapeseed = [];
    this.sunflower = [];
    this.wheat = [];
    this.service = myService;

  }


  ngOnInit() {

    this.service.getBarley().subscribe(
      (barley_observation:BarleyObservation[]) => {
        this.barley = barley_observation;
      }
    );

    this.service.getCorn().subscribe(
      (corn_observation:CornObservation[]) => {
        this.corn = corn_observation;
      }
    );

    this.service.getRapeseed().subscribe(
      (rapeseed_observation:RapeseedObservation[]) => {
        this.rapeseed = rapeseed_observation;
      }
    );

    this.service.getSunflower().subscribe(
      (sunflower_observation:SunflowerObservation[]) => {
        this.sunflower = sunflower_observation;
      }
    );

    this.service.getWheat().subscribe(
      (Wheat_observation:WheatObservation[]) => {
        this.wheat = Wheat_observation;
      }
    );

  }
}
