const resolution = 60;
let forceField = 200;
let t = 0;
let noiseScale = 0.005;
let shapes: Shape[] = []
const shapeIDs = ['Circle', 'Square', 'Triangle']
let fft: p5.FFT;
let mouseVec: p5.Vector;
let clicked: boolean = false;
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

class Shape {
  constructor(
    public position: p5.Vector,
    public speed: p5.Vector,
    public shape: string
  ) { }

  public tick() {
    this.speed.add(
      createVector(
        (noise(this.position.x * noiseScale + t, this.position.y * noiseScale + t) - 0.5) * 100 * (0.5 + fft.getEnergy(50, 10000)),
        (noise(this.position.x * noiseScale + t, this.position.y * noiseScale + t + 10) - 0.5) * 100 * (0.5 + fft.getEnergy(50, 10000)),
      ).mult(fft.getEnergy('bass') * 0.01)
    );

    if (mouseVec.dist(this.position) < forceField) {
      if (clicked) {
        this.speed.add(p5.Vector.sub(mouseVec, this.position).mult(100));
      } else {
        this.speed.add(p5.Vector.sub(this.position, mouseVec).mult(100));
      }

    }
    this.position.add(this.speed.mult(deltaTime / 10000));
    if (this.position.x < 0) {
      this.position.x = width - 1;
    }
    if (this.position.y < 0) {
      this.position.y = height - 1;
    }
    if (this.position.x > width) {
      this.position.x = 1;
    }
    if (this.position.y > height) {
      this.position.y = 1;
    }
    this.draw();
  }

  public draw() {
    push();
    let h = noise(cos(this.speed.x / 25) * 0.5 + t, sin(this.speed.y / 25) * 0.5 + t) * this.speed.y * this.speed.y;
    let s = noise(cos(this.speed.x / 25) * 0.5 + t + 1, sin(this.speed.y / 25) * 0.5 + t + 1) * this.speed.y * this.speed.y * 20;
    let b = noise(cos(this.speed.x / 25) * 0.5 + t + 2, sin(this.speed.y / 25) * 0.5 + t + 2) * this.speed.y * this.speed.y * 10;
    fill(color(h, s, b));
    switch (this.shape) {
      case 'Circle':
        circle(this.position.x, this.position.y, 10);
        break;
      case 'Square':
        square(this.position.x, this.position.y, 10);
        break;
      case 'Triangle':
        triangle(this.position.x - 5, this.position.y - 5, this.position.x, this.position.y + 5, this.position.x + 5, this.position.y - 5);
        break;
      default:
        break;
    }
    pop();
  }
}

function mouseWheel(event) {
  forceField += event.delta;
  forceField = clamp(forceField, 0, width);
  push()
  noFill()
  stroke(255)
  circle(mouseVec.x, mouseVec.y, forceField * 2);
  pop()
}

function mouseClicked() {
  clicked = !clicked;
}

function setup() {
  frameRate(144);
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode("hsb");
  background(0);
  for (let x = 0; x < resolution; x++) {
    for (let y = 0; y < resolution; y++) {
      shapes.push(new Shape(createVector(width / resolution * x, height / resolution * y), createVector(0, 0), shapeIDs[round(random(0, 3))]));
    }
  }
  fft = new p5.FFT();
  let mic = new p5.AudioIn();
  mic.start()
  fft.setInput(mic);
  fft.smooth(0)
  mouseVec = createVector(0, 0);
}

function draw() {
  mouseVec.x = mouseX;
  mouseVec.y = mouseY;
  fft.analyze();
  t += deltaTime / 1000 * abs(mouseX - width / 2) / (width / 2);
  t += fft.getEnergy(50, 10000) / 2000;
  
  background(0, 0.1);
  push()
  fill(255)
  stroke(255)
  text('MIC', width, height / 3, round(width / 5), height / 2);
  text('CLICK', width, height / 3 * 2, round(width / 5), height / 2);
  text('SCROLL', width, height / 3 * 3, round(width / 5), height / 2);
  pop()
  //set a basic light to see that normals are calculated
  noStroke();
  shapes.forEach(s => {
    s.tick();
  });
}