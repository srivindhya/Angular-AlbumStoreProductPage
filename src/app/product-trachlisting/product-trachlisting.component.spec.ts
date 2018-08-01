import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTrachlistingComponent } from './product-trachlisting.component';

describe('ProductTrachlistingComponent', () => {
  let component: ProductTrachlistingComponent;
  let fixture: ComponentFixture<ProductTrachlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTrachlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTrachlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
