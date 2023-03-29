import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriaPageComponent } from './auditoria-page.component';

describe('AuditoriaPageComponent', () => {
  let component: AuditoriaPageComponent;
  let fixture: ComponentFixture<AuditoriaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditoriaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditoriaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
