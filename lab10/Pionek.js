let canvas = document.getElementById("glcanvas");

const scene = new THREE.Scene({ color: 0xfff });

const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

var light;  // A light shining from the direction of the camera; moves with the camera.
light = new THREE.DirectionalLight();
light.position.set(-10, -2, 1);
camera.add(light);
scene.add(camera);

var material = new THREE.MeshPhongMaterial({
    color: "white",
    shininess: 8,
    reflectivity: 1,
    shading: THREE.FlatShading

});


var dot = new THREE.Mesh(
    new THREE.CylinderGeometry(0.5, 0.5, 0.5, 100),
    material
);
dot.position.y = 5.5;
scene.add(dot);

var head1 = new THREE.Curve();
head1.getPoint = function(t) {

    return new THREE.Vector2(Math.cos(t * 1.5), t / 2);
}
var head2 = new THREE.Curve();
head2.getPoint = function(t) {

    return new THREE.Vector2(Math.sin(-t * 1.5), t * 1.3);
}
var pointsHead1 = head1.getPoints(256);
var geometryHead1 = new THREE.LatheGeometry(pointsHead1, 150);
var pawnHead1 = new THREE.Mesh(geometryHead1, material);
pawnHead1.position.y = 5;
scene.add(pawnHead1);

var pointsHead2 = head2.getPoints(256);
var geometryHead2 = new THREE.LatheGeometry(pointsHead2, 150);
var pawnHead2 = new THREE.Mesh(geometryHead2, material);
pawnHead2.position.y = 3.7;
scene.add(pawnHead2);

var geometry = new THREE.CylinderGeometry(0.5, 0.5, 0.3, 100);
geometry.computeVertexNormals();
var cylinder = new THREE.Mesh(geometry, material);
cylinder.position.y = 3.7;
scene.add(cylinder);

var geometry = new THREE.CylinderGeometry(0.7, 0.7, 0.2, 100);
geometry.computeVertexNormals();
var cylinder = new THREE.Mesh(geometry, material);
cylinder.position.y = 3.5;
scene.add(cylinder);
var geometry = new THREE.CylinderGeometry(1, 1, 0.2, 100);
geometry.computeVertexNormals();
var cylinder = new THREE.Mesh(geometry, material);
cylinder.position.y = 3.3;
scene.add(cylinder);

var body = new THREE.Curve();
body.getPoint = function(t) {

    return new THREE.Vector2(t * t + 0.5, t * 6);
}
var points = body.getPoints(256);
var geometry = new THREE.LatheGeometry(points, 150);
var pawnBody = new THREE.Mesh(geometry, material);
pawnBody.scale.set(1, -1, 1);
pawnBody.position.y = 3.3;
scene.add(pawnBody);

var geometry = new THREE.CylinderGeometry(2, 2, 0.5, 100);
geometry.computeVertexNormals();
var cylinder = new THREE.Mesh(geometry, material);
cylinder.position.y = -2.7;
scene.add(cylinder);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

camera.position.z = 7;


animate();