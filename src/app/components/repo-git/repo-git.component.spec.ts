import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoGitComponent } from './repo-git.component';

describe('RepoGitComponent', () => {
  let component: RepoGitComponent;
  let fixture: ComponentFixture<RepoGitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoGitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
