<template>
  <div>
    <DCMap class="map">
      <DCBaseLayer></DCBaseLayer>
    </DCMap>
  </div>
</template>

<script>
import DCMap from "./olComponents/map";
import DCBaseLayer from "./olComponents/baselayer";
export default {
  name: "olMap",
  components: {
    DCMap,
    DCBaseLayer,
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style>
.map {
  width: 100%;
  height: calc(100vh - 120px);
}
</style>