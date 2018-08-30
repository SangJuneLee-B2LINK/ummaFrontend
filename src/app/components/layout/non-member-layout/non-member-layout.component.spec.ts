import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonMemberLayoutComponent } from './non-member-layout.component';

describe('NonMemberLayoutComponent', () => {
  let component: NonMemberLayoutComponent;
  let fixture: ComponentFixture<NonMemberLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonMemberLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonMemberLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
