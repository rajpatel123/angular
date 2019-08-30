import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeleveryComponent } from './product-delevery.component';

describe('ProductDeleveryComponent', () => {
  let component: ProductDeleveryComponent;
  let fixture: ComponentFixture<ProductDeleveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDeleveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeleveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
