import { Component, OnInit } from '@angular/core';
import { ApiDataService} from './../../services/api-data.service'

@Component({
  selector: 'repo-content',
  templateUrl: './repo-content.component.html',
  styleUrls: ['./repo-content.component.scss']
})
export class RepoContentComponent implements OnInit {

  data = undefined;
  
  constructor(private apiDataService: ApiDataService) { }
  
  getData(){
    this.apiDataService
      .getRepos()
      .subscribe(
        res => {
          this.data = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  ngOnInit() {
    this.getData()
  }

}
