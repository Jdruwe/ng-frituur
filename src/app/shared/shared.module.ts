import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class SharedModule {
}
