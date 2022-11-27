import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccioncursoComponent } from './seccioncurso.component';

describe('SeccioncursoComponent', () => {
  let component: SeccioncursoComponent;
  let fixture: ComponentFixture<SeccioncursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccioncursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccioncursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
