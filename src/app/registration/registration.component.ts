import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registrationData: any;

  constructor(private data: DataService, private logger: LoggerService) {}


  DisplayData(){
    this.registrationData = this.data.getRegistrationData();
  }




}
