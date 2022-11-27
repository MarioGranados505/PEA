import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatuscursosComponent } from './paginatuscursos.component';

describe('PaginatuscursosComponent', () => {
  let component: PaginatuscursosComponent;
  let fixture: ComponentFixture<PaginatuscursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatuscursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatuscursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
