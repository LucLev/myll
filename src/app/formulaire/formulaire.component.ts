import { Component, OnInit } from '@angular/core';
import { InformationService } from '../information.service';
import { BarleyObservation } from '../barley-observation';

import { Coordinates } from '../coordinates';
import { SafeSubscriber } from 'rxjs/internal/Subscriber';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  geolocationPosition:any

  testpost:BarleyObservation = {
    specificWeight: 5,
    email: 'sauce@Saf.net',
    yield: 5,
    yieldNotation: 5,
    nitrogenQuantityUsed: 5,
    nitrogenProductUsed: 'sas',
    phone: '+33606060606',
    cultivationMethod: 'conventional',
    place: 'string',
    coordinates:{
      latitude:50,
      longitude: 3
    } 
  }

  variety: string;
  place: string;
  specificWeight: number;
  email: string;
  phone: string;
  yield: number;
  humidity: number;
  yieldNotation: number;
  nitrogenQuantityUsed: number;
  nitrogenProductUsed: string;
  comment: string;
  cultivationMethod: string;
  targetPrice: number;

  onSubmit() {

    console.log(this.geolocationPosition.coords.latitude);
    if (this.variety) {
      this.testpost.variety = this.variety;
    };
    this.testpost.specificWeight = this.specificWeight;

    this.testpost.place = this.place;

    this.testpost. email = this. email;

    this.testpost.yield = this.yield;

    this.testpost.yieldNotation = this.yieldNotation;

    this.testpost.nitrogenQuantityUsed = this.nitrogenQuantityUsed;

    this.testpost.nitrogenProductUsed = this.nitrogenProductUsed;

    if(this.cultivationMethod){
      this.testpost.cultivationMethod = 'simplified cultivation methods';
    }
    this.testpost.phone
    if (this.phone) {
      this.phone = ("+33"+this.phone.slice(1));
      this.testpost.phone = this.phone;
    };
    this.testpost. yield
    if (this. yield) {
      this.testpost.yield = this.yield;
    };
     this.testpost.humidity
    if (this.humidity) {
      this.testpost.humidity = this.humidity;
    }; 
    this.testpost.comment
    if (this.comment) {
      this.testpost.comment = this.comment;
    }; 
    this.testpost.targetPrice
    if (this.targetPrice) {
      this.testpost.targetPrice = this.targetPrice;
    }; 
    this.info.postBarley(this.testpost).subscribe(
      /* (myobservation: BarleyObservation) => {
         alert("la donnée a bien été postée");
       }*/
    )
    console.log(this.testpost)
    

  }
  constructor(private info: InformationService) {

    /* this.testpost = {
 
 
       "specificWeight": 70,
       "email": "yorann.bidultruc@laposte.net",
       "phone": "+33666464615",
       "variety": "omnis",
       "yield": 104,
       "humidity": 18.93,
       "yieldNotation": 1,
       "nitrogenQuantityUsed": 6.48,
       "nitrogenProductUsed": "Ammonitrate",
       "comment": "Libero iure in qui amet debitis. Dolores mollitia praesentium ut aut ut molestias. Dolor ipsa consequuntur enim. Quod sint qui quia.",
       "cultivationMethod": "conventional",
       "targetPrice": 215.6,
       "place": "Lesagenec",
       "coordinates": {
         "latitude": 17.704849,
         "longitude": 83.010419
       }
     }
     */

    /*public onValidForm():void{
      
      
      let observation:BarleyObservation = {
       /* comment: "commentaire récupéré depuis mon formulaire",
        coordinates: "10.14:1.132",
        nitrogenProductUsed:""v*/


    /* email: "test@gmail.com",
     phone: "06 78 67 65 66",
     variety: "Blé",
     yield: 50,
     humidity: 20,
     
     nitrogenQuantityUsed: 23,
     nitrogenProductUsed: "qerozene",
     comment: "grosse exploitation ",
    
     place: "la loupe",
     coordinates: "10.14:1.132", */




  }

  ngOnInit() {
     //getting user location
     if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.geolocationPosition = position;
          this.testpost.coordinates.latitude = position.coords.latitude;
          this.testpost.coordinates.longitude = position.coords.longitude;
            console.log(position)
            console.log(this.testpost.coordinates)
        },
        error => {
          switch (error.code) {
            case 1:
              console.log('Permission Denied');
              break;
            case 2:
              console.log('Position Unavailable');
              break;
            case 3:
              console.log('Timeout');
              break;
          }
        }
      );
    };

    

  }



}



