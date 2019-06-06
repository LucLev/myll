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

  private client:HttpClient

  constructor(private httpclient: HttpClient) { 
    this.client = httpclient;
  }

  public getComments(): Observable<BarleyObservation[]> {
    
    let obs:Observable<any> = this.client.get("https://api.capgrain.com/barley-observations");

    let treatment = (data:any) => {
      return data["hydra:member"] as BarleyObservation[];
    };
    return obs.pipe(map(treatment));
  };

  public getCorn(): Observable<CornObservation[]> {
    
    let obs:Observable<any> = this.client.get("https://api.capgrain.com/corn-observations");

    let treatment = (data:any) => {
      return data["hydra:member"] as CornObservation[];
    };
    return obs.pipe(map(treatment));
  }

}
