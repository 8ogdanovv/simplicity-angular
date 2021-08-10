import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgI18nComponent } from './ng-i18n.component';

describe('NgI18nComponent', () => {
  let component: NgI18nComponent;
  let fixture: ComponentFixture<NgI18nComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgI18nComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgI18nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
