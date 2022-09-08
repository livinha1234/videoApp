import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JumanjiPage } from './jumanji.page';

const routes: Routes = [
  {
    path: '',
    component: JumanjiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JumanjiPageRoutingModule {}
