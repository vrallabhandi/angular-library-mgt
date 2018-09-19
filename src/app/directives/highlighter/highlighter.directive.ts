import { Directive, OnInit, ElementRef, Renderer2, Input, OnChanges, HostBinding } from '@angular/core';
import { Book } from '../../models/book.model';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit, OnChanges{

  @Input() book: Book;
  // private  elRef: ElementRef;

  // constructor(elRef: ElementRef) { 
  //   this.elRef = elRef;
  // }
  @HostBinding('style.fontSize') fontSize: string;
  //@HostBinding('class') fontSize: string;  class can also be added like this.
  constructor(
    private elRef : ElementRef,
    private renderer: Renderer2
  ){

  }
  ngOnInit(){
    console.log(this.elRef.nativeElement);
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','grey');
  }

  ngOnChanges(){
    const color = this.book.code ==='B001' ? 'grey' : 'purple';
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color',color);
    this.fontSize = this.book.code ==='B001' ? '20px' : '30px';
  }

}
