<template>
  <div class="col-md-8">
    <div id="map"></div>
  </div>
</template>
<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    createMap() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoicGFkZHl4bCIsImEiOiJjbDRyYWpmZTMwNGVvM2RvNnlxbmQwcW5tIn0.xmVqOFbAQjFVqrBCaneyIw";
      this.map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [store.long, store.lat], // starting position [lng, lat]
        zoom: 14, // starting zoom
      });
      this.map.on("load", () => {
        // make an initial directions request that
        // starts and ends at the same location
        const start = store.start;
        this.getRoute(start);

        // Add starting point to the map
        this.map.addLayer({
          id: "point",
          type: "circle",
          source: {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  properties: {},
                  geometry: {
                    type: "Point",
                    coordinates: start,
                  },
                },
              ],
            },
          },
          paint: {
            "circle-radius": 10,
            "circle-color": "#3887be",
          },
        });
      });

      this.map.on("click", (event) => {
        const coords = Object.keys(event.lngLat).map(
          (key) => event.lngLat[key]
        );
        const end = {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Point",
                coordinates: coords,
              },
            },
          ],
        };
        if (this.map.getLayer("end")) {
          this.map.getSource("end").setData(end);
        } else {
          this.map.addLayer({
            id: "end",
            type: "circle",
            source: {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    properties: {},
                    geometry: {
                      type: "Point",
                      coordinates: coords,
                    },
                  },
                ],
              },
            },
            paint: {
              "circle-radius": 10,
              "circle-color": "#f30",
            },
          });
        }
        this.getRoute(coords);
      });

      // map.addControl(
      //   new mapboxgl.GeolocateControl({
      //     positionOptions: {
      //       enableHighAccuracy: true,
      //     },
      //     // When active the map will receive updates to the device's location as it changes.
      //     trackUserLocation: true,
      //     // Draw an arrow next to the location dot to indicate which direction the device is heading.
      //     showUserHeading: true,
      //   })
      // );
    },
    async getRoute(end) {
      // only the end or destination will change
      const start = store.start;
      const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
        { method: "GET" }
      );
      const json = await query.json();
      console.log(json);
      const data = json.routes[0];
      store.eta = data.duration;
      store.distance = data.distance;
      store.isData = true;

      const route = data.geometry.coordinates;
      const geojson = {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: route,
        },
      };
      // if the route already exists on the map, we'll reset it using setData
      if ((this, this.map.getSource("route"))) {
        this.map.getSource("route").setData(geojson);
      }
      // otherwise, we'll make a new request
      else {
        this.map.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: geojson,
          },
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#3887be",
            "line-width": 5,
            "line-opacity": 0.75,
          },
        });
      }
      // add turn instructions here at the end
    },
  },
  mounted() {
    this.createMap();

    // set the bounds of the map
  },
};
</script>
<style scoped>
@import url("./bootstrap.min.css");

#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 70%;
  transition: all 0.3s;
}
</style>
