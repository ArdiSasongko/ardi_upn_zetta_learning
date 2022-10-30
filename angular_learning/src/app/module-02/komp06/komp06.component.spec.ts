import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Komp06Component } from './komp06.component';

describe('Komp06Component', () => {
  let component: Komp06Component;
  let fixture: ComponentFixture<Komp06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Komp06Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Komp06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
