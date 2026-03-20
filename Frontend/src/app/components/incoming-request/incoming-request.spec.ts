import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingRequest } from './incoming-request';

describe('IncomingRequest', () => {
  let component: IncomingRequest;
  let fixture: ComponentFixture<IncomingRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomingRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomingRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
