import { Directive, ElementRef, HostBinding, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';
import {Book} from '../../models/book.model';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit, OnChanges{
//private elRef: ElementRef;
@Input() book: Book;
@HostBinding('style.fontSize') fontSize: string;
//@HostBinding('class') fontSize: string;
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
    ) {
    //this.elRef = elRef;
   }

  ngOnInit() {
    console.log(this.elRef.nativeElement);
  }

  ngOnChanges(){
    const color = this.book.code ==='B001'? 'yellow' : 'purple';
    this.renderer.setStyle(this.elRef.nativeElement,'background-color',color);
    this.fontSize = this.book.code ==='B001'? '20px' : '30px';
  }

}
