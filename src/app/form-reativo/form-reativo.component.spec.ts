import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReativoComponent } from './form-reativo.component';
import { FormGroup, FormControl, Validator } from '@angular/forms';


describe('FormReativoComponent', () => {
  let component: FormReativoComponent;
  let fixture: ComponentFixture<FormReativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
