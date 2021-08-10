import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgHttpComponent } from './ng-http.component';

describe('NgHttpComponent', () => {
  let component: NgHttpComponent;
  let fixture: ComponentFixture<NgHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
