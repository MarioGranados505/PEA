import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginacursoComponent } from './paginacurso.component';

describe('PaginacursoComponent', () => {
  let component: PaginacursoComponent;
  let fixture: ComponentFixture<PaginacursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginacursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginacursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
