import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHoverElement]'
})
export class HoverElementDirective {
  @HostBinding('style.fontWeight') fontWeight: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'yellow');
    this.fontWeight = 'bold';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');
    this.fontWeight = 'normal';
  }

}
