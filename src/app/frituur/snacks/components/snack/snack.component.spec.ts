import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SnackComponent} from './snack.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {SharedModule} from '../../../../shared/shared.module';
import {By} from '@angular/platform-browser';

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

  it('should display snack information based on its input.', () => {
    component.snack = {
      id: 3,
      name: 'crispy-chicken-tender-strips',
      description: 'Test description',
      category: 3
    };

    fixture.detectChanges();

    const titleDebugElement = fixture.debugElement.query(By.css('mat-card-title'));
    const imageDebugElement = fixture.debugElement.query(By.css('img'));
    const descriptionDebugElement = fixture.debugElement.query(By.css('p'));

    expect(titleDebugElement.nativeElement.textContent).toContain('Crispy Chicken Tender Strips');
    expect(imageDebugElement.nativeElement.src).toContain('assets/images/snacks/crispy-chicken-tender-strips.png');
    expect(descriptionDebugElement.nativeElement.textContent).toContain('Test description');
  });
});
