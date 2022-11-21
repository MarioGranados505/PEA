import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoporcientoComponent } from './cursoporciento.component';

describe('CursoporcientoComponent', () => {
  let component: CursoporcientoComponent;
  let fixture: ComponentFixture<CursoporcientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoporcientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoporcientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
