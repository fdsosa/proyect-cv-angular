import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service'

@Component({
  selector: 'presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  dataPresent = undefined;
  dataSocial = undefined;
  
  constructor(private apiDataService: ApiDataService) { }
  
  ngOnInit() {
    this.getDataPresentation();
  }

  //where obtain data
  getDataPresentation(){
    //presentation
    if (!localStorage.getItem('presentation')) {
      this.getData('description');
    }
    else {
      this.dataPresent = JSON.parse(localStorage.getItem('presentation'));
    }
    //social
    if (!localStorage.getItem('social')) {
      this.getData('social-networks');
    }
    else {
      this.dataSocial = JSON.parse(localStorage.getItem('social'));
    }
  }

  //obtain data from api
  getData(section: string) {
    this.apiDataService
      .getData(section)
      .subscribe(
        res => {
          if (section == 'description') {
            this.dataPresent = res;
            //Save in LS
            localStorage.setItem('presentation', JSON.stringify(this.dataPresent));
          }
          else{
            this.dataSocial = res;
            //Save in LS
            localStorage.setItem('social', JSON.stringify(this.dataSocial));
          }
        },
        err => {
          console.log(err);
        }
      );
  }
}
