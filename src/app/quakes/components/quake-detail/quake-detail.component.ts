import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, Observable } from 'rxjs';
import { AppState } from 'src/app/models/appState';
import { Quake } from '../../models/quake';
import { singleQuakeSelector } from '../../store/selectors';

@Component({
  selector: 'app-quake-detail',
  templateUrl: './quake-detail.component.html',
  styleUrls: ['./quake-detail.component.sass']
})
export class QuakeDetailComponent implements OnInit {
  quake$: Observable<Quake>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { 
    const quakeId = this.route.snapshot.paramMap.get('id') || '';
    this.quake$ = this.store.pipe(select(singleQuakeSelector(quakeId)))
  }

  ngOnInit(): void {

  }

}
