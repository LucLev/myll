import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  geolocationPosition:any
  lat: number = 48.852969;
  lon: number = 2.349903;
  millMap = null;
  myIcon = L.icon({ iconUrl: 'icon' });
  message: string = "gimme data"
  initMap() {
    this.millMap = L.map('map').setView([this.lat, this.lon], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
      minZoom: 5,
      maxZoom: 20
    }).addTo(this.millMap);
  }
  youAreHere(){
    this.addToMap(this.geolocationPosition.coords.latitude, this.geolocationPosition.coords.longitude, 'you are here');
  }
  addToMap(lat: number, lon: number, name: string) {
    L.marker([lat, lon], { icon: this.myIcon }).bindPopup(name).addTo(this.millMap).openPopup();
  }


  toRad(x){
    return Math.PI*x/180;
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
    getNearStats(lat: number, lon: number){
      //parcourir les positions dont la latitude longitude sont dans un cercle d'une grandeur defini
      if (this.geoDist(this.lat,this.lon,lat,lon)<=500) {
        this.message = "Oui, c'est pas mal."
      }
      else {
        this.message = "C'est lointain."
      }
    }
    constructor() { }

    ngOnInit() {
      this.initMap()
      const myIcon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
      });
      L.marker([50.6311634, 3.0599573], { icon: myIcon }).bindPopup('Je suis un Frugal Marqueur').addTo(this.millMap).openPopup();
      this.addToMap(48.866667, 2.333333, 'Paris');
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
    
    }

  }
