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
export class InformationService {

  private client:HttpClient

  constructor(private httpclient: HttpClient) { 
    this.client = httpclient;
  }

  public postBarley(observation:BarleyObservation): Observable<BarleyObservation> {
    
    let obs:Observable<any> = this.client.post("https://api.capgrain.com/barley-observations",observation,{

      headers:{
        'Content-Type': 'application/json'
      }
    });

    let treatment = (data:any) => {
      return data["hydra:member"] as BarleyObservation;
    };
    return obs.pipe(map(treatment));
  }

  public postCorn(observation:CornObservation): Observable<CornObservation> {
    
    let obs:Observable<any> = this.client.post("https://api.capgrain.com/corn-observations",observation,{

      headers:{
        'Content-Type': 'application/json'
      }
    });
    let treatment = (data:any) => {
      return data["hydra:member"] as CornObservation;
    };
    return obs.pipe(map(treatment));
  }

  public postRapeseed(observation:RapeseedObservation): Observable<RapeseedObservation> {
    
    let obs:Observable<any> = this.client.post("https://api.capgrain.com/rapeseed-observations",observation,{

    headers:{
      'Content-Type': 'application/json'
    }
  });

    let treatment = (data:any) => {
      return data["hydra:member"] as RapeseedObservation;
    };
    return obs.pipe(map(treatment));
  }

  public postSunflower(observation:SunflowerObservation): Observable<SunflowerObservation> {
    
    let obs:Observable<any> = this.client.post("https://api.capgrain.com/sunflower-observations",observation,{

    headers:{
      'Content-Type': 'application/json'
    }
  });
//subscribe
    let treatment = (data:any) => {
      return data["hydra:member"] as SunflowerObservation;
    };
    return obs.pipe(map(treatment));
  }

  public postWheat(observation:WheatObservation): Observable<WheatObservation> {
    
    let obs:Observable<any> = this.client.post("https://api.capgrain.com/wheat-observations", observation, {
      headers:{
        'Content-Type':  'application/json'
      }
    });
//subscribe
    let treatment = (data:any) => {
      return data["hydra:member"] as WheatObservation;
    };
    return obs.pipe(map(treatment));
  }
}
