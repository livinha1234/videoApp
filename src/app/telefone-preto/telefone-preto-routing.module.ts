import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelefonePretoPage } from './telefone-preto.page';

const routes: Routes = [
  {
    path: '',
    component: TelefonePretoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelefonePretoPageRoutingModule {}
