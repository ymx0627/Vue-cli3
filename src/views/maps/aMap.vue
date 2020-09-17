<template>
  <div id="map" ref="rootmap" class="map"></div>
</template>

<script>
import mapConfig from "./config/map.cfg";
export default {
  data: function () {
    return {
      map: null,
      pointSimplifierIns: null,
    };
  },
  methods: {
    initMap() {
      let mapContainer = this.$refs.rootmap;
      // 地图
      this.map = new AMap.Map(mapContainer, {
        zoom: 4, //级别
        center: mapConfig.viewOption.center, //中心点坐标
        // zooms: [mapConfig.viewOption.minZoom, mapConfig.viewOption.maxZoom],
        zooms: [1, mapConfig.viewOption.maxZoom],
        mapStyle: mapConfig.mapStyle,
        resizeEnable: true,
        viewMode: "2D", // 默认使用 2D 模式，如果希望使用带有俯仰角的 3D 模式，请设置 viewMode: '3D'
        animateEnable: false,
        showLabel: true,
        expandZoomRange: true,
      });

      this.addBlinkMarker();
    },
    addBlinkMarker() {
      AMapUI.load(["ui/misc/PointSimplifier", "lib/$"], this.initMarker);
    },
    initMarker(PointSimplifier, $) {
      let colors = [
        "#0cc2f2",
        "#4fd2b1",
        "#90e36f",
        "#ffe700",
        "#ff9e00",
        "#ff6700",
        "#ff1800",
      ];
      if (!PointSimplifier.supportCanvas) {
        alert("当前环境不支持 Canvas！");
        return;
      } else {
        console.log(PointSimplifier.supportCanvas);
      }
      this.pointSimplifierIns = new PointSimplifier({
        zIndex: 115,
        autoSetFitView: false,
        map: this.map, //所属的地图实例

        getPosition: function (item) {
          if (!item) {
            return null;
          }
          return [item.position[0], item.position[1]];
        },
        getHoverTitle: function (dataItem, idx) {
          return "序号: " + idx;
        },
        //使用GroupStyleRender
        renderConstructor: PointSimplifier.Render.Canvas.GroupStyleRender,
        renderOptions: {
          eventSupport: false, //禁止事件,对性能更友好
          //点的样式
          pointStyle: {
            fillStyle: null,
            width: 5,
            height: 5,
          },
          topNAreaStyle: null,
          getGroupId: function (item, idx) {
            //随机返回一个组ID
            return Math.ceil(colors.length * Math.random());
          },
          groupStyleOptions: function (gid) {
            //随机设置大小
            var radius = 2 + 10 * Math.random();

            return {
              pointStyle:
                radius > 0
                  ? {
                      content: function (ctx, x, y, width, height) {
                        var p = {
                          x: x + width / 2,
                          y: y + height / 2,
                          radius: radius,
                        };

                        ctx.beginPath();
                        var gradient = ctx.createRadialGradient(
                          p.x,
                          p.y,
                          0,
                          p.x,
                          p.y,
                          p.radius
                        );
                        gradient.addColorStop(0, "rgba(7,120,249,0.8)");
                        gradient.addColorStop(1, "rgba(7,120,249,0.1)");
                        ctx.fillStyle = gradient;
                        ctx.arc(p.x, p.y, p.radius, Math.PI * 2, false);
                        ctx.fill();
                      },

                      //fillStyle: colors[gid % colors.length],
                      width: radius * 2,
                      height: radius * 2,
                    }
                  : null,
              pointHardcoreStyle: {
                width: radius * 2 + 3,
                height: radius * 2 + 3,
              },
            };
          },
        },
      });

      let vm = this;
      setInterval(() => {
        vm.pointSimplifierIns.render();
        // console.log("aaa");
      }, 1000);

      var data = [];
      data.push({
        position: [113.864691, 22.942327],
      });
      data.push({
        position: [120.412618, 36.382612],
      });
      data.push({
        position: [113.370643, 22.938827],
      });
      data.push({
        position: [113.001181, 23.120518],
      });
      data.push({
        position: [112.985037, 23.15046],
      });
      this.pointSimplifierIns.setData(data);
    },
  },
  mounted() {
    this.initMap();
  },
};
</script>

<style>
.map {
  width: 100%;
  height: calc(100vh - 120px);
}
</style>