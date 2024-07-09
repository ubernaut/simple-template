import * as THREE from "three";
import { VRButton } from "three/examples/jsm/webxr/VRButton.js";
import { BoxLineGeometry } from "three/examples/jsm/geometries/BoxLineGeometry.js";

// window.addEventListener("load", () => {
//   registerSW();
// });

//fire up three.js

let camera, scene, renderer, geometry, material, cube;
let mesh;

init();

function init() {
  camera = new THREE.PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    0.1,
    100,
  );
  camera.position.z = 2;

  scene = new THREE.Scene();

  geometry = new THREE.BoxGeometry(1, 1, 1);
  material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animate);
  renderer.xr.enabled = true
  const button = VRButton.createButton(renderer);
  document.body.appendChild(button);
  document.body.appendChild(renderer.domElement);

  //

  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  cube.rotation.x += 0.005;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

// // Register the Service Worker
// async function registerSW() {
//   if ("serviceWorker" in navigator) {
//     try {
//       const sw = navigator.serviceWorker;
//       await sw.register("js/serviceworker.js");
//     } catch (e) {
//       console.log("SW registration failed");
//       console.log(e);
//     }
//   }
// }
