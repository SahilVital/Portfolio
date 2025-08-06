      document.getElementById("toggleExpertiseBtn").addEventListener("click", () => {
  const exp = document.getElementById("expertiseSection");
  exp.classList.toggle("hidden");
});

document.getElementById("toggleWorkBtn").addEventListener("click", () => {
  const work = document.getElementById("workSection");
  work.classList.toggle("hidden");
});

// Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true }); // Transparent background
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.querySelector(".bg-animation").appendChild(renderer.domElement);

// Lighting
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

// Geometry: cubes like in your reference
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0xff5500 });
const cube1 = new THREE.Mesh(geometry, material);
const cube2 = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0x00ffff }));
cube1.position.set(0, 0, -3);
cube2.position.set(2, 1, -4);
scene.add(cube1);
scene.add(cube2);

// Camera position
camera.position.z = 5;

// Animate
function animate() {
  requestAnimationFrame(animate);
  cube1.rotation.x += 0.01;
  cube1.rotation.y += 0.01;
  cube2.rotation.y -= 0.008;
  cube2.rotation.x -= 0.008;
  renderer.render(scene, camera);
}
animate();

// Responsiveness
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
