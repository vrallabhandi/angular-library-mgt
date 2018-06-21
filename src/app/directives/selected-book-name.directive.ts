import { Directive, ElementRef, Renderer2, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSelectedBookName]'
})
export class SelectedBookNameDirective implements OnInit, OnChanges {
  @Input() code;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const color = this.code === 'B001' ? 'lightgreen' : 'lightblue';
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', color);
  }

  ngOnChanges(changes: SimpleChanges) {
    const color = changes.code.currentValue === 'B001' ? 'lightgreen' : 'lightblue';
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', color);
  }

}
