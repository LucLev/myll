import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BarleyObservation } from './barley-observation';
import { CornObservation } from './corn-observation';
import { RapeseedObservation } from './rapeseed-observation';
import { SunflowerObservation } from './sunflower-observation';
import { WheatObservation } from './wheat-observation';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private client:HttpClient;

  constructor( http:HttpClient) { 
    this.client = http;
  }

  public getAll(){

    let obs:Observable<any> = this.client.get("https://api.capgrain.com/barley-observations");
    let treatment = (data:any) => {
      return data.bar
    }
  }
  
  
}
