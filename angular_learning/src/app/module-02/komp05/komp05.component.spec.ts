import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Komp05Component } from './komp05.component';

describe('Komp05Component', () => {
  let component: Komp05Component;
  let fixture: ComponentFixture<Komp05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Komp05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Komp05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
