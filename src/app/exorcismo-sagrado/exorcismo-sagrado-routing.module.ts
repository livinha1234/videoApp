import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExorcismoSagradoPage } from './exorcismo-sagrado.page';

const routes: Routes = [
  {
    path: '',
    component: ExorcismoSagradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExorcismoSagradoPageRoutingModule {}
