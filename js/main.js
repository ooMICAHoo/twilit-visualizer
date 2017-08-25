// My First Three.js scene

// setup audio
audioSetup();

// Create Scene
createScene();

// Create Spheres and lines
for (let i = -40; i < 40; i++) {
    let x = i * 3;
    let z = -90;
    createSphere(x, 0, z, 1.5, 32, 32, 0xffffff);
    let lineMoving = createBox(x, 0, z, 2, 1, 1, 0x00009a);
    lineArray.push(lineMoving);
    let lineStatic = createBox(x, -2, z, 2, 4, 1, 0x00009a);
}

// Birds
for (let i = 0; i < 5; i++) {
    let bird = createBox(-1050 + i * 4, 82 - i, -90, 1, 1, 1, 0x000000);
    birdArray.push(bird);
}

// Text
createText(-120, -18, -90, 't w i l i t');
createText(70, -18, -90, 's &  p & a')


// Create Light
var light = new THREE.PointLight(0xffffff, 1.2);
light.position.set(30, 0, 6);
scene.add(light);

// move the camera back
camera.position.z = 10;
camera.position.y = 35;

var timeLast = Date.now();
var timeStart = Date.now();
render();

function render() {
    requestAnimationFrame(render);
    analyser.getByteFrequencyData(frequencyData);
    if (playPauseButton.innerHTML == "pause") {
        if (frequencyData[0] > 150) {
            console.log("Low: 50");
        }

        for (let i = 0; i < sphereArray.length; i++) {
            //let mesh = sphereArray[i];
           // mesh.position.y = frequencyData[i * 4] / 10;

            let lineMesh = lineArray[i];
            lineMesh.scale.y = frequencyData[i * 2] / 20;
            lineMesh.position.y = frequencyData[i * 2] / 40 - 1;
        }

        timeStart = Date.now();
        let timeElapsed = timeStart - timeLast;

        for (let i = 0; i < birdArray.length; i++) {
            let bird = birdArray[i];
            bird.position.x += .38;
            let test = Math.random();
            if (test > .66) bird.position.y += .3;
            else if (test < .33) bird.position.y += -.3;

            if (bird.position.x > 200) {
                bird.position.x = -1000;
                bird.position.y = 82;
            }
        }
        timeLast = Date.now();
    }
    renderer.render(scene, camera);
}