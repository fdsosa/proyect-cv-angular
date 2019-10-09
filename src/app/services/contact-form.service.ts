import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Contact } from '../models/contact.form' 

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  contactForm: Contact;

  //fix
  //readonly URL_API = 'http://localhost:3200/';
  readonly URL_API_ONLINE = 'https://cv-server-mongodb.herokuapp.com/';

  constructor(private http: HttpClient) {
    this.contactForm = new Contact();  
  }

  postForm(contact: Contact){
    this.http.post(this.URL_API_ONLINE, contact)
      .subscribe(
        (response) => { console.log('ola'); },
        (error) => { console.log('chao'); }
      )
  }

  getForms(){
    console.log('control2')
    return this.http.get(this.URL_API_ONLINE);
  }

}
