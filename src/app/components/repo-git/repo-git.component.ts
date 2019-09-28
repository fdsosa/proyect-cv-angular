import { Component, OnInit } from '@angular/core';
import { RepoContentComponent } from '../repo-content/repo-content.component'

@Component({
  selector: 'app-repo-git',
  templateUrl: './repo-git.component.html',
  styleUrls: ['./repo-git.component.scss']
})
export class RepoGitComponent implements OnInit {

  constructor(private contentComponent: RepoContentComponent) { }

  ngOnInit() {
    console.log(this.contentComponent + 'ola-')
  }

}
