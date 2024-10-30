const loader = new THREE.GLTFLoader();
loader.load('path/to/your_model.glb', function(gltf) {
    scene.add(gltf.scene);
}, undefined, function(error) {
    console.error(error);
});
