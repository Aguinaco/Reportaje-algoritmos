// Configuración Three.js (código binario)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#fondo-binario') });

renderer.setSize(window.innerWidth, window.innerHeight);

// Crea el efecto de "código lloviendo"
const geometry = new THREE.BufferGeometry();
const vertices = [];
for (let i = 0; i < 5000; i++) {
  vertices.push(
    Math.random() * 2000 - 1000,
    Math.random() * 2000 - 1000,
    Math.random() * 2000 - 1000
  );
}
geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
const material = new THREE.PointsMaterial({ size: 1, color: 0x00ff00 });
const points = new THREE.Points(geometry, material);
scene.add(points);

camera.position.z = 500;

function animate() {
  requestAnimationFrame(animate);
  points.rotation.y += 0.001;
  renderer.render(scene, camera);
}
animate();

// Animaciones GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.to(".seccion", {
  scrollTrigger: {
    trigger: ".seccion",
    start: "top center",
    toggleActions: "play none none reverse"
  },
  opacity: 1,
  y: 0,
  duration: 1.5,
  stagger: 0.3
});

// Gráfico interactivo con Chart.js
const ctx = document.getElementById('miGrafico').getContext('2d');
const miGrafico = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Desinformación', 'Censura', 'Polarización', 'Innovación'],
    datasets: [{
      label: 'Impacto de los algoritmos',
      data: [60, 40, 70, 50],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});