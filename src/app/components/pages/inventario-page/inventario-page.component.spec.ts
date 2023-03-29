import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioPageComponent } from './inventario-page.component';

describe('InventarioPageComponent', () => {
  let component: InventarioPageComponent;
  let fixture: ComponentFixture<InventarioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
