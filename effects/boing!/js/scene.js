// RENDERER
    var renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize(rendererW, rendererH);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    document.body.appendChild( renderer.domElement );

//SCENE
    var scene = new THREE.Scene();

// CAMERAS
    var camera = new THREE.PerspectiveCamera( 35, rendererW / rendererH, 0.1, 50*multiplier );
    camera.position.x = 0*multiplier; camera.position.y = 2*multiplier; camera.position.z = 10*multiplier;
    lookAt = new THREE.Vector3(0, 0, 0);
    camera.castShadow = true;
    camera.lookAt(lookAt);
    scene.add(camera);

// LIGHTS
    intensity = 1;
    lightA = new THREE.AmbientLight( 0xffffff, 0.9 );
    scene.add(lightA);
    if (realisticLighting==true) {
        lightP = new THREE.PointLight( 0xFFFFFF, 1, 60*multiplier );
        lightP.position.set(0, 2*multiplier, 6*multiplier);
        lightP.lookAt(0,0,0);
        lightP.castShadow=true;
        lightP.shadow.camera.far = 60 * multiplier;
        lightP.shadow.mapSize.width = 1024;
        lightP.shadow.mapSize.height = 1024;
        scene.add(lightP);
    }

// GEOMETRIES
    // box
    boxGeometry = new THREE.BoxGeometry( 1*multiplier, 1*multiplier, 1*multiplier );
    boxMaterial = new THREE.MeshStandardMaterial( { color: 0xFFFFFF, shininess: 200, specular: 0x111111, reflectivity: 0.5 } );
    var boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.castShadow=true
    boxMesh.position.y = 0.2*multiplier;
    scene.add(boxMesh);