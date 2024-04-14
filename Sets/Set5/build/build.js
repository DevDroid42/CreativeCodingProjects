let t = 0;
let notes = 0;
let started = false;
let initalized = false;
class Ball {
    constructor(freq, radius, position, speed, renderSize) {
        this.brightness = 0;
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
        this.env.setADSR(0.01, 0, 1, 0.2);
        this.env.setRange(1, 0);
        this.radius = radius;
        this.position = position;
        this.speed = speed;
        this.renderSize = renderSize;
    }
    setFreq(freq) {
        this.oscillators.forEach(element => {
            element.freq(freq);
        });
    }
    tick(deltaTime) {
        this.position += deltaTime * this.speed;
        if (cos(this.position) > 0 && cos(this.prevPos) < 0) {
            this.oscillators.forEach(osc => {
                this.env.play(osc, 0, 0.2);
                notes += 1;
            });
            this.brightness = 255;
            console.log("play");
        }
        this.prevPos = this.position;
        push();
        if (this.brightness < 100) {
            fill(100);
        }
        else {
            fill(this.brightness);
        }
        this.brightness = this.brightness - (this.brightness * 3 * deltaTime);
        let x = cos(this.position) * this.radius + width / 2;
        let y = sin(this.position) * this.radius + height / 2;
        circle(x, y, this.renderSize);
        pop();
    }
}
let balls;
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(120);
}
const chords = [
    [16.35, 19.45, 24.5],
    [16.35, 19.45, 25.96],
    [19.45, 24.5, 29.14],
    [18.35, 21.83, 29.14]
];
let scaleArray;
function initializeStuff() {
    initalized = true;
    balls = [];
    let size = 32;
    for (let i = 0; i < size; i++) {
        balls[i] = new Ball(scaleArray[i % scaleArray.length] * Math.pow(2, 1 + Math.floor(i / scaleArray.length)), (height / (size * 2.5)) * i + 0, PI + (PI / 2 - 0.1) + (i % 2 == 0 ? PI : 0), 1 + 10 * (i / size), height / size / 4);
    }
}
function draw() {
    background(0, 20);
    if (!started) {
        textAlign(CENTER);
        textSize(40);
        fill(255);
        text("Click To Start", width / 2, height / 2);
        return;
    }
    t += deltaTime / 1000;
    scaleArray = chords[Math.floor(notes / 160) % chords.length];
    if (!initalized) {
        initializeStuff();
    }
    for (let i = 0; i < balls.length; i++) {
        const b = balls[i];
        b.setFreq(scaleArray[i / 2 % scaleArray.length] * Math.pow(2, 1 + Math.floor(i / 2 / scaleArray.length)));
        b.tick(deltaTime / 1000);
    }
}
function mouseClicked() {
    started = true;
}
//# sourceMappingURL=build.js.map