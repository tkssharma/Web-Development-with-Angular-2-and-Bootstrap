import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({selector: '[appColorRed]'})
export class ColorRedDirective {

  constructor(private el : ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter')onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave')onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color : string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
