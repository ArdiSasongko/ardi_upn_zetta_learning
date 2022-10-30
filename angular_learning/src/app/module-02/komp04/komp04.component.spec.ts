import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Komp04Component } from './komp04.component';

describe('Komp04Component', () => {
  let component: Komp04Component;
  let fixture: ComponentFixture<Komp04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Komp04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Komp04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
