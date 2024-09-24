class scene {
    constructor() {
        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.textureLoader = new THREE.TextureLoader();
        this.camera = new THREE.PerspectiveCamera( globals.fov, globals.rendererW / globals.rendererH, 0.1, 50*globals.multiplier );
        this.scene = new THREE.Scene();

        this._initRenderer();
        this._loadTextures();
        this._initCameras();
        this._initLights();
        this._initActors();
    }
    
    _initRenderer = function() {
        this.renderer.setSize(globals.rendererW, globals.rendererH);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.gammaInput = true;
        this.renderer.gammaOutput = true;
        document.body.appendChild( this.renderer.domElement );
    }

    _loadTextures = function() {
        /* boxTexture = textureLoader.load("textures/box.png");
        boxTexture.anisotropy = 4;
        boxTexture.wrapS = THREE.RepeatWrapping;
        boxTexture.wrapT = THREE.RepeatWrapping;
        boxTexture.repeat.set( 10, 5 ); */
    }

    _initActors = function() {
        // EXAMPLE MESH
        this.boxGeometry = new THREE.BoxGeometry( 1*globals.multiplier, 1*globals.multiplier, 1*globals.multiplier );
        this.boxMaterial = new THREE.MeshStandardMaterial( { color: 0xFFFFFF, shininess: 200, specular: 0x111111, reflectivity: 0.5, } ); // map: boxTexture, 
        this.boxMesh = new THREE.Mesh(this.boxGeometry, this.boxMaterial);
        this.boxMesh.castShadow=true
        this.boxMesh.rotation.y = 45 * (Math.PI/180);

        this.scene.add(this.boxMesh);
    }

    _initCameras = function() {
        this.camera.position.x = 0*globals.multiplier; this.camera.position.y = 0*globals.multiplier; this.camera.position.z = 5*globals.multiplier;
        var lookAt = new THREE.Vector3(0, 0*globals.multiplier, 1*globals.multiplier);
        this.camera.castShadow = true;
        this.camera.lookAt(lookAt);
        this.scene.add(this.camera);
    }

    _initLights = function() {
        this.ambientIntensity = 0.9;
        this.lightA = new THREE.AmbientLight( 0xffffff, this.ambientIntensity );
        this.scene.add(this.lightA);
        if (globals.realisticLighting==true) {
            this.lightP = new THREE.PointLight( 0xFFFFFF, this.ambientIntensity, 10*globals.multiplier );
            this.lightP.position.set(0, 2*globals.multiplier, 6*globals.multiplier);
            this.lightP.lookAt(0,0,0);
            this.lightP.castShadow=true;
            this.lightP.shadow.camera.far = 60 * globals.multiplier;
            this.lightP.shadow.mapSize.width = 1024;
            this.lightP.shadow.mapSize.height = 1024;
            this.scene.add(this.lightP);
        }
    }
}