import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskTermsComponent } from './helpdesk-terms.component';

describe('HelpdeskTermsComponent', () => {
  let component: HelpdeskTermsComponent;
  let fixture: ComponentFixture<HelpdeskTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
