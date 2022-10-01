import './style.css'
import * as THREE from 'three';
import{OrbitControls} from 'three/examples/jsm/controls/OrbitControls';  // mouse controls


//time

// 3D
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement );
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// lights
const ptLight = new THREE.PointLight(0xffffff, 1, 100);
ptLight.castShadow = true;
ptLight.position.set(20, 10, 40);
const ambLight = new THREE.AmbientLight(0x404040);
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
const cubeTexture = new THREE.TextureLoader().load('cubetexture.jpg');

/* obj
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

//bg
const background = new THREE.TextureLoader().load('gradient.jpg');
scene.background = background;


function animate() {
    requestAnimationFrame(animate);
   // cube.rotation.y += 0.01;
    //controls.update();

    renderer.render(scene, camera);
}

animate();


