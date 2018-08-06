import { Directive, ElementRef, OnInit, Renderer2,Input,OnChanges } from '@angular/core';
import {Book} from '../../models/book.model';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit, OnChanges{
//private elRef: ElementRef;
@Input() book: Book;
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
    ) {
    //this.elRef = elRef;
   }

  ngOnInit() {
    console.log(this.elRef.nativeElement);
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','yellow');
  }

  ngOnChanges(){
    const color = this.book.code ==='B001'? 'yellow' : 'purple';
    this.renderer.setStyle(this.elRef.nativeElement,'background-color',color);
  }

}
