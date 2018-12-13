import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './welcome/welcome.module#WelcomeModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'create',
    loadChildren: './create/create.module#CreateModule'
  },
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule'
  },
  {
    path: 'support',
    loadChildren: './support/support.module#SupportModule'
  },
  {
    path: 'pickup',
    loadChildren: './pickup/pickup.module#PickupModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
