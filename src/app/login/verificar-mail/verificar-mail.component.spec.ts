import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarMailComponent } from './verificar-mail.component';

describe('VerificarMailComponent', () => {
  let component: VerificarMailComponent;
  let fixture: ComponentFixture<VerificarMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarMailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
