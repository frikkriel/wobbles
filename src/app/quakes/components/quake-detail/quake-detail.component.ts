import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/models/appState';
import { Quake } from '../../models/quake';
import { singleQuakeSelector } from '../../store/selectors';
import Map from 'ol/Map';
import View from 'ol/View';
import Group from 'ol/layer/Group';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { STREET_LAYER, VECTOR_LAYER } from '../../map.constants';



@Component({
  selector: 'app-quake-detail',
  templateUrl: './quake-detail.component.html',
  styleUrls: ['./quake-detail.component.scss']
})
export class QuakeDetailComponent implements OnInit {
  quake$: Observable<Quake>;

  // set up the initial map
  map: Map = new Map({
    view: new View({
      center: [0, 0],
      zoom: 0,
      projection: 'EPSG:4326'
    }),
    target: 'ol-map'
  });

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    // the quake's id is sourced here from the URL parameter 
    const quakeId = this.route.snapshot.paramMap.get('id') || '';

    this.quake$ = this.store.pipe(select(singleQuakeSelector(quakeId)))
  }

  ngOnInit(): void {
    this.setMapLayers();
  }

  setMapLayers() {
    const LAYER_GROUP = new Group({
      layers: [
        STREET_LAYER,
        VECTOR_LAYER
      ]
    });
    this.map.addLayer(LAYER_GROUP);

    /* subscribe to the quake select so that the geojson data can be
       added to the vector layer */
    this.quake$.subscribe(data => {
      var vectorSource = new VectorSource({
        features: new GeoJSON().readFeatures(data),
      });

      VECTOR_LAYER.setSource(vectorSource);
    });
  };
}
