import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service'

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  section: string = 'skills';
  data = undefined;

  constructor(private api: ApiDataService) { }

  ngOnInit() {
    this.getData(this.section)
  }

  getData(sectionCode: string){
    this.api
      .getData(sectionCode)
      .subscribe(
        res => {
          this.data = res;
          for (let item of this.data) {
            item.value = `inset(0 ${item.value}% 0 0)`;
          }
        },

        err => {
          console.log(err)
        }
      );
  }

}
