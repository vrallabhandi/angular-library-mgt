import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedBookComponent } from './selected-book.component';
import { Book } from '../models/book.model';

describe('SelectedBookComponent', () => {
  let component: SelectedBookComponent;
  let fixture: ComponentFixture<SelectedBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
