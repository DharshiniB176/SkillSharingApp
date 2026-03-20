import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrer } from './carrer';

describe('Carrer', () => {
  let component: Carrer;
  let fixture: ComponentFixture<Carrer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carrer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carrer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
