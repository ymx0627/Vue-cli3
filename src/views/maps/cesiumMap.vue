<template>
  <div id="cesiumContainer"></div>
</template>

<script>
import * as Cesium from "cesium/Cesium";
import widgets from "cesium/Widgets/widgets.css";
export default {
  name: "CesiumScene",
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {},
  methods: {
    init() {
      // cesium 秘钥
      Cesium.Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4NDM5YTI0OS1mN2Q4LTRhYTktYjg0NC03NjQzNjVhYWE4NjciLCJpZCI6NDc5Niwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0MTY0MDU4NH0.gQH2NwIdRglDCXhydlTKUDDrAPDwJKccZ0wleM05uIM";
      var viewer = new Cesium.Viewer("cesiumContainer");
    },
  },
};
</script>

<style  scoped>
#cesiumContainer {
  /* width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden; */
  width: 100%;
  height: calc(100vh - 120px);
}
</style>