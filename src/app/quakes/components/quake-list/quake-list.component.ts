import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/models/appState';
import { Quake } from '../../models/quake';
import { QuakeActions } from '../../store';
import { errorSelector, isLoadingSelector, quakesSelector } from '../../store/selectors';

@Component({
  selector: 'app-quake-list',
  templateUrl: './quake-list.component.html',
  styleUrls: ['./quake-list.component.sass']
})
export class QuakeListComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  quakes$: Observable<Quake[]>;

  constructor(private store: Store<AppState>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.quakes$ = this.store.pipe(select(quakesSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(QuakeActions.getQuakes());
  }
}
