let started = false;
let initalized = false;
class Ball {
    constructor(freq, radius, position, speed, renderSize) {
        this.oscillator = new p5.Oscillator(freq, 'sawtooth');
        this.oscillator.amp(0);
        this.env = new p5.Envelope();
        this.env.setADSR(0.001, 0.5, 0.1, 0.5);
        this.env.setRange(1, 0);
        this.oscillator.start();
        this.radius = radius;
        this.position = position;
        this.speed = speed;
        this.renderSize = renderSize;
    }
    tick(deltaTime) {
        let brightness = 128;
        this.position += deltaTime * this.speed;
        if (cos(this.position) > 0 && cos(this.prevPos) < 0) {
            this.env.play(this.oscillator, 0, 0.1);
            brightness = 255;
            console.log('play');
        }
        this.prevPos = this.position;
        push();
        fill(brightness);
        let x = cos(this.position) * this.radius + width / 2;
        let y = sin(this.position) * this.radius + height / 2;
        circle(x, y, this.renderSize);
        pop();
    }
}
let balls;
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
}
function initializeStuff() {
    initalized = true;
    balls = [];
    let size = 24;
    for (let i = 0; i < size; i++) {
        balls[i] = new Ball(Math.pow(2, i / size + 1) * 30, height / (size * 2.5) * i + 10, 0, (PI - (PI * i / size) * 0.1) * 0.5, height / size / 4);
    }
}
function draw() {
    background(0);
    if (!started) {
        textAlign(CENTER);
        textSize(40);
        fill(255);
        text("Click To Start", width / 2, height / 2);
        return;
    }
    if (!initalized) {
        initializeStuff();
    }
    balls.forEach((ball) => {
        ball.tick(deltaTime / 1000);
    });
}
function mouseClicked() {
    started = true;
}
//# sourceMappingURL=build.js.map