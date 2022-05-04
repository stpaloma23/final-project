var R=Object.defineProperty;var k=(r,t,o)=>t in r?R(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o;var a=(r,t,o)=>(k(r,typeof t!="symbol"?t+"":t,o),o);import{S as C,P as $,G as I,T as F,B as U,M as p,a as m,b as B,D as b,A as z,c as V,d as A,R as D,e as _,f as H,g as N,O as j,h as S,i as Y,j as X,k as q,l as J,m as K,W as Z,n as Q,o as ee,p as te,V as T,C as ie}from"./vendor.dd463251.js";const oe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}};oe();var ne=`precision mediump float;

uniform float u_time;

varying vec2 UV;

void main(){
	UV = uv;
	vec4 mvPosition = modelViewMatrix*vec4(position,1.);
	mvPosition.y += sin(u_time / 2. + uv.x) * 2.0;
	mvPosition.x += cos(u_time / 1.3 + uv.y) * 2.0;
	gl_Position = projectionMatrix*mvPosition;
}`,se=`precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

varying vec2 UV;

void main(void){
	vec2 position = UV * 2. - 1.;
	
	float red = abs( 
		sin(position.x * position.y + u_time / 5.)
	);
	float green = abs( 
		sin(position.x * position.y + u_time / 4.) 
	);
	float blue = abs( 
		sin(position.x * position.y + u_time / 3.) 
	);

	gl_FragColor=vec4(red, green, blue, 1.0);
}`;class O{constructor(t,o){a(this,"scene");a(this,"camera");a(this,"renderer");a(this,"model");this.scene=new C,this.camera=new $(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=50,this.renderer=o,this.model=t}update(t){}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}}class ae extends O{constructor(t,o){super(t,o);a(this,"group");a(this,"cube");a(this,"plane");a(this,"exampleModel");a(this,"exampleTexture");a(this,"lightAmbient");a(this,"lightPoint");this.exampleModel=new I,this.exampleTexture=new F,this.group=new I,this.scene.add(this.group);const s=new U,e=new p({color:15776699});this.cube=new m(s,e),this.cube.castShadow=!0,this.group.add(this.cube);const i=new B(6,6,10,10),l=new p({color:6710886,side:b,flatShading:!0});this.plane=new m(i,l),this.plane.position.z=-2,this.plane.receiveShadow=!0,this.scene.add(this.plane),this.lightAmbient=new z(3355443),this.scene.add(this.lightAmbient),this.lightPoint=new V(16777215),this.lightPoint.position.set(-.5,.5,4),this.lightPoint.castShadow=!0,this.lightPoint.intensity=.25,this.scene.add(this.lightPoint);const g=1024,y=.5,f=500;this.lightPoint.shadow.mapSize.width=g,this.lightPoint.shadow.mapSize.height=g,this.lightPoint.shadow.camera.near=y,this.lightPoint.shadow.camera.far=f;let w;new A().setPath("../resources/textures/").load("uv_grid_opengl.jpg",d=>{d.wrapS=d.wrapT=D,d.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.exampleTexture=d,w=new _({map:d}),this.cube.material=w,new H().setPath("../resources/models/").load("teapot.gltf",G=>{this.exampleModel=G.scene,console.log(this.exampleModel),this.exampleModel.scale.set(.01,.01,.01),this.exampleModel.position.x=2,new p({color:2293538}),this.exampleModel.traverse(P=>{console.log(P),console.log(P.type==="Mesh"),P.type==="Mesh"&&(P.material=w)}),this.group.add(this.exampleModel)})})}update(t){this.cube.rotation.x+=.01,this.cube.rotation.y+=.01,this.group.rotation.set(0,0,this.model.groupAngle),this.group.position.set(this.model.groupX,this.model.groupY,0);const o=this.plane.geometry.attributes.position;for(let s=0;s<o.count;s++)o.setZ(s,Math.sin(t.getElapsedTime()+s-o.count/2)*.5+Math.cos(t.getElapsedTime()-s)*.5);this.plane.geometry.attributes.position.needsUpdate=!0,this.exampleModel!=null&&(this.exampleModel.rotateX(.01),this.exampleModel.rotateY(.01)),this.exampleTexture&&(this.exampleTexture.center.set(.5,.5),this.exampleTexture.rotation+=t.getDelta())}}class re extends O{constructor(t,o){super(t,o);a(this,"paloma");a(this,"stars");a(this,"tl");a(this,"lightPoint");a(this,"lightAmbient");a(this,"lightPoint2");a(this,"colorPalette",[16766720,16448210,12632256,16766720,16445630,15392968,16766720,15922164,16247182,12889773,16309886]);a(this,"starsizes",[1,.7,1,.5,.6,1]);a(this,"sizeInd",0);a(this,"colorInd",0);a(this,"outsideE");this.stars=[],this.tl=N.timeline(),this.lightPoint=new V(16777215),this.lightPoint.intensity=.8,this.lightPoint.position.set(0,0,-25),this.lightPoint.castShadow=!1,this.lightPoint2=this.lightPoint.clone(),this.lightPoint2.position.set(0,0,25),this.lightPoint2.intensity=.8,this.lightPoint2.castShadow=!1,this.scene.add(this.lightPoint2),this.scene.add(this.lightPoint),this.lightAmbient=new z(16777215),this.lightAmbient.intensity=.2,this.scene.add(this.lightAmbient),this.loadingObjects(),console.log(this.stars.length);for(let n=0;n<25;n++){this.sizeInd>this.starsizes.length-1&&(this.sizeInd=0),this.colorInd>this.colorPalette.length-1&&(this.colorInd=0);var s=new j(2),e=new p({color:16766720,shininess:100}),i=new m(s,e);this.tl.to(i.position,{x:Math.cos(n/25*Math.PI*2)*20,y:Math.sin(n/25*Math.PI*2)*20,duration:2,ease:"bounce.out",yoyo:!0},`${n/4}`);var l=new S(3),e=new p({color:16448210,shininess:100}),g=new m(l,e);this.tl.to(g.position,{x:Math.cos(n/25*Math.PI*2)*30,y:Math.sin(n/25*Math.PI*2)*30,duration:2,ease:"bounce.out",yoyo:!0},`${n/4}`);var l=new S(1),e=new p({color:16448210,shininess:100}),y=new m(l,e);this.tl.to(y.position,{x:Math.cos(n/20*Math.PI*2)*10,y:Math.sin(n/20*Math.PI*2)*10,duration:2,ease:"bounce.out",yoyo:!0},`${n/4}`);var s=new j(4),e=new p({color:16766720,shininess:100}),f=new m(s,e);this.tl.to(f.position,{x:Math.cos(n/25*Math.PI*2)*40,y:Math.sin(n/25*Math.PI*2)*40,duration:2,ease:"bounce.out",yoyo:!0},`${n/4}`);var l=new S(5),e=new p({color:16448210,shininess:100}),w=new m(l,e);this.tl.to(w.position,{x:Math.cos(n/20*Math.PI*2)*50,y:Math.sin(n/20*Math.PI*2)*50,duration:2,ease:"bounce.out",yoyo:!0},`${n/4}`),this.colorInd++,this.sizeInd++,this.scene.add(i,g,f,w,y),this.stars.push(i,g,f,w,y)}this.stars.forEach((n,d)=>{this.tl.to(n.position,{x:Math.cos(d/30*Math.PI*2-Math.PI)*10,duration:.1,ease:"sine.out",yoyo:!0}),d++}),this.stars.forEach((n,d)=>{d%2==0?(this.tl.to(n.position,{x:100,y:-100,duration:.3,stagger:.1}),this.tl.to(n.position,{x:-100,y:100,duration:.3,stagger:.1})):(this.tl.to(n.position,{x:-100,y:100,duration:.3,stagger:.1}),this.tl.to(n.position,{x:100,y:-100,duration:.3,stagger:.1})),d++}),this.stars.forEach(n=>{this.tl.to(n.position,{x:Math.random()*(60- -60)+-60,y:Math.random()*(50- -50)+-50})}),console.log(this.stars.length)}loadingObjects(){new Y().load("3dobj/paloma_standing.mtl",s=>{s.preload();for(const i of Object.values(s.materials))i.side=b;const e=new X;e.setMaterials(s),e.load("3dobj/paloma_standing.obj",i=>{this.paloma=i,i.name="paloma",i.position.y=-5,i.scale.set(7,7,7),i.rotateY(270),i.position.z=4,this.scene.add(i)})});var o=new A;o.load("3dobj/earth.jpeg",s=>{var e=new q(25),i=new _({map:s}),l=new m(e,i);l.position.y=-30,l.position.z=4,this.outsideE=l,this.scene.add(l)})}animate(){requestAnimationFrame(this.animate);var t=this.scene.getObjectByName("paloma");t&&(t.rotation.x+=.01),this.renderer.render(this.scene,this.camera)}}let h={groupX:0,groupY:0,groupAngle:0,activeView:1,pointerPosition:new T(0,0)},u,L=new ie,M,x,c,v=[],E;function le(){ce(),he(),de(),ue()}function he(){M=new J,document.body.appendChild(M.dom)}function de(){const r=new K;let t={position:0,play:()=>{c.tl.play()},pause:()=>{c.tl.pause()},restart:()=>{c.tl.pause(),c.tl.seek(0),c.tl.play()},newPlanet:()=>{}};const o=r.addFolder("timeline");o.open(),o.add(t,"position",0,8,.01).onChange(s=>{c.tl.pause(),c.tl.seek(s)}),o.add(t,"play"),o.add(t,"pause"),o.add(t,"restart")}function ce(){u=new Z,u.shadowMap.enabled=!0,u.shadowMap.type=Q,u.setPixelRatio(window.devicePixelRatio),u.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(u.domElement),x=new ae(h,u),v.push(x),c=new re(h,u),v.push(c),new ee;const r={u_time:{type:"f",value:1},u_resolution:{type:"v2",value:new T(800,800)}};E=new te({uniforms:r,vertexShader:ne,fragmentShader:se,side:b}),W()}function ue(){window.addEventListener("resize",pe,!1),window.addEventListener("pointermove",me),window.addEventListener("keydown",r=>{const{key:t}=r;switch(t){case"e":const o=window.open("","Canvas Image"),{domElement:s}=u,e=s.toDataURL();if(!o)return;o.document.write(`<img src='${e}' width='${s.width}' height='${s.height}'>`);break;case"ArrowRight":h.activeView=(h.activeView+1)%v.length;break;case"ArrowLeft":h.activeView=h.activeView-1,h.activeView<0&&(h.activeView=v.length-1);break}})}function pe(){x.onWindowResize(),c.onWindowResize()}function me(r){h.pointerPosition.x=r.clientX/window.innerWidth*2-1,h.pointerPosition.y=-(r.clientY/window.innerHeight)*2+1}function W(){requestAnimationFrame(()=>{W()});let r=L.getDelta();switch(E.uniforms.u_time.value+=r,h.activeView){case 0:x.update(L);break;case 1:c.update(L);break}M&&M.update(),u.render(v[h.activeView].scene,v[h.activeView].camera)}le();
