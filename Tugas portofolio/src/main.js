import * as THREE from 'three';

// 1. Membuat scene
const scene = new THREE.Scene();

const loader = new THREE.TextureLoader();
const tekBesi = loader.load('asset/download.jpg');
tekBesi.colorSpace = THREE.SRGBColorSpace; // Agar warna gambar akurat

// Tambahkan 'new' dan gunakan huruf kecil 'map'
const matBesi = new THREE.MeshStandardMaterial({
    map: tekBesi,
    wireframe :true
});

// 2. Membuat camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// 3. Membuat renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4. Membuat cahaya (Wajib untuk MeshStandardMaterial)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // Cahaya merata
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Cahaya terarah
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// 5. Membuat objek kubus / papan
const geometry = new THREE.BoxGeometry(5, 3, 0.08);

// 6. Menggabungkan bentuk dan material
const cube = new THREE.Mesh(geometry, matBesi);
scene.add(cube);

// 7. Mengatur posisi camera
camera.position.z = 5;

// 8. Animasi
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.y += 0.06;

    renderer.render(scene, camera);
}

animate();