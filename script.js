function renderCar(model, container, x, y, z, intensity) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth/container.clientHeight,
        0.01,
        1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);

    container.appendChild(renderer.domElement);

    const loader = new THREE.GLTFLoader();

    let obj;
    loader.load(model, function (gltf) {
        obj = gltf.scene;
        scene.add(obj);
    });
    scene.background = new THREE.Color(0xeeeded);
    const light = new THREE.HemisphereLight(0xffffff, 0x00000, intensity);
    scene.add(light);
    camera.position.set(x, y, z);
    function animate() {
        requestAnimationFrame(animate);
        if (obj) {
            obj.rotation.y += 0.005;
        }
        renderer.render(scene, camera);
    }
    animate();
}

const carModels = {
    sakuraBurstModel: 'Sakura Burst/scene.gltf',
    venenoModel: 'Veneno/scene.gltf',
    shiroyukiModel: 'Shiroyuki/scene.gltf',
    blackHatModel: 'BlackHat/scene.gltf',
    mariaRoseModel: 'Maria Rose/scene.gltf',
    goldenWaveModel: 'GoldenWave/scene.gltf'
};

const sakuraBurst = document.querySelector('.sakura-burst');
const veneno = document.querySelector('.veneno');
const shiroyuki = document.querySelector('.shiroyuki');
const blackHat = document.querySelector('.blackhat');
const mariaRose = document.querySelector('.maria-rose');
const goldenWave = document.querySelector('.goldenwave');

renderCar(carModels.sakuraBurstModel, sakuraBurst, 0, 0.5, 3.5, 2);
renderCar(carModels.venenoModel, veneno, 1, 1.5, 13.0, 14);
renderCar(carModels.shiroyukiModel, shiroyuki, 0, 0.5, 3.4, 20);
renderCar(carModels.blackHatModel, blackHat, 0, 1, 4.0, 50);
renderCar(carModels.mariaRoseModel, mariaRose, 0, 0.5, 4.3, 40);
renderCar(carModels.goldenWaveModel, goldenWave, 0, 0, 3.0, 10);
