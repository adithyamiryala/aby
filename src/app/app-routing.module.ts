import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AsanaDefinationPageModule } from './asana-defination/asana-defination.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { 
    path: 'asana-defination/:title', 
    loadChildren: './asana-defination/asana-defination.module#AsanaDefinationPageModule' 
  },
  { path: 'pranayamam', loadChildren: './pranayamam/pranayamam.module#PranayamamPageModule' },
  { path: 'pranayamam-definition', loadChildren: './pranayamam-definition/pranayamam-definition.module#PranayamamDefinitionPageModule' },
  { path: 'meditation', loadChildren: './meditation/meditation.module#MeditationPageModule' },
  { path: 'meditation-definition', loadChildren: './meditation-definition/meditation-definition.module#MeditationDefinitionPageModule' },
  { path: 'surya-namaskar', loadChildren: './surya-namaskar/surya-namaskar.module#SuryaNamaskarPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
/*
export const asanaDefinitionRoute: Routes = [
  {
      path: 'asana-defination/:title',
      component: AsanaDefinationPageModule,
  }
];*/
