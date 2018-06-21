import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverElement]'
})
export class HoverElementDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'yellow');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');
  }

}
