import { Directive, HostBinding, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverElement]'
})
export class HoverElementDirective {

  @HostBinding('style.fontWeight') fw: string;
  constructor(
    private elRef: ElementRef
  ) { }

  @HostListener('mouseenter') onHoverIn(){
    //console.log(this.elRef.nativeElement.textContent);
    this.fw='bold';
  }

  @HostListener('mouseleave') onHoverOut(){
    //console.log(this.elRef.nativeElement.textContent);
    this.fw='normal';
  }

}
