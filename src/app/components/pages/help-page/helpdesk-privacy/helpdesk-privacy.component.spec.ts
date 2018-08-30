import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskPrivacyComponent } from './helpdesk-privacy.component';

describe('HelpdeskPrivacyComponent', () => {
  let component: HelpdeskPrivacyComponent;
  let fixture: ComponentFixture<HelpdeskPrivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskPrivacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
