import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {SnacksRoutingModule} from './snacks-routing.module';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import { SnackComponent } from './components/snack/snack.component';

@NgModule({
  declarations: [fromContainers.containers, fromComponents.components, SnackComponent],
  imports: [
    SharedModule,
    SnacksRoutingModule
  ]
})
export class SnacksModule {
}
