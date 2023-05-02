import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductswithdiscountComponent } from './productswithdiscount.component';

describe('ProductswithdiscountComponent', () => {
  let component: ProductswithdiscountComponent;
  let fixture: ComponentFixture<ProductswithdiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductswithdiscountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductswithdiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
