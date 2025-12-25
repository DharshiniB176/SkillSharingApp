import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topcategory } from './topcategory';

describe('Topcategory', () => {
  let component: Topcategory;
  let fixture: ComponentFixture<Topcategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Topcategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Topcategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
