<template>
  <div id="olMap">
    <slot></slot>
  </div>
</template>

<script>
import ol from "ol";
import mapConfig from "./map.cfg";
import proj4 from "proj4";
export default {
  name: "olMap",
  data() {
    return {};
  },
  provide: function () {
    return {
      getMap: this.getMap,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    getMap(found) {
      var vm = this;
      function checkForMap() {
        if (vm.map) {
          found(vm.map);
        } else {
          setTimeout(checkForMap, 50);
        }
      }
      checkForMap();
    },
    initMap() {
      this.map = new ol.Map({
        renderer: mapConfig.renderOption,
        target: "olMap",
        controls: ol.control.defaults(mapConfig.controlOption),
        layers: [],
        view: new ol.View(mapConfig.viewOption),
      });
    },
    test() {
      var firstProjection =
        'PROJCS["NAD83 / Massachusetts Mainland",GEOGCS["NAD83",DATUM["North_American_Datum_1983",SPHEROID["GRS 1980",6378137,298.257222101,AUTHORITY["EPSG","7019"]],AUTHORITY["EPSG","6269"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.01745329251994328,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4269"]],UNIT["metre",1,AUTHORITY["EPSG","9001"]],PROJECTION["Lambert_Conformal_Conic_2SP"],PARAMETER["standard_parallel_1",42.68333333333333],PARAMETER["standard_parallel_2",41.71666666666667],PARAMETER["latitude_of_origin",41],PARAMETER["central_meridian",-71.5],PARAMETER["false_easting",200000],PARAMETER["false_northing",750000],AUTHORITY["EPSG","26986"],AXIS["X",EAST],AXIS["Y",NORTH]]';
      var secondProjection =
        "+proj=gnom +lat_0=90 +lon_0=0 +x_0=6300000 +y_0=6300000 +ellps=WGS84 +datum=WGS84 +units=m +no_defs";
      //I'm not going to redefine those two in latter examples.
      var a = proj4(firstProjection, secondProjection, [2, 5]);
      // [-2690666.2977344505, 3662659.885459918]
      console.log(a, "proj4");
    },
  },
};
</script>

<style>
</style>