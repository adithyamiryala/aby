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
    loadChildren: './asana-defination/asana-defination.module#AsanaDefinationPageModule' }
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
