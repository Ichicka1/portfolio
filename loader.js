const loader = new THREE.GLTFLoader();
loader.load('scene.gltf', function(gltf) {
    scene.add(gltf.scene);
}, undefined, function(error) {
    console.error(error);
});
