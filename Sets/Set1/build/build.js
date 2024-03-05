const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
let dTime = 1;
class Color {
    constructor(H, S, V) {
        this.H = H;
        this.S = S;
        this.V = V;
    }
    p5Color() {
        push();
        colorMode(HSL);
        let newColor = color(this.H, this.S, this.V, 1);
        pop();
        return newColor;
    }
}
class Ball {
    constructor(position, speed, diameter, color) {
        this.position = position;
        this.speed = speed;
        this.diameter = diameter;
        this.color = color;
    }
    draw() {
        push();
        fill(this.color.p5Color());
        circle(this.position.x, this.position.y, this.diameter);
        pop();
    }
    tick(delta) {
        if (ball.position.x > windowWidth - ball.diameter / 2 || ball.position.x < ball.diameter / 2) {
            ball.position.x = clamp(ball.position.x, ball.diameter / 2, windowWidth - ball.diameter / 2);
            ball.speed.x *= -0.5;
        }
        if (ball.position.y > (windowHeight) - ball.diameter / 2 || ball.position.y - ball.diameter / 2 < 0) {
            ball.position.y = clamp(ball.position.y, ball.diameter / 2, windowHeight - ball.diameter / 2);
            ball.speed.y *= -0.5;
        }
        ball.position.add(p5.Vector.mult(ball.speed, delta));
    }
    attract(delta) {
        let mousePos = createVector(mouseX, mouseY);
        ball.speed.add(p5.Vector.mult(p5.Vector.sub(mousePos, ball.position), delta * 10));
    }
}
let ball;
function setup() {
    frameRate(120);
    createCanvas(windowWidth, windowHeight);
    ball = new Ball(createVector(Math.round(Math.random() * windowWidth), Math.round(Math.random() * windowHeight)), createVector(Math.round(Math.random() * windowWidth) / 100, Math.round(Math.random() * windowHeight) / 100), windowHeight / 10, new Color(255, 255, 255));
}
function draw() {
    background(0, 10);
    dTime = deltaTime / 1000;
    ball.tick(dTime);
    ball.attract(dTime);
    ball.draw();
    color(255, 0, 0);
    circle(mouseX, mouseY, 100);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
//# sourceMappingURL=build.js.map