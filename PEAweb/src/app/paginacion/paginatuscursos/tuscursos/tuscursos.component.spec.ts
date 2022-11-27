import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuscursosComponent } from './tuscursos.component';

describe('TuscursosComponent', () => {
  let component: TuscursosComponent;
  let fixture: ComponentFixture<TuscursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuscursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuscursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
