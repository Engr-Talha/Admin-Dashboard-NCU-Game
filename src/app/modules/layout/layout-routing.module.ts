import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'blog',
    component: LayoutComponent,
    loadChildren: () => import('../blogs/blogs.module').then((m) => m.BlogsModule),
  },

  {
    path: 'ama',
    component: LayoutComponent,
    loadChildren: () => import('../ama-section/ama-section.module').then((m) => m.AmaSectionModule),
  },
  {
    path: 'dragons',
    component: LayoutComponent,
    loadChildren: () => import('../dragons/dragons.module').then((m) => m.DragonsModule),
  },
  {
    path: 'territory',
    component: LayoutComponent,
    loadChildren: () => import('../territory/territory.module').then((m) => m.TerritoryModule),
  },
  {
    path: 'users',
    component: LayoutComponent,
    loadChildren: () => import('../users/users.module').then((m) => m.UsersModule),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
