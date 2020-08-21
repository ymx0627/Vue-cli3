<template></template>

<script>
import ol from "ol";
import mapConfig from "./map.cfg";
export default {
  name: "coverLayer",
  inject: ["getMap"],
  data() {
    return {
      baseMiniLayer: null,
      vecMiniSrc: null,
      imgMiniSrc: null,
      terMiniSrc: null,
      baseLayer: null,
      baseTextLayer: null,
      vecSrc: null,
      imgSrc: null,
      terSrc: null,
      imgTextSrc: null,
    };
  },
  created: function () {
    var vm = this;
    vm.getMap(function (map) {
      vm.initBaseLayer(map);
      vm.initBaseMiniLayer(map);
    });
  },
  methods: {
    initBaseLayer(map) {
      this.baseLayer = this.generateTileLayer("baseLayer");
      this.baseTextLayer = this.generateTileLayer("baseTextLayer");
      this.vecSrc = this.generateTileSrc(mapConfig.chinaVecOption);
      this.imgSrc = this.generateTileSrc(mapConfig.chinaImgOption);
      this.imgTextSrc = this.generateTileSrc(mapConfig.chinaImgTextOption);

      this.terSrc = this.generateTileSrc(mapConfig.chinaTerOption);
      this.baseLayer.setSource(this.terSrc);
      this.baseLayer.setZIndex(0);
      map.addLayer(this.baseLayer);

      this.baseTextLayer.setSource(this.imgTextSrc);
      this.baseTextLayer.setZIndex(2);
      map.addLayer(this.baseTextLayer);
      this.baseTextLayer.setVisible(false);
    },
    initBaseMiniLayer(map) {
      this.baseMiniLayer = this.generateTileLayer("baseMiniLayer");
      this.vecMiniSrc = this.generateTileSrc(mapConfig.qgjVecOption);
      this.imgMiniSrc = this.generateTileSrc(mapConfig.qgjImgOption);
      this.terMiniSrc = this.generateTileSrc(mapConfig.qgjTerOption);
      this.baseMiniLayer.setSource(this.terMiniSrc);
      this.baseMiniLayer.setZIndex(1);
      map.addLayer(this.baseMiniLayer);
    },
    generateTileLayer(id) {
      var layer = new ol.layer.Tile({
        minResolution: 0.000001341104507446289,
        maxResolution: 1.40625,
        id: id,
      });
      return layer;
    },
    generateTileSrc(params) {
      var source = new ol.source.WMTS({
        crossOrigin: "anonymous",
        name: params.name,
        url: params.url,
        layer: params.layer,
        style: params.style,
        matrixSet: params.matrixSet,
        format: params.format,
        wrapX: true,
        tileGrid: new ol.tilegrid.WMTS({
          origin: ol.extent.getTopLeft(mapConfig.projectionExtent),
          resolutions: mapConfig.res.slice(0, 20),
          matrixIds: mapConfig.matrixIds,
        }),
      });
      return source;
    },
    changeBaseLayer(Typenum) {
      // 3、2、1  矢量、影像、地形
      switch (Typenum) {
        // 矢量
        case "3":
          this.baseLayer.setSource(this.vecSrc);
          this.baseMiniLayer.setSource(this.vecMiniSrc);
          this.baseMiniLayer.setVisible(true);
          this.baseTextLayer.setVisible(false);
          break;
        // 影像
        case "2":
          this.baseLayer.setSource(this.imgSrc);
          this.baseMiniLayer.setSource(this.imgMiniSrc);
          this.baseMiniLayer.setVisible(true);
          this.baseTextLayer.setVisible(true);
          break;
        // 地形
        case "1":
          this.baseLayer.setSource(this.terSrc);
          this.baseMiniLayer.setVisible(false);
          this.baseTextLayer.setVisible(true);
          break;
        default:
          this.baseLayer.setSource(this.vecSrc);
          this.baseMiniLayer.setSource(this.vecMiniSrc);
          this.baseMiniLayer.setVisible(true);
          break;
      }
    },
  },
};
</script>