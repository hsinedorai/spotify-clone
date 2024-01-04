import { Routes } from '@angular/router';
import { AuthGuard } from './pages/guards/auth.guard';

export const AppRoutes: Routes = [



  {
    path: '',
    redirectTo: 'player',
    pathMatch: 'full'
  },

{
 path:'player',
 loadChildren:()=>import('./pages/player/player.module').then(x=>x.PlayerModule),
 canActivate:[AuthGuard]
},

{
  path:'login',
  loadChildren: () => import('./pages/login/login.module').then(x => x.LoginModule)

},


];
