import { Injectable } from '@angular/core';
import { Place } from '../place';

@Injectable({
  providedIn: 'root'
})
export class PressureService {

  places: any;
  getPlaces(placesInfo: any){
    this.places = placesInfo;
    console.log(this.places)
  }

  calculatePressure(){
    const pressureLevels: string[] = [];

    if (this.places) {
      this.places.forEach((place:Place) => {
        if (place.altitude > 300) {
          pressureLevels.push(place.name +' has low pressure');
        } else if (place.altitude >= 100 && place.altitude <= 200) {
          pressureLevels.push(place.name +' has medium pressure');
        } else {
          pressureLevels.push(place.name + ' has high pressure');
        }
      });
    }

    return pressureLevels;
  
  }
}
