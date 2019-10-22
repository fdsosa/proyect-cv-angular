import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service'

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  section: string = 'datos-personales';
  dataProfile = undefined;
  show: boolean = false;
  
  constructor(private apiDataService: ApiDataService) {
    this.getDataProfile(this.section)
  }

  //OBTAIN DATA FROM API OR LS
  getDataProfile(section: string){
    //IF NOT IN LOCALSTORAGE
    if(!localStorage.getItem('name')){
      this.getData(section);
      console.log('obtain from api');
    }
    //IF IT IS IN LOCALSTORAGE
    else{
      this.dataProfile = {
        name: localStorage.getItem('name'),
        profession: localStorage.getItem('profession'),
        birth: localStorage.getItem('birth'),
        phone: localStorage.getItem('phone'),
        email: localStorage.getItem('email'),
      }
      console.log('obtain from ls' + this.dataProfile);
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
          localStorage.setItem('name', this.dataProfile.name);
          localStorage.setItem('profession', this.dataProfile.profession);
          localStorage.setItem('phone', this.dataProfile.phone);
          localStorage.setItem('email', this.dataProfile.email);
          localStorage.setItem('birth', this.dataProfile.birth);
        },
        err => {
          console.log(err);
        }
      );
  }
}
