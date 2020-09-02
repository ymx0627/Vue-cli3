<template>
  <div>
    <canvas id="glcanvas" width="640" height="480"></canvas>
  </div>
</template>

<script>
import Tool from "./webgl/tools";
export default {
  name: "webgl",
  data() {
    return {};
  },
  mounted() {
    //顶点着色器
    let VSHADER_SOURCE =
      "void main() {\n" +
      "  gl_Position = vec4(0.5, 0.5, 0.0, 1.0);\n" + // 设置点的位置
      "  gl_PointSize = 10.0;\n" + // 设置点的大小
      "}\n";
    // 片元着色器
    let FSHADER_SOURCE =
      "void main() {\n" +
      "  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n" + // 设置点的颜色
      "}\n";
    //获取上下文对象
    const canvas = document.querySelector("#glcanvas");
    window.οnresize = resizeCanvas;
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    const gl = canvas.getContext("webgl");
    //检测WebGL支持
    if (!gl) {
      console.error("浏览器不支持WebGL");
      return;
    }
    if (!Tool.initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
      console.error("初始化着色器失败");
      return;
    }
    //设置背景色
    gl.clearColor(0.0, 0.0, 0.0, 1);
    //设置缓冲区颜色
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, 1);
  },
  methods: {},
};
</script>

<style>
/* #glcanvas {
  width: 100%;
  height: calc(100vh - 120px);
} */
</style>