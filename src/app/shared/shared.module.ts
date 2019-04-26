import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

import * as fromPipes from './pipes';

@NgModule({
  declarations: [...fromPipes.pipes],
  imports: [],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    ...fromPipes.pipes
  ]
})
export class SharedModule {
}
