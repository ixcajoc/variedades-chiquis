import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRastreoComponent } from './detalle-rastreo.component';

describe('DetalleRastreoComponent', () => {
  let component: DetalleRastreoComponent;
  let fixture: ComponentFixture<DetalleRastreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleRastreoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleRastreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
