import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSelect } from './skill-select';

describe('SkillSelect', () => {
  let component: SkillSelect;
  let fixture: ComponentFixture<SkillSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillSelect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
