import { Directive, OnInit, ElementRef, Renderer2, Input, OnChanges, HostBinding } from '@angular/core';
import { Book } from '../../models/book.model';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit, OnChanges {
  @Input() book: Book;

  @HostBinding('style.fontSize') fontSize: string
  constructor(
    private eLRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    console.log(this.eLRef.nativeElement);
    //this.renderer.setStyle(this.eLRef.nativeElement, 'background-color','black');
  }

  ngOnChanges() {
    const color = this.book.code === 'B001' ? 'yellow' : 'purple';
    this.renderer.setStyle(this.eLRef.nativeElement, 'background-color', color);
    this.fontSize = this.book.code === 'B001' ? '50px' : '30px';
  }
}
