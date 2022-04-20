import '@styles/main.scss';
import * as THREE from 'three';
import * as dat from 'dat.gui';

const canvasElement: HTMLElement | null = document.querySelector('.webgl');

const size = {
    width: window.innerWidth,
    height: window.innerHeight,
};

const gui = new dat.GUI();
const scene = new THREE.Scene();

//* mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0xff0000});
const boxMesh = new THREE.Mesh(geometry, material);

scene.add(boxMesh);

//* camera
const camera = new THREE.PerspectiveCamera(
    75,
    size.width / size.height,
    0.1,
    100,
);

camera.position.z = 4;

//* axis helper
const axisHelper = new THREE.AxesHelper(2);
scene.add(axisHelper);

//* renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement ?? document.createElement('canvas.webgl'),
});

renderer.setSize(size.width, size.height);
renderer.render(scene, camera);
