import { Component } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service'

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  dataProfile = undefined;
  show: boolean = false;
  
  constructor(private apiDataService: ApiDataService) {
    this.getDataProfile()
  }

  //Obtain data
  getDataProfile(){
    //From API
    if(!localStorage.getItem('profile')){
      this.getData('datos-personales');
    }
    //From LocalStorage
    else{
      this.dataProfile = JSON.parse(localStorage.getItem('profile'));
    }
  }

  //OBTAIN DATA FROM API
  getData(sectionCode: string){
    this.apiDataService
      .getData(sectionCode)
      .subscribe(
        res => {
          this.dataProfile = res;
          //SAVE IN LS
          localStorage.setItem('profile', JSON.stringify(this.dataProfile));
        },
        err => {
          console.log(err);
        }
      );
  }
}
