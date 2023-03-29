import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsourcingPageComponent } from './outsourcing-page.component';

describe('OutsourcingPageComponent', () => {
  let component: OutsourcingPageComponent;
  let fixture: ComponentFixture<OutsourcingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutsourcingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutsourcingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
