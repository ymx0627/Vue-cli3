<template>
  <div>
    <div id="map" class="map"></div>
  </div>
</template>

<script>
// var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
import { default as mapboxgl } from "mapbox-gl/dist/mapbox-gl";
import mapConfig from "./config/map.cfg";
export default {
  name: "mapboxMap",
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoieW14MDYyNyIsImEiOiJjanE0ZmtvamMxdDdpM3h1aXZqc3l6aDhrIn0.IW4ONu1m1KWqI2wjWQK6Mw";
    var map = new mapboxgl.Map({
      center: mapConfig.viewOption.center,
      zoom: mapConfig.viewOption.zoom,
      pitch: 45,
      bearing: -17.6,
      container: "map",
      antialias: true,
      // style: "mapbox://styles/mapbox/streets-v11",
      style: "mapbox://styles/ymx0627/ckem8ydr822hn19ocqo6uzqhw",
      
    });
  },
};
</script>

<style>
.map {
  width: 100%;
  height: calc(100vh - 120px);
}
</style>