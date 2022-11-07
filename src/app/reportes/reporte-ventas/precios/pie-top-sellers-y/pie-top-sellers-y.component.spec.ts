import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieTopSellersYComponent } from './pie-top-sellers-y.component';

describe('PieTopSellersYComponent', () => {
  let component: PieTopSellersYComponent;
  let fixture: ComponentFixture<PieTopSellersYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieTopSellersYComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieTopSellersYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
