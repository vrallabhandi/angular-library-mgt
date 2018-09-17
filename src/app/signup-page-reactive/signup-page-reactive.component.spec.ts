import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPageReactiveComponent } from './signup-page-reactive.component';

describe('SignupPageReactiveComponent', () => {
  let component: SignupPageReactiveComponent;
  let fixture: ComponentFixture<SignupPageReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupPageReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPageReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
