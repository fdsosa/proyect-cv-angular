import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service'

@Component({
  selector: 'presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  section: string = 'description';
  sectionSocial: string= 'social-networks';
  data = undefined;
  dataSocial = undefined;
  
  constructor(private apiDataService: ApiDataService) { }
  
  ngOnInit() {
    this.getData(this.section)
    this.getData2(this.sectionSocial)
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

  getData2(sectionCode: string){
    this.apiDataService
      .getData(sectionCode)
      .subscribe(
        res => {
          this.dataSocial = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  submitData(section: string) {
    
    this.getData(section);
    return false;
  }
}
