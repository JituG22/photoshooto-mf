import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRemoteComponent } from './home-remote.component';

describe('HomeRemoteComponent', () => {
  let component: HomeRemoteComponent;
  let fixture: ComponentFixture<HomeRemoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeRemoteComponent]
    });
    fixture = TestBed.createComponent(HomeRemoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
