import { Component } from '@angular/core';
import { User } from '../user';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private data: DataService){}

  users: User[] =[
    {
      Id: 1,
      FirstName: 'Irakli',
      LastName: 'Chabiev',
      DateOfBirth: new Date(),
      Email: 'Irakli@gmail.com',
      MobileNumber: '123456'
    },
    {
      Id: 2,
      FirstName: 'Peter',
      LastName: 'Parker',
      DateOfBirth: new Date(),
      Email: 'Peter@gmail.com',
      MobileNumber: '123411'
    },
    {
      Id: 3,
      FirstName: 'Tony',
      LastName: 'Stark',
      DateOfBirth: new Date(),
      Email: 'Tony@gmail.com',
      MobileNumber: '789456'
    },
  ];


  sendData() {
    const dataToSave = this.users;
    this.data.setRegistrationData(dataToSave);
  }

}
