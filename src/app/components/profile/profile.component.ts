import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service'

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  section: string = 'datos-personales';
  data = undefined;
  show: boolean = false;
  
  constructor(private apiDataService: ApiDataService) { }
  
  ngOnInit() {
    this.getData(this.section)
  }

  getData(sectionCode: string){
    this.apiDataService
      .getData(sectionCode)
      .subscribe(
        res => {
          this.data = res;
        },
        err => {
          console.log(err);
        }
      );
  }
}
