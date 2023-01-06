import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidoConPage } from './olvido-con.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidoConPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidoConPageRoutingModule {}
