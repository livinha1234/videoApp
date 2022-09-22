import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrfaPageRoutingModule } from './orfa-routing.module';

import { OrfaPage } from './orfa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrfaPageRoutingModule
  ],
  declarations: [OrfaPage]
})
export class OrfaPageModule {}
