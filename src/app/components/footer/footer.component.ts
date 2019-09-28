import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  urlSocial: string = 'social-networks';
  urlPersonal: string = 'datos-personales';
  dataSocial = undefined;
  dataPersonal = undefined;

  constructor(private api: ApiDataService) { }

  ngOnInit() {
    this.getData(this.urlSocial);
    this.getData(this.urlPersonal);
  }

  getData(section: string){
    this.api
      .getData(section)
        .subscribe(
          res => {
            if(section == this.urlSocial){
              this.dataSocial = res;
            }else{
              this.dataPersonal = res;
            }
          },
          err =>{
            console.log(err);
          }
        );
  }
}
