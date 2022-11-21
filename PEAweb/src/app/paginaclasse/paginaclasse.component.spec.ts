import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaclasseComponent } from './paginaclasse.component';

describe('PaginaclasseComponent', () => {
  let component: PaginaclasseComponent;
  let fixture: ComponentFixture<PaginaclasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaclasseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaclasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
