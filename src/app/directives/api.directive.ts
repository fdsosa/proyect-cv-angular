import { Directive, OnInit, ElementRef, Renderer2, Input, HostListener, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[pHolder]'
})

export class ApiDirective{

  constructor() { }

  @Input() set pHolder(condition: boolean){
    if(condition){
      console.log('asies')
    }else{
      console.log('asinoes')
    }
  }

}
