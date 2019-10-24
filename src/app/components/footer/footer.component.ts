import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ContactFormService } from '../../services/contact-form.service';
import { Contact } from '../../models/contact.form';

@Component({
  selector: 'app-footer',

  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  //API
  dataSocial = undefined;
  dataPersonal = undefined;

  //FORM
  contactForm: FormGroup;
  contact: Contact;
  submitted = false;
  showToast: boolean;

  constructor(private api: ApiDataService, private formBuilder: FormBuilder, private contactFormService: ContactFormService) { }

  ngOnInit() {
    this.getDataFooter();
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(20)]]
    })
  }
  
  /**
   * 
   *  FORM 
   *  
   */

  //FORM FUNCTION
  onSubmit(toastRef) {

    this.submitted = true;

    //Control Validation
    if(this.contactForm.invalid){
      return;
    }

    //Create from model
    this.contact = new Contact(
      this.contactForm.controls.name.value,
      this.contactForm.controls.email.value,
      this.contactForm.controls.subject.value,
      this.contactForm.controls.message.value
    );


    this.contactFormService.postForm(this.contact);
    this.resetForm(this.contactForm);

    //Add a toast
    toastRef.classList.add('toastForm-active');
    setTimeout(() => { toastRef.classList.remove('toastForm-active'); }, 2000);
  }

  //Reset form
  resetForm(form: FormGroup){
    this.submitted = false;
    form.reset({name: '', email: '', subject: '', message: ''});
  }

  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }


   /**
   * 
   *  API 
   *  
   */

  //Obtain data
  getDataFooter() {
    //From API
    if(!localStorage.getItem('profile')) {
      this.getData('datos-personales');
    }
    //From LocalStorage
    else{
      this.dataPersonal = JSON.parse(localStorage.getItem('profile'));
    }

    //From API
    if(!localStorage.getItem('social')) {
      this.getData('social-networks');
    }
    //From LocalStorage
    else{
      this.dataSocial = JSON.parse(localStorage.getItem('social'));
    }  
  }

  //GET DATA FROM API
  getData(section: string){
    this.api
      .getData(section)
        .subscribe(
          res => {
            if(section == 'social-networks'){
              this.dataSocial = res;
              console.log(res);
              //SAVE IN LS
              localStorage.setItem('social', JSON.stringify(this.dataSocial));
            }else{
              this.dataPersonal = res;
              //SAVE IN LS
              localStorage.setItem('profile', JSON.stringify(this.dataPersonal));
            }
          },
          err =>{
            console.log(err);
          }
        );
  }
}
