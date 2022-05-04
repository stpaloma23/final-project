import './style.scss';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';
import * as DAT from 'dat.gui';

let model = {
	groupX: 0,
	groupY: 0,
	groupAngle: 0,
	activeView: 1,
	pointerPosition: new THREE.Vector2(0,0)
}

let renderer: THREE.WebGLRenderer;

let stats: any;

let raycaster: THREE.Raycaster;

let viewOne: ViewOne;

let views: BaseView[] = [];


import { BaseView } from './view/BaseView';
import { ViewOne } from './view/ViewOne';

function main() {
	initScene();
	initStats();
	initGUI();
	initListeners();
}

function initStats() {
	stats = new (Stats as any)();
	document.body.appendChild(stats.dom);
}

function initGUI() {
	const gui = new DAT.GUI();
	let tlSettings = {
		position: 0,
		play: () => { viewOne.tl.play() },
		pause: () => { viewOne.tl.pause() },
		restart: () => {
			viewOne.tl.pause()
			viewOne.tl.seek(0)
			viewOne.tl.play()
		},
	}
	const tlControls = gui.addFolder("timeline")
	tlControls.open()
	tlControls.add(tlSettings, "position", 0, 250, 0.01).onChange((value) => {
		viewOne.tl.pause()
		viewOne.tl.seek(value)
	})
	tlControls.add(tlSettings, "play")
	tlControls.add(tlSettings, 'pause');
	tlControls.add(tlSettings, "restart");
}

function initScene() {

	renderer = new THREE.WebGLRenderer();
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	viewOne = new ViewOne(model, renderer);
	views.push(viewOne);


	raycaster = new THREE.Raycaster();
	animate();
}

function initListeners() {
	window.addEventListener('resize', onWindowResize, false);

	window.addEventListener('pointermove', onPointerMove);
}

function onWindowResize() {
	viewOne.onWindowResize();
}

function onPointerMove(event: any) {
	model.pointerPosition.x = (event.clientX / window.innerWidth) * 2 - 1;
	model.pointerPosition.y = -(event.clientY / window.innerHeight) * 2 + 1;
}


function animate() {
	requestAnimationFrame(() => {
		animate();
	});
	renderer.render(viewOne.scene, viewOne.camera);
}

main();


