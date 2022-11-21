import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursonombreComponent } from './cursonombre.component';

describe('CursonombreComponent', () => {
  let component: CursonombreComponent;
  let fixture: ComponentFixture<CursonombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursonombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursonombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
