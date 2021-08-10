import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMaterialCdkComponent } from './ng-material-cdk.component';

describe('NgMaterialCdkComponent', () => {
  let component: NgMaterialCdkComponent;
  let fixture: ComponentFixture<NgMaterialCdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMaterialCdkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMaterialCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
