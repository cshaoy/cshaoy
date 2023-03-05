<template>
  <div class="container" ref="container">

  </div>
</template>
<script setup>
import { reactive, ref, onMounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {vshader,fshader} from '../glsl';
// `setup` 是一个专门用于组合式 API 的特殊钩子函数

const state = reactive({ count: 0 })
let container = ref(null);
let scene = new THREE.Scene();
scene.background=new THREE.Color(0xff00ff)
let camera;
let renderer;
let Controls;
let clock=new THREE.Clock()
const uniforms = {
    time: { value: 1.0 },
    move:{value:{x:0.0,y:0.0}},
    resolution: { value: new THREE.Vector2(window.innerWidth,window.innerWidth) },
    color: { value: new THREE.Color(0xff00ff) }
  }
onMounted(() => {
  let rect = container.value.getBoundingClientRect()
  console.log(rect)
  camera = new THREE.PerspectiveCamera(75, rect.width / rect.height, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(rect.width, rect.height);
  container.value.appendChild(renderer.domElement);
  const geometry = new THREE.BoxGeometry(3, 3, 3);
 
  const material = new THREE.ShaderMaterial({

    uniforms: uniforms,

    vertexShader: vshader,

    fragmentShader: fshader

  });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  Controls = new OrbitControls(camera, renderer.domElement);
  camera.position.z = 5;
  camera.position.y = 15;
  camera.lookAt(new THREE.Vector3())
  const size = 100;
  const divisions = 100;
  const gridHelper = new THREE.GridHelper(size, divisions);
  scene.add(gridHelper);
  animate();
  window.addEventListener('mousemove', function (e) {

    uniforms.move.value.x=e.x;
    uniforms.move.value.y=e.y;
  })
  window.addEventListener('keydown', OnKeyBoard, false)
})
function OnKeyBoard(e) {
  console.log(e)
  switch (e.key) {
    case 'w':

      break;
    case 's':

      break;
    case 'd':

      break;
    case 'a':

      break;

    default:
      break;
  }
}
function animate() {
  requestAnimationFrame(animate);
  uniforms.time.value=clock.getElapsedTime();

  renderer.render(scene, camera);
}
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
