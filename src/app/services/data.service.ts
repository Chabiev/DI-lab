import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private logger: LoggerService){}

  private registrationData: any;

  setRegistrationData(data: any) {
    this.registrationData = data;
  }

  getRegistrationData() {
    //return this.registrationData;
    this.logger.Print(this.registrationData);
  }

}
