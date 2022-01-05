import './style.css'
import * as THREE from 'three'
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
// const geometry = new THREE.BoxGeometry(15, 0.2, 15)
// const material = new THREE.MeshBasicMaterial({ color: 0x807070 })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)
// mesh.position.set(0,0,0)

// Light
const light = new THREE.AmbientLight( 0x949494, 0.8 ); // soft white light
scene.add( light );
const pointLight = new THREE.PointLight(0x606060, 2)
pointLight.position.set(1, 30, 20)
scene.add(pointLight)
const pointLight2 = new THREE.PointLight(0x808080)
pointLight2.position.set(-140, 20, -85)
scene.add(pointLight2)


// fbx loader
var fbxLoader = new FBXLoader()

var mixer, action, globalObject;
let modelReady = false;

fbxLoader.load(
    'stretch.fbx',
    function ( object ) {

        object.material = new THREE.MeshLambertMaterial({color: 0xffffff, vertexColors: THREE.FaceColors});

        object.position.set(0, -4, 0)
        object.scale.set(12, 12, 12)
        globalObject = object.position;

        mixer = new THREE.AnimationMixer(object);
        action = mixer.clipAction(object.animations[0])
        action.play()

        scene.add( object );

        modelReady = true;
	},
    function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	function ( error ) {

		console.log( error );

	},
)

// helper
const helper = new THREE.AxesHelper(3)
scene.add(helper)

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.001, 1000000)
camera.position.z = 25
camera.position.y = 10
scene.add(camera)

// controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.maxPolarAngle = 2
controls.maxDistance = 30
controls.minDistance = 10
controls.enablePan = false
controls.target.set(0,8,0)
controls.autoRotate = true

// resize event
window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.render()
}

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)

const clock = new THREE.Clock()

// animation
const tick = () => {

    if (modelReady) mixer.update(clock.getDelta())


    controls.update()

    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()