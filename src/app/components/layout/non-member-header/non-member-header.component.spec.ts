import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonMemberHeaderComponent } from './non-member-header.component';

describe('NonMemberHeaderComponent', () => {
  let component: NonMemberHeaderComponent;
  let fixture: ComponentFixture<NonMemberHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonMemberHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonMemberHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
