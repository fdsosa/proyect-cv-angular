import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './components/index/index.component';
import { RepoGitComponent } from './components/repo-git/repo-git.component';

import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ApiDirective } from './directives/api.directive';
import { RepoContentComponent } from './components/repo-content/repo-content.component';
import { PlaceHolderComponent } from './components/place-holder/place-holder.component' 

const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'repo',
    component: RepoGitComponent
  },
    
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    RepoGitComponent,
    ProfileComponent,
    PresentationComponent,
    SkillsComponent,
    ApiDirective,
    RepoContentComponent,
    PlaceHolderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
