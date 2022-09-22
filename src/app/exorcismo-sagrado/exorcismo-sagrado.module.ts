import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExorcismoSagradoPageRoutingModule } from './exorcismo-sagrado-routing.module';

import { ExorcismoSagradoPage } from './exorcismo-sagrado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExorcismoSagradoPageRoutingModule
  ],
  declarations: [ExorcismoSagradoPage]
})
export class ExorcismoSagradoPageModule {}
