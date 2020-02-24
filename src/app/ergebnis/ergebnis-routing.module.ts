import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErgebnisPage } from './ergebnis.page';

const routes: Routes = [
  {
    path: '',
    component: ErgebnisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErgebnisPageRoutingModule {}
