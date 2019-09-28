import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(
    private http: HttpClient
  ) { }

  public getNavigationLinks(): Promise<object[]> {
    return this
      .http
      .get<object[]>('/assets/settings/navigation-links.json')
      .toPromise(); 
  }
}
