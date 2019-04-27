import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {SharedModule} from '../../../../shared/shared.module';
import {SnacksComponent} from './snacks.component';
import {SnackComponent} from '../../components/snack/snack.component';
import {SnacksFilterComponent} from '../../components/snacks-filter/snacks-filter.component';
import {HttpClientModule} from '@angular/common/http';
import * as fromState from '../../state';
import {By} from '@angular/platform-browser';

describe('SnacksComponent', () => {
  let component: SnacksComponent;
  let fixture: ComponentFixture<SnacksComponent>;
  let snacksStore: fromState.SnacksStore;

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
    snacksStore = TestBed.get(fromState.SnacksStore);
  });

  it('should render the correct number of snacks based on the data in the store.', () => {
    snacksStore.set([
      {
        id: 4,
        name: 'fishfingers',
        description: 'Heerlijk malse vis in een krokant korstje. Wordt mooi gepresenteerd in een originele Mora pocket.',
        category: 4
      },
      {
        id: 5,
        name: 'frikandel',
        description: 'Heerlijk gekruide vleesfrikandel, voorgegaard.',
        category: 2
      }
    ]);

    fixture.detectChanges();
    const snackDebugElements = fixture.debugElement.queryAll(By.css('app-snack'));
    expect(snackDebugElements.length).toEqual(2);
  });

  it('should render the snacks filter.', () => {
    const snacksFilterDebugElement = fixture.debugElement.query(By.css('app-snacks-filter'));
    expect(snacksFilterDebugElement.nativeElement).toBeDefined();
  });
});
