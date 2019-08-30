import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryProfessionalComponent } from './delivery-professional.component';

describe('DeliveryProfessionalComponent', () => {
  let component: DeliveryProfessionalComponent;
  let fixture: ComponentFixture<DeliveryProfessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryProfessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
