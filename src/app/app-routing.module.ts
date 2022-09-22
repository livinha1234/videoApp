import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'jumanji',
    loadChildren: () => import('./jumanji/jumanji.module').then( m => m.JumanjiPageModule)
  },  {
    path: 'orfa',
    loadChildren: () => import('./orfa/orfa.module').then( m => m.OrfaPageModule)
  },
  {
    path: 'telefone-preto',
    loadChildren: () => import('./telefone-preto/telefone-preto.module').then( m => m.TelefonePretoPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'exorcismo-sagrado',
    loadChildren: () => import('./exorcismo-sagrado/exorcismo-sagrado.module').then( m => m.ExorcismoSagradoPageModule)
  },
  {
    path: 'minions',
    loadChildren: () => import('./minions/minions.module').then( m => m.MinionsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
