import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service'

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  dataSkills = undefined;

  constructor(private api: ApiDataService) { }

  ngOnInit() {
    this.getDataSkills()
  }

  //Where obtain data
  getDataSkills() {
    if (!localStorage.getItem('skills')) {
      this.getData('skills');
    }
    else {
      this.dataSkills = JSON.parse(localStorage.getItem('skills'));
      console.log(this.dataSkills)
    }
  }

  //Obtain data from API
  getData(section: string){
    this.api
      .getData(section)
      .subscribe(
        res => {
          this.dataSkills = res;
          for (let item of this.dataSkills) {
            item.value = `inset(0 ${item.value}% 0 0)`;
          }
          //Save in LS
          localStorage.setItem('skills', JSON.stringify(this.dataSkills));
        },

        err => {
          console.log(err)
        }
      );
  }

}
