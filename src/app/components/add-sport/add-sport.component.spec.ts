import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSporComponent } from './add-sportcomponent';

describe('AddSporComponent', () => {
  let component: AddSporComponent;
  let fixture: ComponentFixture<AddSporComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSporComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
