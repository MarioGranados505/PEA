import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoimagenComponent } from './cursoimagen.component';

describe('CursoimagenComponent', () => {
  let component: CursoimagenComponent;
  let fixture: ComponentFixture<CursoimagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoimagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoimagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
