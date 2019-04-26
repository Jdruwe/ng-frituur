import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {SnacksRoutingModule} from './snacks-routing.module';

import * as fromContainers from './containers';
import * as fromComponents from './components';

@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],
  imports: [
    SharedModule,
    SnacksRoutingModule
  ]
})
export class SnacksModule {
}
