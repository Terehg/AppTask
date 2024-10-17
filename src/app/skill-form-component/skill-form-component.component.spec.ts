import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillFormComponentComponent } from './skill-form-component.component';

describe('SkillFormComponentComponent', () => {
  let component: SkillFormComponentComponent;
  let fixture: ComponentFixture<SkillFormComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillFormComponentComponent]
    });
    fixture = TestBed.createComponent(SkillFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
