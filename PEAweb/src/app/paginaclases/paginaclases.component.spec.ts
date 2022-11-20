import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaclasesComponent } from './paginaclases.component';

describe('PaginaclasesComponent', () => {
  let component: PaginaclasesComponent;
  let fixture: ComponentFixture<PaginaclasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaclasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaclasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
