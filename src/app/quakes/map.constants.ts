import VectorLayer from 'ol/layer/Vector';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';

// these constants can be used throughout the quakes module
 export const STREET_LAYER = new TileLayer({
    source: new OSM(),
    visible: true
  });

  export const VECTOR_LAYER = new VectorLayer({
    visible: true,
    style: new Style({
      fill: new Fill({
        color: 'rgba(255, 255, 255, 0.2)',
      }),
      stroke: new Stroke({
        color: '#00d10a',
        width: 3,
      }),
      image: new CircleStyle({
        radius: 7,
        fill: new Fill({
          color: '#a83232',
        }),
      }),
    }),
  })