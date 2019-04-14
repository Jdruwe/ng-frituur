import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'snacks',
    loadChildren: './snacks/snacks.module#SnacksModule'
  },
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrituurRoutingModule {
}
