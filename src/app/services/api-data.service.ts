import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
	URL: string = 'http://localhost:3000/api/';

	constructor(private http: HttpClient) { }

	getData(sectionCode: string){
		return this.http.get(`${this.URL}${sectionCode}`);
	}

	getRepos(){
		return this.http.get('https://api.github.com/users/fdsosa/repos')
	}
}
