import { TestBed, async } from '@angular/core/testing';
import { BookstoreComponent } from './bookstore.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('BookstoreComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookstoreComponent
      ],
      imports: [
        FormsModule
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));
  xit('should create the app', async(() => {
    const fixture = TestBed.createComponent(BookstoreComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  xit(`should have as name 'default value'`, async(() => {
    const fixture = TestBed.createComponent(BookstoreComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.name).toEqual('default value');
  }));
  xit('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(BookstoreComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
