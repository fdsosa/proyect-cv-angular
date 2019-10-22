import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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

  constructor(private api: ApiDataService,
              private formBuilder: FormBuilder,
              private contactFormService: ContactFormService,
              private vcr: ViewContainerRef) { }

  ngOnInit() {
    this.getDataFooter();

    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(20)]]
    })
  }

  //FORM FUNCTION
  onSubmit(toastRef){
    this.submitted = true;
    if(this.contactForm.invalid){
      return;
    }

    this.contact = new Contact(
      this.contactForm.controls.name.value,
      this.contactForm.controls.email.value,
      this.contactForm.controls.subject.value,
      this.contactForm.controls.message.value
    );


    this.contactFormService.postForm(this.contact);
    this.resetForm(this.contactForm);

    toastRef.classList.add('toastForm-active');
    setTimeout(() => { toastRef.classList.remove('toastForm-active'); }, 2000);
  }

  resetForm(form: FormGroup){
    this.submitted = false;
    form.reset({name: '', email: '', subject: '', message: ''});
  }

  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }

  //API
  //OBTAIN DATA PERSONAL FROM API OR LS
  getDataFooter() {
    //IF PER NOT IN LOCALSTORAGE
    if(!localStorage.getItem('name')) {
      this.getData('datos-personales');
    }
    //IF PER IS IN LOCALSTORAGE
    else{
      this.dataPersonal = {
        name: localStorage.getItem('name'),
        profession: localStorage.getItem('profession'),
        birth: localStorage.getItem('birth'),
        phone: localStorage.getItem('phone'),
        email: localStorage.getItem('email'),
      }
    }

    //IF SOC NOT IN LOCALSTORAGE
    if(!localStorage.getItem('social')) {
      this.getData('social-networks');
    }
    //IF SOC IS IN LOCALSTORAGE
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
              localStorage.setItem('name', this.dataPersonal.name);
              localStorage.setItem('profession', this.dataPersonal.profession);
              localStorage.setItem('phone', this.dataPersonal.phone);
              localStorage.setItem('email', this.dataPersonal.email);
              localStorage.setItem('birth', this.dataPersonal.birth);
            }
          },
          err =>{
            console.log(err);
          }
        );
  }
}
