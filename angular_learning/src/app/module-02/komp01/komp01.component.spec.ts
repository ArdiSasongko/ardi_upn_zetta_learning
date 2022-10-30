import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Komp01Component } from './komp01.component';

describe('Komp01Component', () => {
  let component: Komp01Component;
  let fixture: ComponentFixture<Komp01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Komp01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Komp01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
