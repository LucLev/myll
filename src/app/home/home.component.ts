import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MyServiceService } from '../my-service.service';
import { BarleyObservation } from '../barley-observation';
import { WheatObservation } from '../wheat-observation';
import { SunflowerObservation } from '../sunflower-observation';
import { CornObservation } from '../corn-observation';
import { RapeseedObservation } from '../rapeseed-observation';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myIcon = L.icon({ iconUrl: 'https://i.ibb.co/8Dw5jkJ/neutral-Icon30.png' });
  wheatIcon = L.icon({ iconUrl: "https://i.ibb.co/SKg3WLd/barley-Icon30.png" });
  cornIcon = L.icon({ iconUrl: "https://i.ibb.co/ZxZrtpq/corn-Icon30.png" });
  rseedIcon = L.icon({ iconUrl: "https://i.ibb.co/cb5m2d8/rseed-Icon30.png" });
  sunflowerIcon = L.icon({ iconUrl: "https://i.ibb.co/nz0TS2k/sunflower-Icon30.png" });
  barleyIcon = L.icon({ iconUrl: "https://i.ibb.co/wsKwLZD/wheat-Icon30.png" });


  iconArray = [
    this.barleyIcon,
    this.cornIcon,
    this.rseedIcon,
    this.sunflowerIcon,
    this.wheatIcon,
    this.myIcon
  ]

  myservice: MyServiceService;
  geolocationPosition: any;
  lat: number = 48.852969;
  lon: number = 2.349903;
  millMap = null;

  message: string = "gimme data"
  initMap() {
    this.millMap = L.map('map').setView([this.lat, this.lon], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
      minZoom: 1,
      maxZoom: 20
    }).addTo(this.millMap);
  }
  youAreHere() {
    this.addToMap(this.geolocationPosition.coords.latitude, this.geolocationPosition.coords.longitude, 'you are here', 5);
  }
  addToMap(lat: number, lon: number, name: string, icon: number) {
    L.marker([lat, lon], { icon: this.iconArray[icon] }).bindPopup(name).addTo(this.millMap).openPopup();
    this.barleyLayer.clearLayers()
  }
  toRad(x) {
    return Math.PI * x / 180;
  }
  geoDist(lat1, lng1, lat2, lng2) {
    let earth_radius = 6378.137;
    let rlo1 = this.toRad(lng1);
    let rla1 = this.toRad(lat1);
    let rlo2 = this.toRad(lng2);
    let rla2 = this.toRad(lat2);
    let dlo = (rlo2 - rlo1) / 2;
    let dla = (rla2 - rla1) / 2;
    let a = (Math.sin(dla) * Math.sin(dla)) + Math.cos(rla1) * Math.cos(rla2) * (Math.sin(dlo) * Math.sin(dlo));
    let d = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    console.log(earth_radius * d)
    return (earth_radius * d);
  }
  average(array:Array<number>){
    let total:number = 0
    for(let i = 0;i<array.length; i++){
      total += array[i]
    }
    return (total/array.length);
  }
  yieldavg:number
  getNearStats(type:number) {
    //parcourir les positions dont la latitude longitude sont dans un cercle d'une grandeur defini
    let compArray:Array<number>
    for(let i = 0;i<this.allObservation[type].length; i++){
      if(this.isNear(this.allObservation[type][i].coordinates.latitude,this.allObservation[type][i].coordinates.longitude) ){
        compArray.push(this.allObservation[type][i].yield)
      }
    }
    this.yieldavg = this.average(compArray)
  }
  isNear(lat,lon){
    if (this.geoDist(this.geolocationPosition.coords.latitude, this.geolocationPosition.coords.longitude, lat, lon) <= 500) {
      // -de 500km
      return true;
    }
    else {
      // + de 500km
      return false;
    }
  }

  barleys:Array<BarleyObservation>;
  wheats:Array<WheatObservation>;
  sunflowers:Array<SunflowerObservation>;
  corns:Array<CornObservation>;
  rapeseeds:Array<RapeseedObservation>;
  allObservation:Array<Array<any>> =
  [
  this.barleys,
  this.wheats ,
  this.sunflowers,
  this.corns,
  this.rapeseeds,
  ]

  getThings() {
    this.myservice.getBarley().subscribe(
      (array_Of_Barley: BarleyObservation[]) => {
        console.log(this.barleys)
        this.barleys = array_Of_Barley;
        console.log(this.barleys)
      }
    );
    this.myservice.getWheat().subscribe(
      (array_Of_Wheat: WheatObservation[]) => {
        console.log(this.wheats)
        this.wheats = array_Of_Wheat;
        console.log(this.wheats)
      }
    );
    this.myservice.getSunflower().subscribe(
      (array_Of_Sunflower: SunflowerObservation[]) => {
        console.log(this.sunflowers)
        this.sunflowers = array_Of_Sunflower;
        console.log(this.sunflowers)
      }
    );
    this.myservice.getCorn().subscribe(
      (array_Of_Corn: CornObservation[]) => {
        console.log(this.corns)
        this.corns = array_Of_Corn;
        console.log(this.corns)
      }
    );
    this.myservice.getRapeseed().subscribe(
      (array_Of_Rapeseed: RapeseedObservation[]) => {
        console.log(this.rapeseeds)
        this.rapeseeds = array_Of_Rapeseed;
        console.log(this.rapeseeds)
      }
    );
  }
  barleymarkers: any[]
  barleyLayer: any = L.layerGroup
  displayBarleys() {
    for (let i = 0; i <= this.barleys.length; i++) {
      L.marker([this.barleys[i].coordinates.latitude, this.barleys[i].coordinates.longitude], { icon: this.iconArray[0] }).bindPopup(this.barleys[i].place).addTo(this.millMap).openPopup();
    }
    this.barleyLayer.addTo(this.millMap);
  }
  displayCorns() {
    for (let i = 0; i <= this.corns.length; i++) {
      L.marker([this.corns[i].coordinates.latitude, this.corns[i].coordinates.longitude], { icon: this.iconArray[1] }).bindPopup(this.corns[i].place).addTo(this.millMap).openPopup();
    }
  }
  displayRapeseeds() {
    for (let i = 0; i <= this.rapeseeds.length; i++) {
      L.marker([this.rapeseeds[i].coordinates.latitude, this.rapeseeds[i].coordinates.longitude], { icon: this.iconArray[2] }).bindPopup(this.rapeseeds[i].place).addTo(this.millMap).openPopup();
    }
  }
  displaySunflowers() {
    for (let i = 0; i <= this.sunflowers.length; i++) {
      L.marker([this.sunflowers[i].coordinates.latitude, this.sunflowers[i].coordinates.longitude], { icon: this.iconArray[3] }).bindPopup(this.sunflowers[i].place).addTo(this.millMap).openPopup();
    }
  }
  displayWheats() {
    for (let i = 0; i <= this.wheats.length; i++) {
      L.marker([this.wheats[i].coordinates.latitude, this.wheats[i].coordinates.longitude], { icon: this.iconArray[4] }).bindPopup(this.wheats[i].place).addTo(this.millMap).openPopup();
    }
  }



  constructor(private service: MyServiceService) { }

  ngOnInit() {
    this.myservice = this.service;
    this.initMap()

    //getting user location
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.geolocationPosition = position,
            console.log(position)
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

    //initializing every different array 
    this.myservice.getBarley().subscribe(
      (array_Of_Barley: BarleyObservation[]) => {
        console.log(this.barleys)
        this.barleys = array_Of_Barley;
        console.log(this.barleys)
        //this.displayBarleys()
      }
    );
    this.myservice.getWheat().subscribe(
      (array_Of_Wheat: WheatObservation[]) => {
        console.log(this.wheats)
        this.wheats = array_Of_Wheat;
        console.log(this.wheats)
        //this.displayWheats()
      }
    );
    this.myservice.getSunflower().subscribe(
      (array_Of_Sunflower: SunflowerObservation[]) => {
        console.log(this.sunflowers)
        this.sunflowers = array_Of_Sunflower;
        console.log(this.sunflowers)
        //this.displaySunflowers()
      }
    );
    this.myservice.getCorn().subscribe(
      (array_Of_Corn: CornObservation[]) => {
        console.log(this.corns)
        this.corns = array_Of_Corn;
        console.log(this.corns)
        //this.displayCorns()
      }
    );
    this.myservice.getRapeseed().subscribe(
      (array_Of_Rapeseed: RapeseedObservation[]) => {
        console.log(this.rapeseeds)
        this.rapeseeds = array_Of_Rapeseed;
        console.log(this.rapeseeds)
        //this.displayRapeseeds()
      }
    );



  }

}
