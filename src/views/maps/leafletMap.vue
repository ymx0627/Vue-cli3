<template>
  <div>
    <div id="lMap" class="map"></div>
  </div>
</template>

<script>
import mapConfig from "./olComponents/map.cfg";
export default {
  name: "leafletMap",
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    this.map = L.map("lMap").setView(
      [mapConfig.viewOption.center[1], mapConfig.viewOption.center[0]],
      mapConfig.viewOption.zoom
    );
    // 加载谷歌地图
    // L.tileLayer(
    //   "http://mt0.google.cn/vt/lyrs=m@160000000&hl=zh-CN&gl=CN&src=app&y={y}&x={x}&z={z}&s=Ga",
    //   {
    //     attribution:
    //       '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    //   }
    // ).addTo(this.map);
    // 加载高德地图
    L.tileLayer(
      "http://webrd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
      {
        subdomains: "1234",
      }
    ).addTo(this.map);
  },
};
</script>

<style>
.map {
  width: 100%;
  height: calc(100vh - 120px);
}
</style>