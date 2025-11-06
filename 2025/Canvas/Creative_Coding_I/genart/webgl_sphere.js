// Ensure ThreeJS is in global scope for the 'examples/'
const canvasSketch = require("canvas-sketch");

global.THREE = require("three");

// Include any additional ThreeJS examples below
require("three/examples/js/controls/OrbitControls");

const random = require('canvas-sketch-util/random');

const settings = {
  // Make the loop animated
  animate: true,
  // Get a WebGL canvas rather than 2D
  context: "webgl",

  attributes: { antialias: true }
};

const sketch = ({ context }) => {
  // Create a renderer
  const renderer = new THREE.WebGLRenderer({
    // canvas: context.canvas
    context
  });

  // WebGL background color
  renderer.setClearColor("#000", 1);

  // Setup a camera
  const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 100);
  camera.position.set(2, 2, -4);
  camera.lookAt(new THREE.Vector3());

  // Setup camera controller
  const controls = new THREE.OrbitControls(camera, context.canvas);

  // Setup your scene
  const scene = new THREE.Scene();

  // Setup a geometry
  const geometry = new THREE.SphereGeometry(1, 32, 16);

  // Setup a material
  const material = new THREE.MeshBasicMaterial({
    color: "red",
    wireframe: true
  });

  const box = new THREE.BoxGeometry(1, 1, 1);
  const boxMaterial = new THREE.MeshBasicMaterial({ color: "blue" });
  
  // Setup a mesh with geometry + material
  for (let i = 0; i < 35; i++) {
    const boxMesh = new THREE.Mesh(box, boxMaterial);
    const mesh = new THREE.Mesh(geometry, material);
    // const clone = mesh.clone();
    // clone.position.x = i * 2 - 4;
    scene.add(boxMesh);
    mesh.scale.multiplyScalar(random.range(0.1, 0.5));
    scene.add(mesh);
    // console.log(mesh);
    mesh.position.x = i * 2 - 4;
    mesh.position.y = Math.sin(i * 0.5) * 1.5;
    mesh.position.set(
     random.range(-1, 1),
      // 0,
      // 0
      random.range(-1, 1),
      random.range(-1, 1)
    )
  }

  // draw each frame
  return {
    // Handle resize events here
    resize({ pixelRatio, viewportWidth, viewportHeight }) {
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(viewportWidth, viewportHeight, false);
      camera.aspect = viewportWidth / viewportHeight;
      // camera.updateProjectionMatrix();
      const zoom = 2;
      camera.left = -zoom * camera.aspect;
      camera.right = zoom * camera.aspect;
      camera.top = zoom;
      camera.bottom = -zoom;
      camera.updateProjectionMatrix();
    },
    // Update & render your scene here
    render({ time }) {
      // mesh.rotation.y = time * 0.5;
      controls.update();
      renderer.render(scene, camera);
    },
    // Dispose of events & renderer for cleaner hot-reloading
    unload() {
      controls.dispose();
      renderer.dispose();
    }
  };
};

canvasSketch(sketch, settings);
