import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrfaPage } from './orfa.page';

const routes: Routes = [
  {
    path: '',
    component: OrfaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrfaPageRoutingModule {}
