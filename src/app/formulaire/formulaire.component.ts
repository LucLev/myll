import { Component, OnInit } from '@angular/core';
import { InformationService } from '../information.service';
import { BarleyObservation } from '../barley-observation';

import { Coordinates } from '../coordinates';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  public testpost: BarleyObservation;
  
  variety: string;
  place: string;
  specificWeight: number;
  email: string;
  phone: number;
  yield: number;
  humidity: number;
  yieldNotation: number;
  nitrogenQuantityUsed: number;
  nitrogenProductUsed: string;
  comment: number;
  cultivationMethod: string;
  targetPrice: number;


  compilerReponse() {
    

    this.testpost.variety
    if (this.variety) {
    };
    this.testpost.specificWeight = this.specificWeight;

    this.testpost. email = this. email;

    this.testpost.yield = this.yield;

    this.testpost.yieldNotation = this.yieldNotation;

    this.testpost.nitrogenQuantityUsed = this.nitrogenQuantityUsed;

    this.testpost.nitrogenProductUsed = this.nitrogenProductUsed;

    this.testpost.cultivationMethod = this.cultivationMethod;

    this.testpost.phone
    if (this.phone) {
    };
    this.testpost. yield
    if (this. yield) {
    };
     this.testpost.humidity
    if (this.humidity) {
    }; 
    this.testpost.comment
    if (this.comment) {
    }; 
    this.testpost.targetPrice
    if (this.targetPrice) {
    }; 
   
    

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

    this.info.postBarley(this.testpost).subscribe(
      /* (myobservation: BarleyObservation) => {
         alert("la donnée a bien été postée");
       }*/
    )

  }

}



