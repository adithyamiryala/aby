import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AsanaDefinationPage } from './asana-defination.page';

const routes: Routes = [
  {
    path: '',
    component: AsanaDefinationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AsanaDefinationPage]
})
export class AsanaDefinationPageModule {}
