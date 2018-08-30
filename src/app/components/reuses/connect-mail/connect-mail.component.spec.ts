import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectMailComponent } from './connect-mail.component';

describe('ConnectMailComponent', () => {
  let component: ConnectMailComponent;
  let fixture: ComponentFixture<ConnectMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
