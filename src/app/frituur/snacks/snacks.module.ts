import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {SnacksRoutingModule} from './snacks-routing.module';

import * as fromContainers from './containers';

@NgModule({
  declarations: [fromContainers.containers],
  imports: [
    SharedModule,
    SnacksRoutingModule
  ]
})
export class SnacksModule {
}
