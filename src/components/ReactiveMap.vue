<template>
<div>
  <div ref="map" class="map-container"></div>
</div>
</template>

<script>
import mapboxgl from 'mapbox-gl';

export default {
name: "ReactiveMap",
  props: {
    points: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    const ACCESS_TOKEN = ''; // todo ruti add here token
    mapboxgl.accessToken = ACCESS_TOKEN;

    // Create a new Map instance
    this.map = new mapboxgl.Map({
      container: this.$refs.map,
      style: 'mapbox://styles/mapbox/light-v11', // Use a gray-themed Mapbox style
      center: [ 34.305668, 31.409193], // Starting center coordinates [longitude, latitude]
      zoom: 9 // Starting zoom level
    });

    this.map.on('load', () => {
      this.map.addSource('countries', {
        'type': 'geojson',
        'data': 'https://api.mapbox.com/datasets/v1/mapbox/world-borders-v1?access_token=' + ACCESS_TOKEN
      });

      // this.map.addLayer({
      //   'id': 'country-borders',
      //   'type': 'line',
      //   'source': 'countries',
      //   'source-layer': 'admin-0-boundary', // Adjust the source layer name to an existing layer name in the 'countries' source
      //   'paint': {
      //     'line-color': 'red',
      //     'line-width': 1
      //   }
      // });
    });

    this.map.on('load', () => {
      (this.points || []).forEach( (marker, index) => {
        this.map.addLayer({
          'id': 'marker-' + index,
          'type': 'circle',
          'source': {
            'type': 'geojson',
            'data': {
              'type': 'FeatureCollection',
              'features': [{
                'type': 'Feature',
                'properties': {},
                'geometry': {
                  'type': 'Point',
                  'coordinates': marker.coordinates // Set coordinates for each marker
                }
              }]
            }
          },
          'paint': {
            'circle-radius': marker.radius || 4,
            'circle-color': marker.color // Set color for each marker
          }
        });
      });
    });


    // this.map.on('load', () => {
    //   this.map.addLayer({
    //     'id': 'marker',
    //     'type': 'circle',
    //     'source': {
    //       'type': 'geojson',
    //       'data': {
    //         'type': 'FeatureCollection',
    //         'features': [{
    //           'type': 'Feature',
    //           'properties': {},
    //           'geometry': {
    //             'type': 'Point',
    //             'coordinates': [ 34.605678, 31.497183] // Specify the coordinates for the marker
    //           }
    //         }]
    //       }
    //     },
    //     'paint': {
    //       'circle-radius': 4,
    //       'circle-color': '#941C1C' // Adjust the color of the marker
    //     }
    //   });
    // });



  },
  beforeDestroy() {
    if (this.map) {
      this.map.remove();
    }
  }
}
</script>

<style scoped>
.map-container {
  width: 1400px;
  height: 1000px;
  border-radius: 8px;
}
/deep/ .mapboxgl-ctrl {
  display: none !important;

}
</style>
