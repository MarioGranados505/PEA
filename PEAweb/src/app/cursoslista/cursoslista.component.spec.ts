import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoslistaComponent } from './cursoslista.component';

describe('CursoslistaComponent', () => {
  let component: CursoslistaComponent;
  let fixture: ComponentFixture<CursoslistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoslistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoslistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
