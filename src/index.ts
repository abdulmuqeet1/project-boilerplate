import * as THREE from 'three';

const canvasElement: HTMLElement | null = document.querySelector('.webgl');

console.log('canvasElement: ', canvasElement);

const size = {
    width: window.innerWidth ?? 800,
    height: window.innerHeight ?? 600,
};

const scene = new THREE.Scene();

//* mesh
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x021a0f01});
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(boxMesh);

//* camera
const camera = new THREE.PerspectiveCamera(
    75,
    size.width / size.height,
    1,
    100,
);

camera.position.z = 60;

// //* renderer
// if (canvasElement) {

// }

const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement ?? document.createElement('canvas#webgl'),
});

renderer.setSize(size.width, size.height);
