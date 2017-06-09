import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appBgDirective]'
})
export class BgDirectiveDirective {

    constructor(private el : ElementRef) {
    el.nativeElement.style.backgroundColor = 'green';
  }
  @HostListener('mouseenter')onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave')onMouseLeave() {
    this.highlight('blue');
  }
   private highlight(color : string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
