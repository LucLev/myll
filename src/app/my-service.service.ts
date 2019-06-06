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

  public getBarley(): Observable<BarleyObservation[]> {
    
    let obs:Observable<any> = this.client.get("https://api.capgrain.com/barley-observations");

    let treatment = (data:any) => {
      return data["hydra:member"] as BarleyObservation[];
    };
    return obs.pipe(map(treatment));
  }

  public getCorn(): Observable<CornObservation[]> {
    
    let obs:Observable<any> = this.client.get("https://api.capgrain.com/corn-observations");

    let treatment = (data:any) => {
      return data["hydra:member"] as CornObservation[];
    };
    return obs.pipe(map(treatment));
  }

  public getRapeseed(): Observable<RapeseedObservation[]> {
    
    let obs:Observable<any> = this.client.get("https://api.capgrain.com/rapeseed-observations");

    let treatment = (data:any) => {
      return data["hydra:member"] as RapeseedObservation[];
    };
    return obs.pipe(map(treatment));
  }

  public getSunflower(): Observable<SunflowerObservation[]> {
    
    let obs:Observable<any> = this.client.get("https://api.capgrain.com/sunflower-observations");

    let treatment = (data:any) => {
      return data["hydra:member"] as SunflowerObservation[];
    };
    return obs.pipe(map(treatment));
  }

  public getWheat(): Observable<WheatObservation[]> {
    
    let obs:Observable<any> = this.client.get("https://api.capgrain.com/wheat-observations");

    let treatment = (data:any) => {
      return data["hydra:member"] as WheatObservation[];
    };
    return obs.pipe(map(treatment));
  }
}
