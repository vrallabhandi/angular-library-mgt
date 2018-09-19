import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginReactiveComponent } from './login-reactive.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('LoginReactiveComponent', () => {
  let component: LoginReactiveComponent;
  let fixture: ComponentFixture<LoginReactiveComponent>;

  beforeEach(async(() => {
    testConfig();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('your form should be valid', () => {
    let username = component.loginForm.controls["username"];

    username.setValue("we");

    expect(username.invalid).toBeTruthy();
  });
});

export const testConfig = () => {
  TestBed.configureTestingModule({
    declarations: [LoginReactiveComponent],
    imports: [ReactiveFormsModule, FormsModule]
  })
    .compileComponents();
}
