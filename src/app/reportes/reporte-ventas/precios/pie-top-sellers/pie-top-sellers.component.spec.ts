import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieTopSellersComponent } from './pie-top-sellers.component';

describe('PieTopSellersComponent', () => {
  let component: PieTopSellersComponent;
  let fixture: ComponentFixture<PieTopSellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieTopSellersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieTopSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
