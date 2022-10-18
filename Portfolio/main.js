import './style.css'
import * as THREE from 'three';
import{ OrbitControls } from 'three/examples/jsm/controls/OrbitControls';  // mouse controls
//import { EffectComposer } from "/node_modules/three/examples/jsm/postprocessing/EffectComposer.js";
//import { UnrealBloomPass } from "/node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js";
//import { RenderPass } from "/node_modules/three/examples/jsm/postprocessing/RenderPass.js";
// 3D
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
scene.add(camera);

const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement );
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

/* bloom
const renderBloom = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(
new THREE.Vector2(window.innerWidth, window.innerHeight),
1.5,
0.4,
0.85
);
bloomPass.threshold = 0;
bloomPass.strength = 100;
bloomPass.radius = 0;
const bloomComposer = new EffectComposer(renderer);
bloomComposer.setSize(window.innerWidth, window.innerHeight);
bloomComposer.renderToScreen = true;
bloomComposer.addPass(renderBloom);
bloomComposer.addPass(bloomPass);
*/
// lights
const ptLight = new THREE.PointLight(0xffffff, 1, 100);
ptLight.castShadow = true;
ptLight.position.set(20, 10, 40);
const ambLight = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ptLight, ambLight);

/*shadows
ptLight.shadow.mapSize.width = 512;
ptLight.shadow.mapSize.height = 512;
ptLight.shadow.mapSize.near = 0.5;
ptLight.shadow.mapSize.far = 500;
*/
const lightHelper = new THREE.PointLightHelper(ptLight);
scene.add(lightHelper);

const controls = new OrbitControls(camera, renderer.domElement);

/* SHADOW HELPER
const helper = new THREE.CameraHelper(light.shadow.camera);
scene.add(helper);*/

// textures
const cubeTexture = new THREE.TextureLoader().load('https://repo.github.io/Portfolio/imgs/walter.jpg');

 /*obj
const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const cubeMaterial = new THREE.MeshStandardMaterial({ map:cubeTexture });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);


//cube.castShadow = true;
//cube.recieveShadow = false;

scene.add(cube);
cube.position.x = 0;
cube.position.y = -1;
camera.position.z = 2.5; // take out of middle
*/

function starGen(){
const geometry = new THREE.SphereGeometry(0.25, 15, 15);
const material = new THREE.MeshBasicMaterial({ color: 0xFAF5BE });
const star = new THREE.Mesh(geometry, material);

const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(250, 500));
star.position.set(x, y, z);
star.layers.set(1);
scene.add(star);
}

Array(700).fill().forEach(starGen);

//bg
const backgroundPic = new THREE.TextureLoader().load('imgs/gradient.jpg'); // pic bg
scene.background = backgroundPic;
//scene.background = new THREE.Color(0x040E14); // solid color

// camera for scroll
function moveCamera(){
const t = document.body.getBoundingClientRect().top;

camera.position.z = t * -0.01;
camera.position.y = t * -0.0002;
camera.position.x = t * -0.0002;
}
document.body.onscroll = moveCamera;


function animate() {
    requestAnimationFrame(animate);
   // cube.rotation.y += 0.01;
    //controls.update();
   camera.layers.set(1);
   // bloomComposer.render();
    renderer.render(scene, camera);
}

animate();


