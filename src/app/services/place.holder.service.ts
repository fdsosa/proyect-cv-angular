import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlaceHolderService {

  constructor(private http: HttpClient) { }

  test(){
    return this
      .http
      .get<object[]>('../components/repo-content/repo-content.component')
      .subscribe(data => (console.log(data)));
  }    
}
