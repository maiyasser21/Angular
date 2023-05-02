import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductnodiscountComponent } from './productnodiscount.component';

describe('ProductnodiscountComponent', () => {
  let component: ProductnodiscountComponent;
  let fixture: ComponentFixture<ProductnodiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductnodiscountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductnodiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
