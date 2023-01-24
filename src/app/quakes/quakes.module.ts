import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { QuakeListComponent } from './components/quake-list/quake-list.component'
import { QuakeEffects } from './store/effects';
import { QuakeDetailComponent } from './components/quake-detail/quake-detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { MapComponent } from './components/map/map.component';



@NgModule({
  declarations: [
    QuakeListComponent,
    QuakeDetailComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    StoreModule.forFeature('quakes', reducers),
    EffectsModule.forFeature([QuakeEffects]),
  ],
  exports: [QuakeListComponent]
})
export class QuakesModule { }
