import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SnackComponent} from './snack.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {SharedModule} from '../../../../shared/shared.module';

describe('SnackComponent', () => {
  let component: SnackComponent;
  let fixture: ComponentFixture<SnackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        SharedModule
      ],
      declarations: [SnackComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.snack = {
      id: 1,
      name: '',
      description: '',
      category: 2
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
