import { Component } from '@angular/core';
import { Place } from '../place';
import { PressureService } from '../services/pressure.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  constructor(private pressure: PressureService){}

  places: Place[] = [
    {
      name: 'Tbilisi',
      altitude: 500
    },
    {
      name: 'Paris',
      altitude: 35,
    },
    {
      name: 'Rome',
      altitude: 21,
    },
    {
      name: 'Berlin',
      altitude: 34,
    },
    {
      name: 'Amsterdam',
      altitude: 2,
    },

]

    PressureLevel(){
      this.pressure.getPlaces(this.places);
      console.log(this.pressure.calculatePressure());
    }

    pressures = this.pressure.calculatePressure();
}
