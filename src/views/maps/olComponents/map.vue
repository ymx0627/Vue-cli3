<template>
  <div id="olMap">
    <slot></slot>
  </div>
</template>

<script>
import ol from "ol";
import mapConfig from "./map.cfg";
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
  },
};
</script>

<style>
</style>