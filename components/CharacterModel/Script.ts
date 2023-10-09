import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

//Global variables
let currentRef: any = null

//Scene, camera, renderer
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(25, 0.1, 0.1, 100)
camera.position.set(0, 0, 6)

scene.add(camera)

camera.lookAt(new THREE.Vector3())

const renderer = new THREE.WebGLRenderer()
renderer.outputEncoding = THREE.sRGBEncoding
// renderer.shadowMap.enabled = true
// renderer.shadowMap.type = THREE.PCFShadowMap
renderer.physicallyCorrectLights = true
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 0.05
renderer.setSize(100, 100)
// THREE.NoToneMapping
// THREE.LinearToneMapping
// THREE.ReinhardToneMapping
// THREE.CineonToneMapping
// THREE.ACESFilmicToneMapping

//OrbitControls
const orbitControls = new OrbitControls(camera, renderer.domElement)
orbitControls.enableDamping = true
orbitControls.minPolarAngle = 1
orbitControls.maxPolarAngle = 1.5
orbitControls.target.set(0.01, 1.2, 0)

//Resize canvas
const resize = () => {
  renderer.setSize(currentRef.clientWidth, currentRef.clientHeight)
  camera.aspect = currentRef.clientWidth / currentRef.clientHeight
  camera.updateProjectionMatrix()
}
window.addEventListener('resize', resize)

//Animate the scene
const animate = () => {
  orbitControls.update()
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}
animate()

//load model 3d
const loadingManager = new THREE.LoadingManager(
  () => {
    // console.log("Todo cargado")
  },
  (itemUrl, itemsToLoad, itemsLoaded) => {
    // console.log((itemsToLoad/itemsLoaded )*100)
  },
  () => {}
)

const dracoLoader1 = new DRACOLoader()
dracoLoader1.setDecoderPath('../.././draco/')
const gltfLoader1 = new GLTFLoader(loadingManager)
gltfLoader1.setDRACOLoader(dracoLoader1)
gltfLoader1.load(
  '../.././draco/models/characters/characterR1.gltf',
  (gltf1) => {
    while (gltf1.scene.children.length) {
      scene.add(gltf1.scene.children[0])
    }
    // castAndReceiveShadows()
  },
  () => {
    // console.log("Progress")
  },
  () => {
    // console.log("Error")
  }
)
//cast and receive shadows
const castAndReceiveShadows = () => {
  scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      // child.material.envMapIntensity = sceneParams.envMapIntensity
      // child.castShadow = true
      // child.receiveShadow = true
    }
  })
}

//Lights
const light1 = new THREE.DirectionalLight(0xffffff, 55)
light1.position.set(0, 5, 5)
// light1.castShadow = true
// light1.shadow.mapSize.set(1024, 1024)
// light1.shadow.bias = 1
// light1.shadow.normalBias = 1
scene.add(light1)

// const light2 = new THREE.PointLight( 0xffffff, 20.3, 20 );
// light2.position.set(0, 1, 0.5)

// scene.add(light2)

const light3 = new THREE.DirectionalLight(0xffffff, 30)
light3.position.set(0, 2, -1)
scene.add(light3)

// const light4 = new THREE.AmbientLight( 0xffffff, 1 );
// light4.position.set(0, 10, 5)
// scene.add(light4)

//Plane base

//Textures
const textureLoader = new THREE.TextureLoader()

const map = textureLoader.load('../.././bricks/Snow_001_COLOR.jpg')
const aoMap = textureLoader.load('../.././bricks/Snow_001_OCC.jpg')
const roughnessMap = textureLoader.load('../.././bricks/Snow_001_ROUGH.jpg')
const normalMap = textureLoader.load('../.././bricks/Snow_001_NORM.jpg')
const heightMap = textureLoader.load('../.././bricks/Snow_001_DISP.png')

const planeBase = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(20, 20, 2000, 2000),
  new THREE.MeshStandardMaterial({
    wireframe: false,
    map: map,
    aoMap: aoMap,
    roughnessMap: roughnessMap,
    normalMap: normalMap,
    displacementMap: heightMap,
    displacementScale: 0.2,
  })
)
planeBase.rotation.x = Math.PI * -0.5
planeBase.position.y = -0.2
scene.add(planeBase)

const envMap = new THREE.CubeTextureLoader().load([
  '../.././envmap/px.png',
  '../.././envmap/nx.png',
  '../.././envmap/py.png',
  '../.././envmap/ny.png',
  '../.././envmap/pz.png',
  '../.././envmap/nz.png',
])
// scene.environment = envMap
// scene.background = envMap;

//Init and mount the scene
export const initScene = (mountRef: any) => {
  currentRef = mountRef.current
  resize()
  currentRef.appendChild(renderer.domElement)
}

//Dismount and clena up the buffer from the scene
export const cleanUpScene = () => {
  ;(<any>scene).dispose()
  currentRef.removeChild(renderer.domElement)
}
