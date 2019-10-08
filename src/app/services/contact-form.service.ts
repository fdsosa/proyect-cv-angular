import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Contact } from '../models/contact.form' 

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  contactForm: Contact;

  readonly URL_API = 'http://localhost:3200/'

  constructor(private http: HttpClient) {
    this.contactForm = new Contact();  
  }

  postForm(contact: Contact){
    this.http.post(this.URL_API, contact)
      .subscribe(
        (response) => { console.log('ola'); },
        (error) => { console.log('chao'); }
      )
  }

  getForms(){
    console.log('control2')
    return this.http.get(this.URL_API);
  }

}
