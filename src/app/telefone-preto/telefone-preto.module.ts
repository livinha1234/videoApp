import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelefonePretoPageRoutingModule } from './telefone-preto-routing.module';

import { TelefonePretoPage } from './telefone-preto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelefonePretoPageRoutingModule
  ],
  declarations: [TelefonePretoPage]
})
export class TelefonePretoPageModule {}
