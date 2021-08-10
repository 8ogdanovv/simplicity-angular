import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCliComponent } from './ng-cli.component';

describe('NgCliComponent', () => {
  let component: NgCliComponent;
  let fixture: ComponentFixture<NgCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
