import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalcursosComponent } from './principalcursos.component';

describe('PrincipalcursosComponent', () => {
  let component: PrincipalcursosComponent;
  let fixture: ComponentFixture<PrincipalcursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalcursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
