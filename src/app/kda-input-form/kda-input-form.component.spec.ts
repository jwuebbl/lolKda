import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KdaInputFormComponent } from './kda-input-form.component';

describe('KdaInputFormComponent', () => {
  let component: KdaInputFormComponent;
  let fixture: ComponentFixture<KdaInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KdaInputFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KdaInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
