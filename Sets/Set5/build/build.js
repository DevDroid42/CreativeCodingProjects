let started = false;
let initalized = false;
class Ball {
    constructor(freq, radius, position, speed, renderSize) {
        let voices = 6;
        let range = 2.5;
        this.oscillators = [];
        for (let i = -(range / 2); i < range / 2; i += range / voices) {
            let osc = new p5.Oscillator(freq + i, "sawtooth");
            osc.amp(0);
            osc.phase(random(0, 1));
            osc.start();
            this.oscillators.push(osc);
        }
        this.env = new p5.Envelope();
        this.env.setADSR(0.0001, 0, 1, 0.1);
        this.env.setRange(0.8, 0);
        this.radius = radius;
        this.position = position;
        this.speed = speed;
        this.renderSize = renderSize;
    }
    tick(deltaTime) {
        let brightness = 128;
        this.position += deltaTime * this.speed;
        if (cos(this.position) > 0 && cos(this.prevPos) < 0) {
            this.oscillators.forEach(osc => {
                this.env.play(osc, 0, 1);
            });
            brightness = 255;
            console.log("play");
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
    let scaleArray = [16.35, 18.35, 19.45, 21.83, 24.5, 25.96, 29.14];
    initalized = true;
    balls = [];
    let size = 7;
    for (let i = 0; i < size; i++) {
        balls[i] = new Ball(scaleArray[i % scaleArray.length] * Math.pow(2, 3), (height / (size * 2.5)) * i + 10, PI, ((i / size * (1 / (0.5 * size))) * PI + PI) * 0.5, height / size / 4);
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