import { Component, DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Book } from '../../models/book.model';


import { HighlighterDirective } from './highlighter.directive';

@Component({
    template: `
    <p class="my-p-tag" id="book1" appHighlighter [book]="book1"> This is some test text. </p>
    <p class="my-p-tag" id="book2" appHighlighter [book]="book2"> This is some test text. </p>
  `
})
class TestComponent {
    book1: Book = {
        code: "B001",
        author: "aaa",
        name: "bbb",
        thumbnail: "ccc"
    };

    book2: Book = {
        code: "B002",
        author: "aaa",
        name: "bbb",
        thumbnail: "ccc"
    };
}

describe('HighlighterDirective', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let pTag1: DebugElement;
    let pTag2: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestComponent,
                HighlighterDirective
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        pTag1 = fixture.debugElement.query(By.css('#book1'));
        pTag2 = fixture.debugElement.query(By.css('#book2'));
        fixture.detectChanges();
    });

    it('should handle font size and color for positive case', () => {
        fixture.detectChanges();
        expect(pTag1.nativeElement.style.fontSize).toEqual('50px');

        fixture.detectChanges();
        expect(pTag1.nativeElement.style.backgroundColor).toEqual('yellow');
    });

    it('should handle font size and color for negative case', () => {
        fixture.detectChanges();
        expect(pTag2.nativeElement.style.fontSize).toEqual('30px');

        fixture.detectChanges();
        expect(pTag2.nativeElement.style.backgroundColor).toEqual('purple');
    });

});