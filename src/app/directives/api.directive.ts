import { Directive, OnInit, ElementRef, Renderer2, Input, HostListener, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[animate]'
})

export class ApiDirective implements OnInit{

  //@Input('animate') className: string;

  constructor(private elRef: ElementRef, private render: Renderer2) { }

  

  ngOnInit() {
  }

  ngAfterViewInit(){
    
  }

}
