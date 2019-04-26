import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {SharedModule} from '../../../../shared/shared.module';
import {SnacksComponent} from './snacks.component';
import {SnackComponent} from '../../components/snack/snack.component';
import {SnacksFilterComponent} from '../../components/snacks-filter/snacks-filter.component';
import {HttpClientModule} from '@angular/common/http';

describe('SnacksComponent', () => {
  let component: SnacksComponent;
  let fixture: ComponentFixture<SnacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        SharedModule,
        HttpClientModule
      ],
      declarations: [SnacksComponent, SnackComponent, SnacksFilterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
