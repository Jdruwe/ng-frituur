import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SnacksFilterComponent} from './snacks-filter.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {SharedModule} from '../../../../shared/shared.module';
import {By} from '@angular/platform-browser';

describe('SnacksFilterComponent', () => {
  let component: SnacksFilterComponent;
  let fixture: ComponentFixture<SnacksFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        SharedModule
      ],
      declarations: [SnacksFilterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnacksFilterComponent);
    component = fixture.componentInstance;
  });

  it('should show a list of snack categories once clicked.', () => {
    component.categories = [
      {
        id: 1,
        name: 'oosters'
      },
      {
        id: 2,
        name: 'vlees'
      }
    ];

    fixture.detectChanges();

    const debugElement = fixture.debugElement;
    const matSelect = debugElement.query(By.css('.mat-select-trigger')).nativeElement;
    matSelect.click();

    fixture.detectChanges();

    const optionDebugElements = debugElement.queryAll(By.css('mat-option'));
    expect(optionDebugElements[0].nativeElement.textContent).toContain('Alles');
    expect(optionDebugElements[1].nativeElement.textContent).toContain('Oosters');
    expect(optionDebugElements[2].nativeElement.textContent).toContain('Vlees');
  });
});
