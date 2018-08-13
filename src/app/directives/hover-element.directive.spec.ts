import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HoverElementDirective } from './hover-element.directive';


@Component({
  template: `<p appHoverElement>
              Author: Author 1
            </p>`
})
class TestHoverFocusComponent { }

describe('HoverElementDirective', () => {
  let fixture: ComponentFixture<TestHoverFocusComponent>;
  let pTag: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HoverElementDirective,
        TestHoverFocusComponent
      ]
    });
    fixture = TestBed.createComponent(TestHoverFocusComponent);
    pTag = fixture.debugElement.query(By.css('p'));
  });

  it('should handle mouse enter', () => {
    pTag.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(pTag.nativeElement.style.backgroundColor).toBe('yellow');
    expect(pTag.nativeElement.style.fontWeight).toBe('bold');
  });

  it('should handle mouse leave', () => {
    pTag.nativeElement.style.backgroundColor = 'yellow';
    pTag.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(pTag.nativeElement.style.backgroundColor).toBe('transparent');
    expect(pTag.nativeElement.style.fontWeight).toBe('normal');
  });
});
