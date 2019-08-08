import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MeditationDefinitionPage } from './meditation-definition.page';

const routes: Routes = [
  {
    path: '',
    component: MeditationDefinitionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MeditationDefinitionPage]
})
export class MeditationDefinitionPageModule {}
