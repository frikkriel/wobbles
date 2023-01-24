import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuakeDetailComponent } from './quakes/components/quake-detail/quake-detail.component';
import { QuakeListComponent } from './quakes/components/quake-list/quake-list.component';

const appRoutes: Routes = [
  {
    path: 'quakes-list',
    component: QuakeListComponent
  },
  {
    path: 'quakes-detail/:id',
    component: QuakeDetailComponent
  },
  { path: '',
    redirectTo: '/quakes-list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
