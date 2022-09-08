import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JumanjiPageRoutingModule } from './jumanji-routing.module';

import { JumanjiPage } from './jumanji.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JumanjiPageRoutingModule
  ],
  declarations: [JumanjiPage]
})
export class JumanjiPageModule {}
