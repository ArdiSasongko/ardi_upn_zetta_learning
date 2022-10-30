import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Komp03Component } from './komp03.component';

describe('Komp03Component', () => {
  let component: Komp03Component;
  let fixture: ComponentFixture<Komp03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Komp03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Komp03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
