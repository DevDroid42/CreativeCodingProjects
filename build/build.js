let balls;
let dTime = 0;
let hueOffset = 0;
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
class Ball {
    constructor(position, speed, diameter, color) {
        this.position = position;
        this.speed = speed;
        this.diameter = diameter;
        this.color = color;
    }
}
function setupBalls(circleCount) {
    balls = new Array(circleCount);
    for (let i = 0; i < balls.length; i++) {
        colorMode("hsb");
        balls[i] = new Ball(createVector(Math.round(Math.random() * windowWidth), Math.round(Math.random() * windowHeight)), createVector(Math.round(Math.random() * windowWidth) / 7, Math.round(Math.random() * windowHeight) / 7), Math.round((Math.random() * windowHeight) / 10 + 20), color((i / balls.length) * 128, 255, 255));
    }
}
function tickCircles() {
    push();
    balls.forEach((ball) => {
        fill(ball.color);
        stroke(ball.color);
        if (ball.position.x > windowWidth - ball.diameter / 2 || ball.position.x < ball.diameter / 2) {
            ball.position.x = clamp(ball.position.x, ball.diameter / 2, windowWidth - ball.diameter / 2);
            ball.speed.x *= -0.3;
        }
        if (ball.position.y > windowHeight - ball.diameter / 2 || ball.position.y - ball.diameter / 2 < 0) {
            ball.position.y = clamp(ball.position.y, ball.diameter / 2, windowHeight - ball.diameter / 2);
            ball.speed.y *= -0.3;
        }
        ball.position.add(p5.Vector.mult(ball.speed, dTime));
        ball.speed.y += 80 * dTime;
        circle(ball.position.x, ball.position.y, ball.diameter);
    });
    pop();
}
function circleCollision() {
    balls.forEach((ball) => {
        vertexData.forEach((vertex) => {
            if (Math.abs(ball.position.x - vertex.x) < ball.diameter / 4 && ball.position.y > vertex.y + 5) {
                ball.position.y = vertex.y + 10;
            }
            else if (ball.position.dist(vertex) < ball.diameter / 2) {
                let delta = p5.Vector.sub(ball.position, vertex);
                ball.speed.add(delta.mult(10));
            }
        });
    });
}
let mic;
let fft;
function setup() {
    createCanvas(windowWidth, windowHeight);
    setupBalls(10);
    noFill();
    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);
}
const spectrumSize = 1024;
const vertexData = new Array(spectrumSize);
function draw() {
    hueOffset += 1 * dTime;
    dTime = deltaTime / 1000;
    fft.smooth(0.9);
    background(0, 0.1);
    tickCircles();
    let spectrum = fft.analyze(spectrumSize);
    for (let i = 0; i < spectrum.length; i++) {
        vertexData[i] = createVector((i / spectrum.length) * windowWidth, map(spectrum[i] * 2, 0, 255, height, 0));
    }
    push();
    for (let i = 0; i < spectrum.length - 1; i++) {
        beginShape(QUADS);
        stroke((i / spectrum.length) * 128 + hueOffset * 20 % 255, 255, 255);
        fill((i / spectrum.length) * 128 + hueOffset * 20 % 255, 255, 255);
        vertex(vertexData[i].x, windowHeight);
        vertex(vertexData[i].x, vertexData[i].y);
        vertex(vertexData[i + 1].x, vertexData[i + 1].y);
        vertex(vertexData[i + 1].x, windowHeight);
        endShape();
    }
    pop();
    circleCollision();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
//# sourceMappingURL=build.js.map