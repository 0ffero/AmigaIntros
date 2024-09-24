function animate() {
    requestAnimationFrame(animate);
    sceneMain.renderer.render(sceneMain.scene, sceneMain.camera);
    mainLoop();
}

function mainLoop() {
    sceneMain.boxMesh.rotation.y+=0.4*(Math.PI/180);
    sceneMain.boxMesh.rotation.x-=0.2*(Math.PI/180);
    sceneMain.boxMesh.rotation.z+=0.3*(Math.PI/180);
}