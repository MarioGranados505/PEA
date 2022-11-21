import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursomaestroComponent } from './cursomaestro.component';

describe('CursomaestroComponent', () => {
  let component: CursomaestroComponent;
  let fixture: ComponentFixture<CursomaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursomaestroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursomaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
