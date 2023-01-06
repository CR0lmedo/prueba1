import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidoConPageRoutingModule } from './olvido-con-routing.module';

import { OlvidoConPage } from './olvido-con.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidoConPageRoutingModule
  ],
  declarations: [OlvidoConPage]
})
export class OlvidoConPageModule {}
