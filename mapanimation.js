// This array contains the coordinates for all bus stops between MIT and Harvard

  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-71.093729, 42.359244]
        },
        properties: {
          title: 'Mapbox',
          description: 'busStopA'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-71.094915, 42.360175]
        },
        properties: {
          title: 'Mapbox',
          description: 'BusStopB'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-71.0958, 42.360698]
        },
        properties: {
          title: 'Mapbox',
          description: 'busStopC'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-71.099558, 42.362953]
        },
        properties: {
          title: 'Mapbox',
          description: 'busStopD'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-71.103476, 42.365248]
        },
        properties: {
          title: 'Mapbox',
          description: 'busStopE'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-71.106067, 42.366806]
        },
        properties: {
          title: 'Mapbox',
          description: 'busStopF'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-71.108717, 42.368355]
        },
        properties: {
          title: 'Mapbox',
          description: 'busStopG'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-71.110799, 42.369192]
        },
        properties: {
          title: 'Mapbox',
          description: 'busStopH'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-71.113095, 42.370218]
        },
        properties: {
          title: 'Mapbox',
          description: 'busStopI'
        }
      }
    ]
  };

  mapboxgl.accessToken = 'pk.eyJ1IjoiamRwaGkxMjMiLCJhIjoiY2xhb29kMnRuMHkwejQwcXRoNnhjNHRyMCJ9.NzKH_MkBN70QAv6zdRNqow';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14,
  });
  
  var marker = new mapboxgl.Marker().setLngLat(-71.093729, 42.359244).addTo(map)

  // add markers to map
for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';
  
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
  }

  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    setTimeout(() => {
        if (counter >= geojson.features.length) return;
        marker.setLngLat(geojson.features[counter]);
        counter++;
        move();
      }, 1000);
  }
