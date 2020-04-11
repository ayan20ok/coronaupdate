const container = document.getElementById("canvas");
  let camera;
  let controls;
  let scene;
  let renderer;
  let textlabel;
  let textlabel2 
  let earth;
 // init();
//animate();
  
function init(){
	//alert("hi")
scene = new THREE.Scene();
scene.background = new THREE.Color( 0x0000ff );

//Create a new perspective camera
camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 100);
camera.position.set(0,0,15);
 //scene.add(camera);



//Create a new ambient light
const light = new THREE.AmbientLight( 0x888888 )
scene.add( light )

//Create a new directional light
const lightD = new THREE.DirectionalLight( 0xfdfcf0, 1 )
light.position.set(20,10,20)
scene.add( lightD )

//Mesh
const earthGeometry = new THREE.SphereGeometry( 5, 50, 50 );
const earthMaterial = new THREE.MeshPhongMaterial({
  map: new THREE.ImageUtils.loadTexture('images/globe3.jpg'),
  color: 0xaaaaaa,
  specular: 0x333333,
  shininess: 25
});
earth = new THREE.Mesh(earthGeometry, earthMaterial);


//Labels
const textlabel = createLabel(.8, 1.6, -4.7,"IN",0);
const textlabel1 = createLabel(0, 2.8, -4.3,"CN",0);
const textlabel2 = createLabel(-2.7, 2.9, -3.2,"KR",0);
const textlabel3 = createLabel(-3.2, 2.7, -2.9,"JP",0);
const textlabel4 = createLabel(-1.2, 0, -4.9,"MY",0);
const textlabel5 = createLabel(-2.8, 1.2, -4.1,"PH",39);
const textlabel6 = createLabel(-3.1, -2.8, -2.9,"AU",40);
const textlabel7 = createLabel(0, 4.2, -2.9,"RU",0);
const textlabel8 = createLabel(2.5, 2.6, -3.6,"IR",0);
const textlabel9 = createLabel(3.3, 3.1, -2.3,"TR",0);
const textlabel10 = createLabel(3.6, 2.4, -2.7,"IL",0);
const textlabel11 = createLabel(3.2, 3.5, -1.8,"RO",0);
const textlabel12 = createLabel(1.4, 2.1, -4.4,"PK",0);
const textlabel13 = createLabel(3.2, 4, -.4,"NL",0);
const textlabel14 = createLabel(3.3, 3.9, -.2,"BE",0);
const textlabel15 = createLabel(3, 4.1, 0.05,"GB",0);
const textlabel16 = createLabel(3.7, 3.5, -.2,"FR",0);
const textlabel17 = createLabel(4, 3.2, 0.2,"ES",0);
const textlabel18 = createLabel(4, 3.2, 0.5,"PT",0);
const textlabel19 = createLabel(3.3, 3.8, -.7,"DE",0);
const textlabel20 = createLabel(3.6, 3.6, -.7,"CH",0);
const textlabel21 = createLabel(3.5, 3.7, -1,"AT",0);
const textlabel22 = createLabel(3.3, 3.7, -1.2,"CZ",0);
const textlabel23 = createLabel(3, 4.05, -1,"PL",0);
const textlabel24 = createLabel(2.8, 4.2, -.5,"DK",0);
const textlabel25 = createLabel(2.2, 4.6, -.5,"NO",0);
const textlabel26 = createLabel(2.6, 4.4, -.7,"SE",0);
const textlabel27 = createLabel(3.9, 3.3, -1.2,"IT",0);
const textlabel28 = createLabel(-1, 2.4, 4.4,"US",0);
const textlabel29 = createLabel(-1.5, 4.3, 2.5,"CA",0);
const textlabel30 = createLabel(3.5, -1, 3.5,"BR",-40);
const textlabel31 = createLabel(1.6, -2.5, 4.1,"CL",-40);

earth.add(textlabel);
earth.add(textlabel1)
earth.add(textlabel2);
earth.add(textlabel3);
earth.add(textlabel4);
earth.add(textlabel5);
earth.add(textlabel6);
earth.add(textlabel7);
earth.add(textlabel8);
earth.add(textlabel9);
earth.add(textlabel10);
earth.add(textlabel11);
earth.add(textlabel12);
earth.add(textlabel13);
earth.add(textlabel14);
earth.add(textlabel15);
earth.add(textlabel16);
earth.add(textlabel17);
earth.add(textlabel18);
earth.add(textlabel19);
earth.add(textlabel20);
earth.add(textlabel21);
earth.add(textlabel22);
earth.add(textlabel23);
earth.add(textlabel24);
earth.add(textlabel25);
earth.add(textlabel26);
earth.add(textlabel27);
earth.add(textlabel28);
earth.add(textlabel29);
earth.add(textlabel30);
earth.add(textlabel31);

earth.rotation.y = 60;


scene.add(earth);


//Create the WebGL renderer and set its size to the full dimensions of the screen.
renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);




// Create the interaction (click and touch)
const interaction = new THREE.Interaction(renderer, scene, camera);

//India		
textlabel.on('touchstart', function(ev) {
	
		 onDocumentMouseDown(ev,99);
        });
		
textlabel.on('click', function(ev) {
         onDocumentMouseDown(ev,99);
        });

//China		
textlabel1.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev,44);
        });
		

textlabel1.on('click', function(ev) {
         onDocumentMouseDown(ev,44);
        });
		
			
textlabel2.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 115);
        });
		

textlabel2.on('click', function(ev) {
         onDocumentMouseDown(ev, 115);
        });
		
				
textlabel3.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 108);
        });
		

textlabel3.on('click', function(ev) {
         onDocumentMouseDown(ev, 108);
        });
		
			
textlabel4.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 131);
        });
		

textlabel4.on('click', function(ev) {
         onDocumentMouseDown(ev, 131);
        });
		
			
textlabel5.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 172);
        });
		

textlabel5.on('click', function(ev) {
         onDocumentMouseDown(ev, 172);
        });
		
				
textlabel6.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 13);
        });
		

textlabel6.on('click', function(ev) {
         onDocumentMouseDown(ev, 13);
        });
		
			
textlabel7.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 180);
        });
		

textlabel7.on('click', function(ev) {
         onDocumentMouseDown(ev, 180);
        });
				
textlabel8.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 101);
        });
		

textlabel8.on('click', function(ev) {
         onDocumentMouseDown(ev, 101);
        });
		
		
textlabel9.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 225);
        });
		

textlabel9.on('click', function(ev) {
         onDocumentMouseDown(ev, 225);
        });
		
textlabel10.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 105);
        });
		

textlabel10.on('click', function(ev) {
         onDocumentMouseDown(ev,105);
        });
		
textlabel11.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 179);
        });
		

textlabel11.on('click', function(ev) {
         onDocumentMouseDown(ev, 179);
        });

		
textlabel12.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 165);
        });
		
textlabel12.on('click', function(ev) {
         onDocumentMouseDown(ev, 165);
        });
		
textlabel13.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 153);
        });
		

textlabel13.on('click', function(ev) {
         onDocumentMouseDown(ev, 153);
        });
		
textlabel14.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 21);
        });
		

textlabel14.on('click', function(ev) {
         onDocumentMouseDown(ev, 21);
        });

textlabel15.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 233);
        });
		

textlabel15.on('click', function(ev) {
         onDocumentMouseDown(ev, 233);
        });
		
textlabel16.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 73);
        });
		

textlabel16.on('click', function(ev) {
         onDocumentMouseDown(ev, 73);
        });
		
textlabel17.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 206);
        });
		

textlabel17.on('click', function(ev) {
         onDocumentMouseDown(ev, 206);
        });
		
textlabel18.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 175);
        });
		

textlabel18.on('click', function(ev) {
         onDocumentMouseDown(ev, 175);
        });
		
textlabel19.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 80);
        });
		

textlabel19.on('click', function(ev) {
         onDocumentMouseDown(ev, 80);
        });
		
textlabel20.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 213);
        });
		

textlabel20.on('click', function(ev) {
         onDocumentMouseDown(ev, 213);
        });
		
textlabel21.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 14);
        });
		

textlabel21.on('click', function(ev) {
         onDocumentMouseDown(ev, 14);
        });
		
textlabel22.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 56);
        });
		

textlabel22.on('click', function(ev) {
         onDocumentMouseDown(ev, 56);
        });
		
textlabel23.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 174);
        });
		

textlabel23.on('click', function(ev) {
         onDocumentMouseDown(ev, 174);
        });
		
textlabel24.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 58);
        });
		

textlabel24.on('click', function(ev) {
         onDocumentMouseDown(ev, 58);
        });

		
textlabel25.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 163);
        });
		

textlabel25.on('click', function(ev) {
         onDocumentMouseDown(ev, 163);
        });
		
textlabel25.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 212);
        });
		

textlabel25.on('click', function(ev) {
         onDocumentMouseDown(ev, 212);
        });
		
textlabel26.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 106);
        });
		

textlabel26.on('click', function(ev) {
         onDocumentMouseDown(ev, 106);
        });

		
textlabel27.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 106);
        });
		

textlabel27.on('click', function(ev) {
         onDocumentMouseDown(ev, 106);
        });
		
textlabel28.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 234);
        });
		

textlabel28.on('click', function(ev) {
         onDocumentMouseDown(ev, 234);
        });
		
textlabel29.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 38);
        });
		

textlabel29.on('click', function(ev) {
         onDocumentMouseDown(ev, 38);
        });
		
textlabel30.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 30);
        });
		

textlabel30.on('click', function(ev) {
         onDocumentMouseDown(ev, 30);
        });
		
textlabel31.on('touchstart', function(ev) {
	//alert("Hi T1S" + textlabel1.name);
          onDocumentMouseDown(ev, 43);
        });
		

textlabel31.on('click', function(ev) {
         onDocumentMouseDown(ev, 43);
        });
// This is curated for Threex.DomEvents solution;
//const domEvents = new THREEx.DomEvents(camera, renderer.domElement);
//domEvents.addEventListener(textlabel, 'mousedown', onDocumentMouseDown, false);
//domEvents.addEventListener(textlabel1, 'mousedown', onDocumentMouseDown, false);

//domEvents.addEventListener( 'touchstart', onDocumentMouseDown, false );
//textInt = makeInstance("Earth");

controls = new THREE.OrbitControls( camera, renderer.domElement )
controls.enableZoom = false;

window.addEventListener( 'resize', onWindowResize );


}

function onDocumentMouseDown(event, cont){
	//alert("Country " + event.target.name);
	const tempCountry = String(event.target.name);
	const tempE = tempCountry + "E"
	const tempD = tempCountry + "D"
    document.getElementById(tempCountry).className = "visibleLable";
	
	for (var i = 0; i < coronaData.length; i++) { 
	 
	   
	   
	   if(String(coronaData[i].CountryCode) == tempCountry)
		{
			//alert("Country " + coronaData[i].CountryCode  + i);
			document.getElementById(tempE).innerHTML = coronaData[i].TotalConfirmed;
			document.getElementById(tempD).innerHTML = coronaData[i].TotalDeaths;
			
		}
		
	}
	
	
	//alert("tempCountry" + coronaData[99].TotalConfirmed);
     
	
        //do stuff
}



function createLabel(xpos,ypos,zpos,cName,zrot)
{
	var canvas1 = document.createElement('canvas');
                        var context1 = canvas1.getContext('2d');
                        context1.font = "Bold 80px Arial";
                        context1.fillStyle = "rgba(255,0,0,1)";
                        context1.fillText('India', 0, 100);

                        // canvas contents will be used for a texture
                       var texture1 = new THREE.Texture(canvas1)
                        texture1.needsUpdate = true;
var tex= new THREE.ImageUtils.loadTexture('images/pinloc.png')
                        var material1 = new THREE.MeshBasicMaterial({ map:tex, side: THREE.DoubleSide });
                        material1.transparent = true;
						
	

                        var mesh1 = new THREE.Mesh(
                            new THREE.PlaneGeometry(.3, .3),
                            material1
                          );
                        mesh1.position.set(xpos, ypos, zpos);
                        mesh1.rotation.z = zrot;
						mesh1.rotation.y= 0;
						mesh1.rotation.x= 0;
//mesh1.rotation. = 10; 
						mesh1.name = cName;
                      // mesh1.callback = function() { console.log( this.name ); }
						return mesh1;
}


function onWindowResize() {
	
	console.log( 'You resized the browser window!' );

  // set the aspect ratio to match the new browser window aspect ratio
  camera.aspect = window.innerWidth/ window.innerHeight;


  // update the camera's frustum
  camera.updateProjectionMatrix();

  // update the size of the renderer AND the canvas
  renderer.setSize( window.innerWidth, window.innerHeight);

}

function animate() {
	//earth.rotation.y -= .0001;
    requestAnimationFrame(animate);
    controls.update();
    render();
}

function render() {
	
  renderer.render(scene, camera);
  
  
};
