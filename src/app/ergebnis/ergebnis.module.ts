import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErgebnisPageRoutingModule } from './ergebnis-routing.module';

import { ErgebnisPage } from './ergebnis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErgebnisPageRoutingModule
  ],
  declarations: [ErgebnisPage]
})
export class ErgebnisPageModule {}
