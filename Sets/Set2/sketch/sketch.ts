let time = 0;
const noiseScale = 0.005;

class Sphere{
  constructor(
    public position: p5.Vector,
  ){}

  public draw(){
    push();
    let r = noise(cos(this.position.x / 25) * 0.5 + time, sin(this.position.z / 25)  * 0.5 + time) * this.position.y * this.position.y * 0.1;
    let g = noise(cos(this.position.x / 25) * 0.5 + time + 1 , sin(this.position.z / 25)  * 0.5 + time + 1) * this.position.y * this.position.y * 0.1;
    let b = noise(cos(this.position.x / 25) * 0.5 + time + 2, sin(this.position.z / 25)  * 0.5 + time + 2) * this.position.y * this.position.y * 0.1;
    ambientMaterial(r, g, b);
    translate(this.position);
    sphere(10, 3, 2);
    pop();
  }
}

let spheres: Sphere[] = []
let fft: p5.FFT;

function setup() {
  frameRate(120);
  for (let x = 0; x < 60; x++) {
    for (let z = 0; z < 60; z++) {
      spheres.push(new Sphere(createVector((x-30)*10, 0, (z-30)*10)));
    }
  }
  createCanvas(windowWidth, windowHeight, WEBGL);
  fft = new p5.FFT();
  let mic = new p5.AudioIn();
  mic.start()
  fft.setInput(mic);
  fft.smooth(0)
}

function draw() {
  fft.analyze();
  time += deltaTime / 1000 * abs(mouseX - width/2) / (width / 2);
  time += fft.getEnergy(50, 10000) / 2000;
  background(0);
  //set a basic light to see that normals are calculated
  noStroke();
  ambientLight(255);
  orbitControl();
  spheres.forEach(s => {
    s.position.y = noise(s.position.x * noiseScale + time , s.position.z  * noiseScale + time) * 100 * (0.5 + fft.getEnergy(50, 10000) / 200);
    s.draw();
  });
}