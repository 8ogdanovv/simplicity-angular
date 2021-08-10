import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLanguageServicesComponent } from './ng-language-services.component';

describe('NgLanguageServicesComponent', () => {
  let component: NgLanguageServicesComponent;
  let fixture: ComponentFixture<NgLanguageServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgLanguageServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLanguageServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
