import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Komp02Component } from './komp02.component';

describe('Komp02Component', () => {
  let component: Komp02Component;
  let fixture: ComponentFixture<Komp02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Komp02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Komp02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
