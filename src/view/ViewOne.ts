import THREE, { AmbientLight, Color, DodecahedronGeometry, DoubleSide, Group, Material, Mesh, MeshBasicMaterial, MeshPhongMaterial, OctahedronGeometry, PointLight, ShapeGeometry, SphereGeometry, TextureLoader, TorusGeometry, Vector3, WebGLRenderer } from "three";
import { BaseView } from "./BaseView";
import { gsap } from "gsap";
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader.js';
import {MTLLoader} from 'three/examples/jsm/loaders/MTLLoader.js'

export class ViewOne extends BaseView {

	paloma: any;
	stars: Array<any>;
	tl: any;
	lightPoint: PointLight;
	lightAmbient: AmbientLight;
	lightPoint2: PointLight;
	colorPalette = [0xffd700, 0xfafad2, 0xc0c0c0,0xffd700, 0xfaf0be, 0xeae0c8, 0xffd700, 0xf2f3f4, 0xf7e98e,0xc4aead, 0xf8de7e];
	starsizes = [1, .7, 1, .5, .6, 1];
	sizeInd = 0; 
	colorInd = 0;
	outsideE!: Mesh;


	constructor(model: any, renderer: WebGLRenderer) {
		super(model, renderer);

		this.stars = [];
		
		this.tl = gsap.timeline();
		

		this.lightPoint = new PointLight(0xffffff);
		this.lightPoint.intensity = 0.8;
		this.lightPoint.position.set(0, 0, -25);
		this.lightPoint.castShadow = false;

		this.lightPoint2 = this.lightPoint.clone();
		this.lightPoint2.position.set(0, 0, 25);
    	this.lightPoint2.intensity = .8;
    	this.lightPoint2.castShadow = false;
    	this.scene.add(this.lightPoint2);

		this.scene.add(this.lightPoint);

		this.lightAmbient = new AmbientLight(0xffffff);
		this.lightAmbient.intensity = 0.2;
	
		this.scene.add(this.lightAmbient);
		this.loadingObjects();
		console.log(this.stars.length);
		
		for (let i = 0; i < 25; i++) {
			if (this.sizeInd>this.starsizes.length-1){this.sizeInd = 0};
			if (this.colorInd>this.colorPalette.length-1){this.colorInd = 0};

			var octa = new OctahedronGeometry(2);
			var material = new MeshPhongMaterial( {color:0xFFD700, shininess: 100});
			var star = new Mesh( octa, material );
			this.tl.to(
				star.position, 
					{ 
						x: Math.cos((i / 25) * Math.PI * 2) * 20,
						y: Math.sin((i / 25) * Math.PI * 2) * 20,
						duration: 2,
						ease: "bounce.out",
						yoyo:true
					}, `${i/4}`);

			var dode = new DodecahedronGeometry(3);
			var material = new MeshPhongMaterial( {color:0xfafad2, shininess: 100});
			var star2 = new Mesh( dode, material );
			this.tl.to(
				star2.position, 
					{ 
						x: Math.cos((i / 25) * Math.PI * 2) * 30,
						y: Math.sin((i / 25) * Math.PI * 2) * 30,
						duration: 2,
						ease: "bounce.out",
						yoyo:true
					}, `${i/4}`);
			var dode = new DodecahedronGeometry(1);			
			var material = new MeshPhongMaterial( {color:0xfafad2, shininess: 100});
			var star5 = new Mesh( dode, material );
			this.tl.to(
				star5.position, 
					{ 
						x: Math.cos((i / 20) * Math.PI * 2) * 10,
						y: Math.sin((i / 20) * Math.PI * 2) * 10,
						duration: 2,
						ease: "bounce.out",
						yoyo:true
					}, `${i/4}`);
			var octa = new OctahedronGeometry(4);
			var material = new MeshPhongMaterial( {color:0xFFD700, shininess: 100});
			var star3 = new Mesh( octa, material );
			this.tl.to(
				star3.position, 
					{ 
						x: Math.cos((i / 25) * Math.PI *2) * 40,
						y: Math.sin((i / 25) * Math.PI *2) * 40,
						duration: 2,
						ease: "bounce.out",
						yoyo:true
					}, `${i/4}`);
			var  dode = new DodecahedronGeometry(5);	
			var material = new MeshPhongMaterial( {color:0xfafad2, shininess: 100});
			var star4 = new Mesh( dode, material );
			this.tl.to(
				star4.position, 
					{ 
						x: Math.cos((i / 20) * Math.PI *2) * 50,
						y: Math.sin((i / 20) * Math.PI *2) * 50,
						duration: 2,
						ease: "bounce.out",
						yoyo:true
					}, `${i/4}`);
										
			this.colorInd ++;
			this.sizeInd ++;
			this.scene.add(star,star2,star3,star4,star5);
			this.stars.push(star,star2,star3,star4,star5);
		}
		this.stars.forEach((star:Mesh, i:number)=>{
			this.tl.to(
			star.position,
			{
				x: Math.cos((i / 30) * Math.PI * 2 - Math.PI) * 10,
				duration: .1,
				ease: "sine.out",
				yoyo:true
				},
	
			);
			i++;
		});
		this.stars.forEach((star:Mesh, i:number)=>{
			if(i%2 ==0){
				this.tl.to(star.position,{
					x: 100,
					y: -100,
					duration: .3,
					stagger:.1
				})
				this.tl.to(star.position,{
					x: -100,
					y: 100,
					duration: .3,
					stagger:.1
				})
				this.tl.to( star.position , 
					{
					x: Math.random() * (60 - (-60)) + -60,
					y: Math.random() * (50 - (-50)) + -50,
					})
			}
			else{
				this.tl.to(star.position,{
					x: -100,
					y: 100,
					duration: .3,
					stagger:.1
				})
				this.tl.to(star.position,{
					x: 100,
					y: -100,
					duration: .3,
					stagger:.1
				})
				this.tl.to( star.position , 
					{
					x: Math.random() * (60 - (-60)) + -60,
					y: Math.random() * (50 - (-50)) + -50,
					})
			}
			i++;
		})

		console.log(this.stars.length);
	}
	loadingObjects(){

		const mtlLoader = new MTLLoader();
    	mtlLoader.load('3dobj/paloma_standing.mtl', (mtl) => {
        mtl.preload();
        for (const material of Object.values(mtl.materials)) {
            material.side = DoubleSide;
        }
        const objLoader = new OBJLoader();
        objLoader.setMaterials(mtl);
        objLoader.load('3dobj/paloma_standing.obj', (root) => {
			this.paloma = root;
			root.name = 'paloma';
			root.position.y = -5;
			root.scale.set(7,7,7);
			root.rotateY(270);
			root.position.z = 4
			this.scene.add(root);
        });
    	});
		var earthloader = new TextureLoader();
		earthloader.load( '3dobj/earth.jpeg',   ( texture: any ) => {
		var geometry = new SphereGeometry( 25);
		var material = new MeshBasicMaterial( { map: texture } );
		var earth = new Mesh( geometry, material );
		earth.position.y = -30;
		earth.position.z = 4;
		this.outsideE = earth;
		this.scene.add(earth)
		});
	
	}

	// https://stackoverflow.com/questions/51776220/animate-an-fbx-loaded-object-in-three-js
	animate() {
		requestAnimationFrame( this.animate );
		// You have access to scene - Get 'new_fbx' object from it
		var fbxObject = this.scene.getObjectByName('paloma');
		// Make sure this object exists before accessing it
		if (fbxObject) {
		   fbxObject .rotation.x += 0.01;
		}
		this.renderer.render( this.scene, this.camera );
	}
}
