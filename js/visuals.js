// Global Variables
var scene = null;
var camera = null;
var renderer = null;

var sphereArray = [];
var lineArray = [];
var birdArray = [];


// Functions
function createScene(color) {
    scene    = new THREE.Scene();
    camera   = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer( {alpha: true} );

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}


function createBox(x, y, z, width, height, depth, clr) {
    let geometry = new THREE.BoxGeometry(width, height, depth);
    let material = new THREE.MeshLambertMaterial({color: clr}); 
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    scene.add(mesh);
    return mesh;
}

function createSphere(x, y, z, radius, widthSegs, heightSegs, clr) {
    let geometry = new THREE.SphereGeometry(radius, widthSegs, heightSegs);
    let material = new THREE.MeshLambertMaterial({color: clr}); 
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    sphereArray.push(mesh);
    //scene.add(mesh);
}

// Creates 3d text
function createText(x, y, z, text) {
    let loader = new THREE.FontLoader();

    loader.load( 'three/fonts/optimer_bold.typeface.json', function ( font ) {

        let textGeom = new THREE.TextGeometry( text, {
            font: font,
            size: 8,
            height: .01,

        } );
        textGeom.textDepth = 1;
        let textMesh = new THREE.Mesh( textGeom, new THREE.MeshLambertMaterial({color: 0x00009a}) );
        textMesh.position.x = x;
        textMesh.position.y = y;
        textMesh.position.z = z;
        

        scene.add( textMesh );


    } );
}
