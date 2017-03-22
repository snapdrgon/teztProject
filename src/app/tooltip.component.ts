import {Component, Directive, Input,ElementRef, Renderer, ViewChild, AfterViewInit } from '@angular/core';

@Component({
    selector:'[tooltip]',
    templateUrl: 'app/tooltip.component.html',
    styleUrls: ['app/tooltip.css'],
       host:{
        '(click)':'onClick()'
    },
})
export class TooltipComponent implements AfterViewInit {
   @Input('tooltip') textIn:string;
   @ViewChild('tooltipElement') tooltipElement:ElementRef;
   isVisible:boolean=true;

    tooltipText:string;

    constructor(private renderer:Renderer){      
    }

    ngAfterViewInit() {
        this.renderer.setElementStyle(this.tooltipElement.nativeElement, 'visibility', 'hidden');
    }
  
    onClick() {
        this.tooltipText = this.isVisible ? this.textIn : '';

        this.renderer.setElementStyle(this.tooltipElement.nativeElement, 'visibility', this.isVisible ? 'visible': 'hidden');
        
        this.isVisible = !this.isVisible;
    }
}